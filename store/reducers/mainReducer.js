import { combineReducers } from "redux";
import { serviceReducer } from './serviceReducer';

const mainReducer = combineReducers({
    service: serviceReducer,
});

export default mainReducer;
