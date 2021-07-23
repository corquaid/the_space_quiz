import Head from "next/head";
import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const Missions = ({ quizData }) => {
    const imageUrl = "https://www.nasa.gov/sites/default/files/thumbnails/image/9-s66-18602a.jpg";

    const tooltip =
        "Gemini 8 astronauts Dave Scott and Neil Armstrong sit in their Gemini spacecraft following an emergency splashdown in March 1966. Credit: NASA";
    return (
        <>
            <Head>
                <title>Gemini | Missions & Machines | The Space Quiz</title>
                <meta name="description" content="Quiz on the Gemini Program Missions & Machines" />
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

        const data = await db.collection("gemini_missions").find({}).toArray();

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
