import { SERVICES } from "../../../constants/types";
import { URL } from "../../../constants";

export const clearServices = () => {
    return {
        type: SERVICES.GET_DEFAULT_SERVICES_SUSPENSION,
        payload: []
    }
}

export const getDefaultServicesSuspension = () => {
    return async dispatch => {
        const response = await fetch(`${URL}/services/suspension.json`);
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

export const DeleteServiceSuspension = id => {
    return async dispatch => {
        const response = await fetch(`${URL}/services/suspension/${id}.json`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error("Can't delete service");
        }

        dispatch({
            type: SERVICES.DELETE_SERVICE_SUSPENSION,
            payload: id
        });
    }
}

export const setDefaultServiceSuspension = (serviceName, price) => {
    return async dispatch => {
        const response = await fetch(`${URL}/services/suspension.json`, {
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
            type: SERVICES.SET_DEFAULT_SERVICE_SUSPENSION,
            payload: {
                serviceName, price, id: newId
            }
        });
    }
}

