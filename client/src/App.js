import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Routes} from "./_components/Routes"
import Header from './_components/Header/';
import Footer from './_components/Footer/';
import './_themes/assets/css/main.css';
import './_themes/assets/css/animate.css';
import './_themes/assets/css/button.css';

class App extends Component {
    render() {
        let pathName=window.location.pathname;
        let LoginPath = pathName==="/login";
        let ErrorPath = pathName==="/404";
        return (
            <>
                    {
                        ( LoginPath ) || ( ErrorPath )  ? null : <Header />
                    }
                        <Routes/>
                    {
                        ( LoginPath ) || ( ErrorPath )  ? null : <Footer />
                    }
            </>
        )
    }
}
export default withRouter(App)
