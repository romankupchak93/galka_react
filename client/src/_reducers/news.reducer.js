import { newsConstants } from '../_constants';

const initialState = {
    data: [],
    loading: false,
    error: ''
};
export const news = ( state = initialState, action) => {
    switch (action.type) {
        case newsConstants.FETCH_NEWS_START:
            return {
                loading: true,
                data: [],
                error: ''
            };
        case newsConstants.FETCH_NEWS_SUCCESS:
            return {
                loading: false,
                error: '',
                data: action.payload.data
            };
        case newsConstants.FETCH_NEWS_ERROR:
            return {
                loading: false,
                data: [],
                error: action.payload
            };
        case newsConstants.FETCH_NEWS_VIEW:
            return{
                // ...state,
                post: action.payload.post
            };
        default:
            return state;
    }
}
