import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const People = ({ quizData }) => {
    const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/b/bb/Astronaut_Group_2_-_S62-6759.jpg";

    const tooltip = "Official group portrait of the NASA Group 2 astronauts in September 1962. Credit: NASA";
    return <QuizPanel quizData={quizData} imageUrl={imageUrl} tooltip={tooltip} />;
};

export default People;

// getserversideprops here
export async function getServerSideProps() {
    try {
        const { db } = await connectToDatabase();

        const data = await db.collection("apollo_people").find({}).toArray();

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
