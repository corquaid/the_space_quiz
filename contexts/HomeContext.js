import { createContext, useState } from "react";

const HomeContext = createContext();

const HomeProvider = ({ children }) => {
    const [quizCategories, setCategories] = useState([]);

    const getCategories = async () => {
        try {
            const res = await fetch("/api/home");
            const categories = await res.json();
            setCategories(categories);
        } catch (err) {
            console.error(err);
        }
    };

    const contextProps = {
        quizCategories,
        getCategories,
    };

    return <HomeContext.Provider value={contextProps}>{children}</HomeContext.Provider>;
};

export { HomeProvider, HomeContext };
