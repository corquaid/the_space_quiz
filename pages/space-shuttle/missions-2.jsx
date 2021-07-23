import Head from "next/head";
import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const Missions2 = ({ quizData }) => {
    const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/5/53/Space_shuttles_Atlantis_%28STS-125%29_and_Endeavour_%28STS-400%29_on_launch_pads.jpg";

    const tooltip = "Space Shuttles Atlantis (foreground) and Endeavour on adjacent launch pads at Kennedy Space Center in September 2008. Credit: NASA";
    return (
        <>
            <Head>
                <title>Space Shuttle | Missions 2 | The Space Quiz</title>
                <meta name="description" content="Quiz on the Missions & Machines of the Space Shuttle Program" />
            </Head>
            <QuizPanel quizData={quizData} imageUrl={imageUrl} tooltip={tooltip} />;
        </>
    );
};

export default Missions2;

// getserversideprops here
export async function getServerSideProps() {
    try {
        const { db } = await connectToDatabase();

        const data = await db.collection("shuttle_missions2").find({}).toArray();

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
