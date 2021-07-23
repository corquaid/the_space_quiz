import Head from "next/head";
import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const ULA = ({ quizData }) => {
    const imageUrl = "https://dl.airtable.com/.attachmentThumbnails/f2b4d071e42a9453c158b9cce5c481de/33b72e05";

    const tooltip = "Closeup view of Atlas V launching the AEHF-6 satellite in March 2020. Credit: ULA";

    return (
        <>
            <Head>
                <title>ULA | The Space Quiz</title>
                <meta name="description" content="Quiz on aerospace heavyweights United Launch Alliance" />
            </Head>
            <QuizPanel quizData={quizData} imageUrl={imageUrl} tooltip={tooltip} />
        </>
    );
};

export default ULA;

// getserversideprops here
export async function getServerSideProps() {
    try {
        const { db } = await connectToDatabase();

        const data = await db.collection("ula").find({}).toArray();

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
