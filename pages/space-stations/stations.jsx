import Head from "next/head";
import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const SpaceStations = ({ quizData }) => {
    const imageUrl = "https://www.nasa.gov/images/content/498196main_iss025e011211_1600_946-710.jpg";

    const tooltip = "Astronaut Scott Kelly probably wishing he had more arms on the ISS in November 2010. Credit: NASA";
    return (
        <>
            <Head>
                <title>Space Stations | The Space Quiz</title>
                <meta name="description" content="Quiz on the history of Space Stations" />
            </Head>
            <QuizPanel quizData={quizData} imageUrl={imageUrl} tooltip={tooltip} />
        </>
    );
};

export default SpaceStations;

// getserversideprops here
export async function getServerSideProps() {
    try {
        const { db } = await connectToDatabase();

        const data = await db.collection("space_stations").find({}).toArray();

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
