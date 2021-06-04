import { ORDERS } from "../../../constants/types";

const initialState = {
    defaultOrders: []
}

const handlers = {
    [ORDERS.GET_DEFAULT_ORDERS]: (state, {payload}) => ({
        ...state,
        defaultOrders: payload
    }),
    [ORDERS.SET_DEFAULT_ORDER]: (state, {payload}) => ({
        ...state,
        defaultOrders: state.defaultOrders.concat(payload)
    }),
    [ORDERS.DELETE_ORDER]: (state, {payload}) => ({
        ...state,
        defaultOrders: state.defaultOrders.filter(s => s.id !== payload)
    }),
    [ORDERS.EDIT_ORDER]: (state, {payload}) => ({
        ...state,
        defaultOrders: state.defaultOrders.filter(s => s.id !== payload.id).concat(payload)
    }),
    DEFAULT: state => state
}

export const orderReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
}
