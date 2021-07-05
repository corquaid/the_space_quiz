import "../styles/globals.css";
import Layout from "../components/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { HomeProvider } from "../contexts/HomeContext";
import Home from ".";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const MyApp = ({ Component, pageProps }) => {
    return (
        <HomeProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </HomeProvider>
    );
};

export default MyApp;
