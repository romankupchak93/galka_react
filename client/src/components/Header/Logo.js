import imgLogo from '../../assets/img/logo.png';
import {Navbar} from "react-bootstrap";
import React from "react";

const Logo = () => (
    <Navbar.Brand href="/">
        <div className="site-logo">
            <img src={imgLogo} alt=""/>
            <div className="logo-text">
                <div className="logo-title">Галка</div>
                <div className="logo-sub-title">розумна картка</div>
            </div>
        </div>
    </Navbar.Brand>
)
export default Logo;