import { USERS } from "../../../constants/types";

const initialState = {
    defaultUsers: []
}

const handlers = {
    [USERS.GET_DEFAULT_USERS]: (state, {payload}) => ({
        ...state,
        defaultUsers: payload
    }),
    [USERS.DELETE_USER]: (state, {payload}) => ({
        ...state,
        defaultUsers: state.defaultUsers.filter(s => s.id !== payload)
    }),
    [USERS.EDIT_USER]: (state, {payload}) => ({
        ...state,
        defaultUsers: state.defaultUsers.filter(s => s.id !== payload.id).concat(payload)
    }),
    DEFAULT: state => state
}

export const userReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
}
