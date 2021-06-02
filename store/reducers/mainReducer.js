import { combineReducers } from "redux";
import { serviceReducer } from './autoserviceReducers/serviceReducer';
import { employeeReducer } from "./autoserviceReducers/employeeReducer";
import { userReducer } from "./autoserviceReducers/userReducer";

const mainReducer = combineReducers({
    service: serviceReducer,
    employee: employeeReducer,
    user: userReducer
});

export default mainReducer;
