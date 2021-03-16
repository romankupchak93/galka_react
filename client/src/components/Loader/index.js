import React, { useState, useEffect } from "react";
import './Loader.css';

// const Loader = ({ text = 'Завантаження...', textDelay = 1000 }) => {

const Loader = () => {
    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setTextVisible(true));
        return () => clearTimeout(timeout);
    }, [setTextVisible]);

    return (
        <>
            <div className="loader" />
            {textVisible}
        </>
    );
};

export default Loader;
