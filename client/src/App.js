import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { history } from './helpers';
import { alertClear } from './redux/actions/alertActions';
import PrivateRoute from './components/PrivateRoute/';
import NotFound from './pages/NotFound/';
import Header from './components/Header/';
import DefaultHeader from './components/Header/defaultHeader';
import Footer from './components/Footer/';
import Login from './pages/Login/';
import Home from './pages/Home/';
import Profile from './pages/Profile/';
import Faq from './pages/Faq/';
import News from './pages/News/';
import Post from './pages/News/Post';
import './assets/main.css';

class App extends Component {
    constructor(props) {
        super(props);

        const {dispatch} = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertClear());
        });
    }


        render() {
            let pathName=window.location.pathname;
            console.log('pathName==>',pathName);
            let HomePath = pathName==="/" || pathName==="/home";
            let LoginPath = pathName==="/login";
            let NewsPath = pathName==='/news';
            let FaqPath = pathName==='/faq'


        return (
            <>
                { HomePath ? <DefaultHeader  /> : ( LoginPath) ? null :(NewsPath) ? <Header /> :(FaqPath) ? <Header /> : <Header />   }
                <main className="flex-shrink-0">
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Switch>
                        <Redirect exact from='/' to='/home'/>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/news" component={News} />
                        <Route exact path="/news/:id" component={Post} />
                        <Route exact path="/faq" component={Faq} />
                        <PrivateRoute path='/profile' component={Profile}/>
                        <Route path="/404" component={NotFound} />
                        <Redirect to="/404" />
                    </Switch>
                </main>
                {window.location.pathname === "/home" && <Footer/>}
                {window.location.pathname === "/news" && <Footer/>}
                {window.location.pathname === "/faq" && <Footer/>}
            </>
        )
    }
}
const mapStateToProps = state => ({
    alert: state.alert
});
export default connect(mapStateToProps)(withRouter(App));