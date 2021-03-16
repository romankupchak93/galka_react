import actionTypes from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ALERT_SUCCESS:
            return {
                type: 'alert-success',
                message: action.message
            };
        case actionTypes.ALERT_ERROR:
            return {
                type: 'alert-danger',
                message: action.message
            };
        case actionTypes.ALERT_CLEAR:
            return {};
        default:
            return state;
    }
}
