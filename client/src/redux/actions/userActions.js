import actionTypes from './types';
import config from "../../config";
import { history } from '../../helpers';


// export const loginSuccess = payload => ({
//     type: actionTypes.LOGIN_SUCCESS,
//     payload
// });


export const userLogin = (username, password) => {
    return dispatch => {
        dispatch(loginStart());
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        };
        return fetch(`${config.baseUrl}/users/authenticate`, requestOptions)
            .then(res => res.json())
            .then(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                dispatch(loginSuccess(user));
                history.push('/profile');
            })
            .catch(error => {
                console.log(error);
                dispatch(loginError(error.message));
            });
    };
}

export const loginStart = () => ({ type: actionTypes.LOGIN_START });

export const loginSuccess = (user) => ({ type: actionTypes.LOGIN_SUCCESS, user });

export const loginError = (error) => ({ type: actionTypes.LOGIN_ERROR, error });

export const userLogout = () => {
    localStorage.removeItem('user');
    history.push('/');
    return { type: actionTypes.LOGOUT };
}