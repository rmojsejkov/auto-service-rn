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
    DEFAULT: state => state
}

export const employeeReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
}
