import Head from "next/head";
import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const Missions = ({ quizData }) => {
    const imageUrl =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Gumdrop_Meets_Spider_-_GPN-2000-001100.jpg/1024px-Gumdrop_Meets_Spider_-_GPN-2000-001100.jpg";

    const tooltip =
        "Astronaut Dave Scott stands in the open hatch of the Apollo 9 command module while in orbit in March 1969. Credit: NASA";

    return (
        <>
            <Head>
                <title>Apollo | Missions & Machines | The Space Quiz</title>
                <meta name="description" content="Quiz on the Apollo Program Missions & Machines" />
            </Head>
            <QuizPanel quizData={quizData} imageUrl={imageUrl} tooltip={tooltip} />;
        </>
    );
};

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
