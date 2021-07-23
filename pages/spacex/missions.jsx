import Head from "next/head";
import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const Missions = ({ quizData }) => {
    const imageUrl = "https://www.nasa.gov/sites/default/files/thumbnails/image/jsc2021e010832.jpg";

    const tooltip =
        "The crew of the SpaceX Crew-2 mission pictured in March 2021, (l-r) Thomas Pesquest, Megan McArthur, Shane Kimbrough, Akihiko Hoshide. Credit: SpaceX";
    return (
        <>
            <Head>
                <title>SpaceX | Missions | The Space Quiz</title>
                <meta name="description" content="Quiz on the mission history of SpaceX" />
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

        const data = await db.collection("spacex_missions").find({}).toArray();

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
