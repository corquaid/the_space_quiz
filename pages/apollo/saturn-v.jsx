import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const Saturn = ({ quizData }) => {
    const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/e/e2/Apollo_11_first_stage_separation.jpg";

    const tooltip = "First stage separation of the Apollo 11 Saturn V rocket in July 1969. Credit: NASA";
    return <QuizPanel quizData={quizData} imageUrl={imageUrl} tooltip={tooltip} />;
};

export default Saturn;

// getserversideprops here
export async function getServerSideProps() {
    try {
        const { db } = await connectToDatabase();

        const data = await db.collection("apollo_saturn").find({}).toArray();

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
