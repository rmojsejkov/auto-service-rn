import { combineReducers } from "redux";
import { serviceReducer } from './serviceReducers/serviceReducer';

const mainReducer = combineReducers({
    service: serviceReducer,
});

export default mainReducer;
