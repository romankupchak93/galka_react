import React from "react";
import imgLogo from '../../../_themes/assets/img/header/logo/logo.svg';
import styles from './Logo.module.css';
const Logo = () => (
        <div className={ styles.logo }>
            <img src={imgLogo} alt=""/>
            <div className={ styles.text }>
                <div className={ styles.title }>Галка</div>
                <div className={ styles.subtitle }>розумна картка</div>
            </div>
        </div>
)
export default Logo;
