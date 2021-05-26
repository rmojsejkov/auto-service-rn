import { SERVICES } from "../../../constants/types";
import { URL } from "../../../constants";

export const clearServices = () => {
    return {
        type: SERVICES.GET_DEFAULT_SERVICES_ICE,
        payload: []
    }
}

export const DeleteService = id => {
    return async dispatch => {
        const response = await fetch(`${URL}/services/ice/${id}.json`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error("Can't delete service");
        }

        dispatch({
            type: SERVICES.DELETE_SERVICE,
            payload: id
        });
    }
}

export const setDefaultService = (serviceName, price) => {
    return async dispatch => {
        console.log('by name ' + serviceName + price)
        const response = await fetch(`${URL}/services/ice.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                serviceName,
                price
            })
        });
        if (!response.ok) {
            throw new Error("Can't post service");
        }
        const newId = await response.json();

        dispatch({
            type: SERVICES.SET_DEFAULT_SERVICE,
            payload: {
                serviceName, price, id: newId
            }
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
