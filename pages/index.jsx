import Head from "next/head";
import Link from "next/link";
import QuizCard from "../components/QuizCard";
import styles from "../styles/Layout.module.css";
import { table, minifyRecords } from "../utils/airtable";

export default function Home({ quizCategories }) {
    return (
        <div className={styles.gridContainer}>
            <Head>
                <title>Home | The Space Quiz</title>
                <meta name="description" content="The Best Space Quiz In The Universe" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
            </Head>

            {quizCategories.map(item => {
                const { id, title, slug, tooltip } = item.fields;
                const url = item.fields.photo[0].url;
                return (
                    <Link href={`/${encodeURIComponent(slug)}/main`} passHref key={id}>
                        <a>
                            <QuizCard title={title} image={url} tooltip={tooltip} />
                        </a>
                    </Link>
                );
            })}
        </div>
    );
}

export async function getServerSideProps() {
    try {
        const dataItems = await table
            .select({
                sort: [{ field: "id", direction: "asc" }],
            })
            .firstPage();
        return {
            props: {
                quizCategories: minifyRecords(dataItems),
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
