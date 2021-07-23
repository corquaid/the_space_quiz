import Head from "next/head";
import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const Machines = ({ quizData }) => {
    const imageUrl =
        "https://www.teslarati.com/wp-content/uploads/2020/03/Starship-2019-SpaceX-Raptor-static-fire-2X-1-crop-2.jpg";

    const tooltip = "The new Raptor rocket engine pictured during a test firing in January 2019. Credit: SpaceX";
    return (
        <>
            <Head>
                <title>SpaceX | Machines | The Space Quiz</title>
                <meta name="description" content="Quiz on the amazing machines of SpaceX" />
            </Head>
            <QuizPanel quizData={quizData} imageUrl={imageUrl} tooltip={tooltip} />;
        </>
    );
};

export default Machines;

// getserversideprops here
export async function getServerSideProps() {
    try {
        const { db } = await connectToDatabase();

        const data = await db.collection("spacex_machines").find({}).toArray();

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
