import Head from "next/head";
import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const RoboticExplorers = ({ quizData }) => {
    const imageUrl = "https://rps.nasa.gov/system/resources/detail_files/70_pia01466_1600.jpg";

    const tooltip =
        "The 'first wheels on Mars' Sojourner rover is visible in this image taken by the Mars Pathfinder lander in 1997. Credit: NASA/JPL-Caltech";
    return (
        <>
            <Head>
                <title>Robotic Explorers | The Space Quiz</title>
                <meta name="description" content="Quiz on the history of robotic space exploration." />
            </Head>
            <QuizPanel quizData={quizData} imageUrl={imageUrl} tooltip={tooltip} />;
        </>
    );
};

export default RoboticExplorers;

// getserversideprops here
export async function getServerSideProps() {
    try {
        const { db } = await connectToDatabase();

        const data = await db.collection("robots").find({}).toArray();

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
