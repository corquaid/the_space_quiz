import Head from "next/head";
import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const People = ({ quizData }) => {
    const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/c/c5/JSC2011-E205613.jpg";

    const tooltip =
        "The first and final crews of the Space Shuttle pictured together in November 2011, (l-r) Doug Hurley, Bob Crippen, John Young, Chris Ferguson, Sandy Magnus and Rex Walheim. Credit: NASA";
    return (
        <>
            <Head>
                <title>Space Shuttle | People | The Space Quiz</title>
                <meta name="description" content="Quiz on the people of the Space Shuttle Program" />
            </Head>
            <QuizPanel quizData={quizData} imageUrl={imageUrl} tooltip={tooltip} />;
        </>
    );
};

export default People;

// getserversideprops here
export async function getServerSideProps() {
    try {
        const { db } = await connectToDatabase();

        const data = await db.collection("shuttle_people").find({}).toArray();

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
