import React, { useState, useEffect } from "react";
import './css/Loader.css';

const Loader = () => {
    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setTextVisible(true),3000);
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
