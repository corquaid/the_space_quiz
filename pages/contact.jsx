import Head from "next/head";
import styles from "../styles/Contact.module.css";
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log("Sending");

        fetch("/api/contact", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res => {
            console.log("Response received");
            if (res.status === 200) {
                console.log("Response succeeded!");
            }
        });
        reset();
    };

    return (
        <div className={styles.main}>
            <Head>
                <title>Contact | The Space Quiz</title>
                <meta name="description" content="Get in touch with The Space Quiz" />
            </Head>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h1>Get in touch...</h1>
                    <br />
                    <p>
                        Thanks for visiting The Space Quiz! If you've enjoyed testing your space knowledge and have a
                        message or some ideas for new quizzes, improvements or even a collaboration in the future,
                        please get in touch. The Space Quiz is on{" "}
                        <a href="https://twitter.com/thespacequiz" target="_blank">
                            Twitter{" "}
                        </a>{" "}
                        too!
                    </p>
                </div>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Name</label>
                        <input className={styles.inputField} type="text" name="name" {...register("name")} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input className={styles.inputField} type="email" name="password" {...register("password")} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea className={styles.inputMessage} type="text" name="message" {...register("message")} />
                        <button className={styles.button} type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
