import React from "react";
import './css/Footer.css';

const Footer = () => {
    return (
    <footer className="layout-footer footer">
        <div className="container">
            <span className="">© {(new Date().getFullYear())}</span>
        </div>
    </footer>
    )
};

export default Footer;
