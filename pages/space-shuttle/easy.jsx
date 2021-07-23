import Head from "next/head";
import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const Easy = ({ quizData }) => {
    const imageUrl = "https://www.nasa.gov/sites/default/files/images/595542main_Endeavour_on_SCA.jpg";

    const tooltip =
        "Space Shuttle Endeavour hitches a ride back to the Kennedy Space Center on a modified Boeing 747 in November 2008. Credit: NASA";
    return (
        <>
            <Head>
                <title>Space Shuttle | Easy | The Space Quiz</title>
                <meta name="description" content="Easy Quiz on the Space Shuttle" />
            </Head>
            <QuizPanel quizData={quizData} imageUrl={imageUrl} tooltip={tooltip} />;
        </>
    );
};

export default Easy;

// getserversideprops here
export async function getServerSideProps() {
    try {
        const { db } = await connectToDatabase();

        const data = await db.collection("shuttle_easy").find({}).toArray();

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
