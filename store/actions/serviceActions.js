import { SERVICES } from "../../constants/types";
import { URL } from "../../constants";
import AutoElectricianScreenView from "../../screen/services/autoElectrician/AutoElectricianScreenView";

export const clearServices = () => {
    return {
        type: SERVICES.GET_DEFAULT_SERVICES_ICE,
        payload: []
    }
}

export const getDefaultServicesSuspension = () => {
    return async dispatch => {
        const response = await fetch(`${URL}/services/suspense.json`);
        const fetchServices = await response.json();
        const suspenseArr = Object.keys(fetchServices).map(key => ({
            ...fetchServices[key],
            id: key})
        )
        console.log(suspenseArr)
        dispatch({
            type: SERVICES.GET_DEFAULT_SERVICES_SUSPENSION,
            payload: suspenseArr
        });

    }
}

export const getDefaultServicesAutoElectrician = () => {
    return async dispatch => {
        const response = await fetch(`${URL}/services/electrician.json`);
        const fetchServices = await response.json();
        const electricianArr = Object.keys(fetchServices).map(key => ({
            ...fetchServices[key],
            id: key})
        )
        console.log(electricianArr)
        dispatch({
            type: SERVICES.GET_DEFAULT_SERVICES_ELECTRICIAN,
            payload: electricianArr
        });

    }
}

export const getDefaultServicesIce = () => {
    return async dispatch => {
        const response = await fetch(`${URL}/services/ice.json`);
        const fetchServices = await response.json();
        const iceArr = Object.keys(fetchServices).map(key => ({
            ...fetchServices[key],
            id: key})
        )
        console.log(iceArr)
        dispatch({
            type: SERVICES.GET_DEFAULT_SERVICES_ICE,
            payload: iceArr
        });

    }
}