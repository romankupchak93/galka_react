import actionTypes from './types';
import config from "../../config";

export const getNewsSuccess = payload => ({
    type: actionTypes.FETCH_NEWS_SUCCESS,
    payload
});

export const getNewsStart = () => ({
    type: actionTypes.FETCH_NEWS_START
});

export const getNewsError = payload => ({
    type: actionTypes.FETCH_NEWS_ERROR,
    payload
});

export const getNews = () => {
    return dispatch => {
        dispatch(getNewsStart());
        fetch(`${config.baseUrl}/news`)
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

export const getNewsById = id => dispatch => {
    dispatch({type: actionTypes.FETCH_NEWS_VIEW, payload: id})
}

// export const getNewsSingle=()=>{
//     let champData = [];
//     let id = this.state.id
//     console.log(id)
//     fetch('/api/news?id='+id)
//         .then(data=> { return data.json() })
//         .then(json=> {
//             console.log(json.data);
//             champData.push(json.data);
//             this.setState({
//                 champData:json.data,
//                 match:true
//             })
//             this.props.match(true)
//             // this.props.history.push('/champions/'+id)
//         })
//         .catch(err=>{
//             console.log(err)
//         })
// }
// export const getNewsSingle = () => {
//     return dispatch => {
//         dispatch(getNewsStart());
//         fetch(`${config.baseUrl}/news/id`)
//             .then(res => res.json())
//             .then(res => {
//                 console.log(res);
//                 dispatch(getNewsSuccess({data: res}));
//             })
//             .catch(error => {
//                 console.log(error);
//                 dispatch(getNewsError(error.message));
//             });
//     };
// };