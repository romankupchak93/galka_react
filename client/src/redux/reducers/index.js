import { combineReducers } from 'redux';
import news from "./newsReducer";
import alert from "./alertReducer";
import auth from "./authReducer";

const rootReducer = combineReducers({
    news,
    alert,
    auth
});

export default rootReducer;
