import { SERVICES } from "../../constants/types";

const initialState = {
    defaultServicesIce: [],
    defaultServicesSuspension: [],
    defaultServicesAutoElectrician: [],
    setServiceIce: [],


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
    [SERVICES.SET_DEFAULT_SERVICE]: (state, {payload}) => ({
        ...state,
        defaultServicesIce: state.defaultServicesIce.concat(payload)
    }),
    [SERVICES.DELETE_SERVICE]: (state, {payload}) => ({
        ...state,
        defaultServicesIce: state.defaultServicesIce.filter(s => s.id !== payload)
    }),
    DEFAULT: state => state
}

export const serviceReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
}
