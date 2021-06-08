import { combineReducers } from "redux";
import { serviceReducer } from './autoserviceReducers/serviceReducer';
import { employeeReducer } from "./autoserviceReducers/employeeReducer";
import { userReducer } from "./autoserviceReducers/userReducer";
import { orderReducer } from './autoserviceReducers/orderReducer';
import { repairReducer } from './autoserviceReducers/repairReducer';

/**
 * Компонент, комбинирующий разные редюсеры
 * @type {Reducer<CombinedState<unknown>>}
 */
const mainReducer = combineReducers({
    service: serviceReducer,
    employee: employeeReducer,
    user: userReducer,
    order: orderReducer,
    repair: repairReducer
});

export default mainReducer;
