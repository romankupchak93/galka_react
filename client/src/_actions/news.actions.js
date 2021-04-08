import {newsConstants} from '../_constants';
import {config} from "../config";

export const getNewsSuccess = payload => ({
    type: newsConstants.FETCH_NEWS_SUCCESS,
    payload
});

export const getNewsStart = () => ({
    type: newsConstants.FETCH_NEWS_START
});

export const getNewsError = payload => ({
    type: newsConstants.FETCH_NEWS_ERROR,
    payload
});

export const getNews = () => {
    return dispatch => {
        dispatch(getNewsStart());
        fetch(`${config.apiUrl}/news`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                dispatch(getNewsSuccess({data: res}));
            })
            .catch(error => {
                console.log(error);
                dispatch(getNewsError(error.message));
            });
    };
};

export const getByIdNews = (id) => {
    return dispatch => {
        dispatch(getNewsStart(id));
        fetch(`${config.apiUrl}/news/${id}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                dispatch(getNewsSuccess({post: res}));
            })
            .catch(error => {
                console.log(error);
                dispatch(getNewsError(error.message));
            });
    };
};
