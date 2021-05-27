import { combineReducers } from "redux";
import { serviceReducer } from './autoserviceReducers/serviceReducer';
import { employeeReducer } from "./autoserviceReducers/employeeReducer";

const mainReducer = combineReducers({
    service: serviceReducer,
    employee: employeeReducer
});

export default mainReducer;
