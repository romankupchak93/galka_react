import actionTypes from '../actions/types';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            return {
                loggedIn: false
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case actionTypes.LOGIN_ERROR:
            return {};
        case actionTypes.LOGOUT:
            return {
                loggedIn: false
            };
        default:
            return state
    }
}
