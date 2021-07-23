import Head from "next/head";
import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const Mercury = ({ quizData }) => {
    const imageUrl = "https://www.nasa.gov/sites/default/files/thumbnails/image/3b-recovery_of_alan_b_shepard-2.jpg";

    const tooltip =
        "Astronaut Alan Shepard is winched to the recovery helicopter following his historic flight in May 1961. Credit: NASA";
    return (
        <>
            <Head>
                <title>Mercury | The Space Quiz</title>
                <meta name="description" content="Quiz on the NASA's Mercury Program" />
            </Head>
            <QuizPanel quizData={quizData} imageUrl={imageUrl} tooltip={tooltip} />;
        </>
    );
};

export default Mercury;

// getserversideprops here
export async function getServerSideProps() {
    try {
        const { db } = await connectToDatabase();

        const data = await db.collection("mercury").find({}).toArray();

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
