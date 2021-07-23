import Head from "next/head";
import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const Easy = ({ quizData }) => {
    const imageUrl =
        "https://cdn.theatlantic.com/media/img/photo/2019/07/apollo-11-moon-landing-photos-50-ye/a01_40-5903-1/original.jpg";

    const tooltip = "The second human to walk on the Moon, with the first visible in his helmet visor, during Apollo 11. Credit: NASA";

    return (
        <>
            <Head>
                <title>Apollo | Easy | The Space Quiz</title>
                <meta name="description" content="Easy Quiz on the Apollo Program" />
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

        const data = await db.collection("apollo_easy").find({}).toArray();

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
