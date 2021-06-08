import { REPAIRS } from "../../../constants/types";

const initialState = {
    defaultRepairs: []
}

const handlers = {
    [REPAIRS.GET_DEFAULT_REPAIRS]: (state, {payload}) => ({
        ...state,
        defaultRepairs: payload
    }),
    [REPAIRS.SET_DEFAULT_REPAIR]: (state, {payload}) => ({
        ...state,
        defaultRepairs: state.defaultRepairs.concat(payload)
    }),
    [REPAIRS.DELETE_REPAIR]: (state, {payload}) => ({
        ...state,
        defaultRepairs: state.defaultRepairs.filter(s => s.id !== payload)
    }),
    [REPAIRS.EDIT_REPAIR]: (state, {payload}) => ({
        ...state,
        defaultRepairs: state.defaultRepairs.filter(s => s.id !== payload.id).concat(payload)
    }),
    DEFAULT: state => state
}

export const repairReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
}
