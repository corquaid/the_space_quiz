import Head from "next/head";
import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const NewSpace = ({ quizData }) => {
    const imageUrl = "https://dl.airtable.com/.attachmentThumbnails/73b3333532a8672ffd4f0f16582927ac/244f94d3";

    const tooltip = "Rocket Lab's futuristic Mission Control in Auckland, New Zealand. Credit: Rocket Lab";
    return (
        <>
            <Head>
                <title>Rocket Lab | The Space Quiz</title>
                <meta name="description" content="Quiz on aerospace newcomers Rocket Lab" />
            </Head>
            <QuizPanel quizData={quizData} imageUrl={imageUrl} tooltip={tooltip} />;
        </>
    );
};

export default NewSpace;

// getserversideprops here
export async function getServerSideProps() {
    try {
        const { db } = await connectToDatabase();

        const data = await db.collection("rocket_lab").find({}).toArray();

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
