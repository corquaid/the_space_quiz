import Head from "next/head";
import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const Easy = ({ quizData }) => {
    const imageUrl = "https://www.nasa.gov/sites/default/files/thumbnails/image/m19-037_0.jpg";

    const tooltip = "Launch of Arabsat-6A on Falcon Heavy from Kennedy Space Center in April 2019. Credit: SpaceX";
    return (
        <>
            <Head>
                <title>SpaceX | Easy | The Space Quiz</title>
                <meta name="description" content="Easy Quiz on aerospace pioneers SpaceX" />
            </Head>
            <QuizPanel quizData={quizData} imageUrl={imageUrl} tooltip={tooltip} />
        </>
    );
};

export default Easy;

// getserversideprops here
export async function getServerSideProps() {
    try {
        const { db } = await connectToDatabase();

        const data = await db.collection("spacex_easy").find({}).toArray();

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
