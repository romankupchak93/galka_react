import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import HomePage from "../../_pages/HomePage";
import LoginPage from "../../_pages/LoginPage";
import FaqPage from "../../_pages/FaqPage";
import {PrivateRoute} from "../PrivateRoute";
import {ProfilePage} from "../../_pages/ProfilePage";
import NewsPage from "../../_pages/NewsPage";
import Post from "../../_components/Post/";
import {CardInfo} from "../../_components/CardInfo";
import {NotFound} from "../../_pages/NotFound";

export const Routes = () => {
    return (
        <Switch>
            <Redirect exact from='/' to='/home'/>
            <Route exact path="/home" component={HomePage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/faq" component={FaqPage}/>
            <Route exact path="/news" component={NewsPage}/>
            <Route exact path="/news/:id" component={Post}/>
            <PrivateRoute path='/profile' component={ProfilePage}/>
            <PrivateRoute path='/card/:id' component={CardInfo}/>
            <Route path="/404" component={NotFound}/>
            <Redirect to="/404"/>
        </Switch>

    )
}
