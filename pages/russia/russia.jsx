import Head from "next/head";
import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const Russia = ({ quizData }) => {
    const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/1/1b/ISS-30_EVA_Oleg_Kononenko_and_Anton_Shkaplerov_2.jpg";

    const tooltip = "Cosmonauts Oleg Kononenko and Anton Shkaplerov during a spacewalk outside the International Space Station in February 2012. Credit: NASA";
    return (
        <>
            <Head>
                <title>Russia In Space | The Space Quiz</title>
                <meta name="description" content="Quiz on the Russian space program" />
            </Head>
            <QuizPanel quizData={quizData} imageUrl={imageUrl} tooltip={tooltip} />;
        </>
    );
};

export default Russia;

// getserversideprops here
export async function getServerSideProps() {
    try {
        const { db } = await connectToDatabase();

        const data = await db.collection("russia").find({}).toArray();

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
