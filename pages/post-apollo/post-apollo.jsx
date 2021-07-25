import Head from "next/head";
import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const PostApollo = ({ quizData }) => {
    const imageUrl =
        "https://upload.wikimedia.org/wikipedia/commons/2/2d/Astronaut_Donald_K._Slayton_and_cosmonaut_Aleksey_A._Leonov_in_the_Soyuz_Orbital_Module.jpg";

    const tooltip =
        "Deke Slayton and Alexei Leonov greet each other in space during the Apollo-Soyuz Test Program flight in July 1975. Credit: NASA";
    return (
        <>
            <Head>
                <title>Post-Apollo | The Space Quiz</title>
                <meta name="description" content="Quiz on the Post-Apollo years of NASA" />
            </Head>
            <QuizPanel quizData={quizData} imageUrl={imageUrl} tooltip={tooltip} />
        </>
    );
};

export default PostApollo;

// getserversideprops here
export async function getServerSideProps() {
    try {
        const { db } = await connectToDatabase();

        const data = await db.collection("post_apollo").find({}).toArray();

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
