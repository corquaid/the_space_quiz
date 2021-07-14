import QuizPanel from "../../components/QuizPanel";
import { connectToDatabase } from "../../utils/mongodb";

const Missions1 = ({ quizData }) => {
    const imageUrl = "https://www.nasa.gov/sites/default/files/thumbnails/image/iss022e062672.jpg";

    const tooltip = "The silhouette of Shuttle Endeavour is photographed from the ISS during STS-130 in February 2010. Credit: NASA";
    return <QuizPanel quizData={quizData} imageUrl={imageUrl} tooltip={tooltip} />;
};

export default Missions1;

// getserversideprops here
export async function getServerSideProps() {
    try {
        const { db } = await connectToDatabase();

        const data = await db.collection("shuttle_missions1").find({}).toArray();

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
