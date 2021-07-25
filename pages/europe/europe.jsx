import Head from "next/head";
import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const Europe = ({ quizData }) => {
    const imageUrl =
        "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2007/06/ariane-5_eca_launch/9776960-3-eng-GB/Ariane-5_ECA_launch_pillars.jpg";

    const tooltip = "Launch of Ariane 5 from Kourou, French Guiana, in February 2005. Credit: ESA/CNES/Arianespace";
    return (
        <>
            <Head>
                <title>Europe | The Space Quiz</title>
                <meta name="description" content="Quiz on the European space program" />
            </Head>
            <QuizPanel quizData={quizData} imageUrl={imageUrl} tooltip={tooltip} />
        </>
    );
};

export default Europe;

// getserversideprops here
export async function getServerSideProps() {
    try {
        const { db } = await connectToDatabase();

        const data = await db.collection("europe").find({}).toArray();

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
