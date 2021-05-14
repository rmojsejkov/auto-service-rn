import { SERVICES } from "../../constants/types";

const initialState = {
    defaultServicesIce: [],
    defaultServicesSuspension: [],
    defaultServicesAutoElectrician: []

}

const handlers = {
    [SERVICES.GET_DEFAULT_SERVICES_ICE]: (state, {payload}) => ({
        ...state,
        defaultServicesIce: payload
    }),
    [SERVICES.GET_DEFAULT_SERVICES_SUSPENSION]: (state, {payload}) => ({
        ...state,
        defaultServicesSuspension: payload
    }),
    [SERVICES.GET_DEFAULT_SERVICES_ELECTRICIAN]: (state, {payload}) => ({
        ...state,
        defaultServicesAutoElectrician: payload
    }),
    DEFAULT: state => state
}

export const serviceReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
}
