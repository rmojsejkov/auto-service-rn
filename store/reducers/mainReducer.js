import { combineReducers } from "redux";
import { serviceReducer } from './autoserviceReducers/serviceReducer';
import { employeeReducer } from "./autoserviceReducers/employeeReducer";
import { userReducer } from "./autoserviceReducers/userReducer";
import { orderReducer } from './autoserviceReducers/orderReducer';

/**
 * Компонент, комбинирующий разные редюсеры
 * @type {Reducer<CombinedState<unknown>>}
 */
const mainReducer = combineReducers({
    service: serviceReducer,
    employee: employeeReducer,
    user: userReducer,
    order: orderReducer
});

export default mainReducer;
