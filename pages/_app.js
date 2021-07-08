import "../styles/globals.css";
import Layout from "../components/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { QuizProvider } from "../contexts/QuizContext";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const MyApp = ({ Component, pageProps }) => {
    return (
        <QuizProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </QuizProvider>
    );
};

export default MyApp;
