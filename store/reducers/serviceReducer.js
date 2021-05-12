import { SERVICES } from "../../constants/types";

const initialState = {
    defaultServices: [],
}

const handlers = {
    [SERVICES.GET_DEFAULT_SERVICES]: (state, {payload}) => ({
        ...state,
        defaultServices: payload
    }),
    DEFAULT: state => state
}

export const serviceReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
}
