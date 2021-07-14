import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const People = ({ quizData }) => {
    const imageUrl = "http://www.americaspace.com/wp-content/uploads/2013/11/gemini-xii-crews.jpg";

    const tooltip = "The prime and backup crews for Gemini 12, (l-r) Buzz Aldrin, Gene Cernan, Jim Lovell, Gordo Cooper";
    return <QuizPanel quizData={quizData} imageUrl={imageUrl} tooltip={tooltip} />;
};

export default People;

// getserversideprops here
export async function getServerSideProps() {
    try {
        const { db } = await connectToDatabase();

        const data = await db.collection("gemini_people").find({}).toArray();

        return {
            props: {
                quizData: JSON.parse(JSON.stringify(data)),
            },
        };
    } catch (err) {
        console.error(err);
        return {
            props: {
                err: "Something went wrong",
            },
        };
    }
}
