import Head from "next/head";
import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const NewSpace = ({ quizData }) => {
    const imageUrl = "https://cdn.mos.cms.futurecdn.net/Gfqz6WiRFBqFrZmhD6F9vH-1024-80.jpg.webp";

    const tooltip =
        "Astra's Rocket 3.1 launches from the Pacific Spaceport Complex in Alaska in September 2020. Credit: Astra/John Kraus";
    return (
        <>
            <Head>
                <title>New Space | The Space Quiz</title>
                <meta name="description" content="Quiz on the New Space race of the 21st century." />
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

        const data = await db.collection("new_space").find({}).toArray();

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
