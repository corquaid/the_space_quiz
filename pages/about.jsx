import Head from "next/head";
import styles from "../styles/Layout.module.css";

const about = () => {
    return (
        <div className={styles.main}>
            <Head>
                <title>About | The Space Quiz</title>
                <meta name="description" content="The Origins Of The Space Quiz" />
            </Head>
            <div className={styles.textBodyContainer}>
                <div className={styles.textBody}>
                    <h1>About The Space Quiz</h1>
                    <br />
                    <p>
                        Hi there! I'm Cormac and I'm the creator of The Space Quiz. I've been into quizzes since I was
                        in school and I've always enjoyed annoying people with some obscure trivia. I'm an engineer by
                        profession and I'm working towards becoming a real-life working web developer in the near
                        future.
                    </p>
                    <br />
                    <p>
                        This website was first created on Wix in Spring 2020, pretty standard stuff. But it helped me to
                        look at web development as a potential career, and as of relaunching the site in Summer 2021,
                        I've rebuilt the website from the ground up, using Next.Js. My intention is to improve the site over time with new features and quizzes.
                    </p>
                    <br />
                    <p>
                        As for space, I enjoyed astronomy and stargazing for a long time but something changed forever
                        on February 6th 2018. The more astute space nerd will recognise that date as the first launch of
                        SpaceX's Falcon Heavy rocket. I was one of over two million peole watching live as the rocket
                        launched and then blew everyone away by landing its two boosters simultaneously at Cape
                        Canaveral eight minutes later! Ever since that evening, rockets and spaceflight have been a bit
                        of an obsession for me.
                    </p>
                    <br />
                    <p>
                        The Space Quiz is an attempt to combine these two interests of mine - I mean who doesn't like
                        space and who doesn't like quizzes?!
                    </p>
                    <br />
                    <p>
                        Thanks so much for checking out the site and pitting your wits against The Space Quiz! Be sure
                        to follow on{" "}
                        <a href="https://twitter.com/thespacequiz" target="_blank">
                            Twitter
                        </a>{" "}
                        to catch new quizzes and updates as soon as they happen.
                    </p>
                    <br />
                    <p>Thank you!</p>
                    <br />
                    <p>Cormac</p>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default about;
