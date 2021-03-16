import actionTypes from '../actions/types';

const initialState = {
    data: [],
    loading: false,
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_NEWS_START:
            return {
                loading: true,
                data: [],
                error: ''
            };
        case actionTypes.FETCH_NEWS_SUCCESS:
            return {
                loading: false,
                error: '',
                data: action.payload.data
            };
        case actionTypes.FETCH_NEWS_ERROR:
            return {
                loading: false,
                data: [],
                error: action.payload
            };
        case actionTypes.FETCH_NEWS_VIEW:
            return{
                // ...state,
                id: action.payload.id
            };
        default:
            return state;
    }
}
