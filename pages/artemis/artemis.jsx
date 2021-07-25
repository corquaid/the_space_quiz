import Head from "next/head";
import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const Artemis = ({ quizData }) => {
    const imageUrl =
        "https://cdn.arstechnica.net/wp-content/uploads/2021/01/SLS-Green-Run-Jan-16-2021-1431-800x533.jpg";

    const tooltip =
        "The SLS Core Stage for the Artemis 1 mission pictured during a hot-fire test at NASA's Stennis Space Center  in January 2021. Credit: Trevor Mahlmann/Ars Technica";
    return (
        <>
            <Head>
                <title>Artemis | The Space Quiz</title>
                <meta name="description" content="Quiz on NASA's Artemis Program" />
            </Head>
            <QuizPanel quizData={quizData} imageUrl={imageUrl} tooltip={tooltip} />
        </>
    );
};

export default Artemis;

// getserversideprops here
export async function getServerSideProps() {
    try {
        const { db } = await connectToDatabase();

        const data = await db.collection("artemis").find({}).toArray();

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
