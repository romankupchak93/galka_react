import React from "react";
import './Footer.css';

export default () => (
    <footer className="footer py-3 mt-auto">
        <div className="container">
            <span className="">© {(new Date().getFullYear())}</span>
        </div>
    </footer>
);