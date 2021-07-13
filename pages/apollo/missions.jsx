import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const Missions = ({ quizData }) => {
    return (
        <QuizPanel quizData={quizData}/>
    )
}

export default Missions;

// getserversideprops here
export async function getServerSideProps() {
    try {
        const { db } = await connectToDatabase();

        const data = await db.collection("apollo_missions").find({}).toArray();

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