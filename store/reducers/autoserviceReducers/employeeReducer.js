import { EMPLOYEES } from "../../../constants/types";

const initialState = {
    defaultEmployees: []
}

const handlers = {
    [EMPLOYEES.GET_DEFAULT_EMPLOYEES]: (state, {payload}) => ({
        ...state,
        defaultEmployees: payload
    }),
    [EMPLOYEES.SET_DEFAULT_EMPLOYEE]: (state, {payload}) => ({
        ...state,
        defaultEmployees: state.defaultEmployees.concat(payload)
    }),
    [EMPLOYEES.DELETE_EMPLOYEE]: (state, {payload}) => ({
        ...state,
        defaultEmployees: state.defaultEmployees.filter(s => s.id !== payload)
    }),
    [EMPLOYEES.EDIT_EMPLOYEE]: (state, {payload}) => ({
        ...state,
        defaultEmployees: state.defaultEmployees.filter(s => s.id !== payload.id).concat(payload)
    }),
    //
    // [SERVICES.GET_DEFAULT_SERVICES_ELECTRICIAN]: (state, {payload}) => ({
    //     ...state,
    //     defaultServicesAutoElectrician: payload
    // }),
    // [SERVICES.SET_DEFAULT_SERVICE_ELECTRICIAN]: (state, {payload}) => ({
    //     ...state,
    //     defaultServicesAutoElectrician: state.defaultServicesAutoElectrician.concat(payload)
    // }),
    // [SERVICES.DELETE_SERVICE_ELECTRICIAN]: (state, {payload}) => ({
    //     ...state,
    //     defaultServicesAutoElectrician: state.defaultServicesAutoElectrician.filter(s => s.id !== payload)
    // }),
    //
    // [SERVICES.GET_DEFAULT_SERVICES_SUSPENSION]: (state, {payload}) => ({
    //     ...state,
    //     defaultServicesSuspension: payload
    // }),
    // [SERVICES.SET_DEFAULT_SERVICE_SUSPENSION]: (state, {payload}) => ({
    //     ...state,
    //     defaultServicesSuspension: state.defaultServicesSuspension.concat(payload)
    // }),
    // [SERVICES.DELETE_SERVICE_SUSPENSION]: (state, {payload}) => ({
    //     ...state,
    //     defaultServicesSuspension: state.defaultServicesSuspension.filter(s => s.id !== payload)
    // }),
    DEFAULT: state => state
}

export const employeeReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
}
