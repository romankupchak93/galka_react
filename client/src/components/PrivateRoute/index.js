import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isUserLogged } from "../../helpers/auth";

export default ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isUserLogged()
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)