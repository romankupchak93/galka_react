import actionTypes from './types';

export const alertSuccess = (message) => {
    return { type: actionTypes.ALERT_SUCCESS, message };
}

export const alertError = (message) => {
    return { type: actionTypes.ALERT_ERROR, message };
}

export const alertClear = () =>  {
    return { type: actionTypes.ALERT_CLEAR };
}
