import { SERVICES } from "../../../constants/types";
import { URL } from "../../../constants";

export const clearServices = () => {
    return {
        type: SERVICES.GET_DEFAULT_SERVICES_ELECTRICIAN,
        payload: []
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

export const DeleteServiceElectrician = id => {
    return async dispatch => {
        const response = await fetch(`${URL}/services/electrician/${id}.json`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error("Can't delete service");
        }

        dispatch({
            type: SERVICES.DELETE_SERVICE_ELECTRICIAN,
            payload: id
        });
    }
}

export const setDefaultServiceElectrician = (serviceName, price) => {
    return async dispatch => {
        console.log('by name ' + serviceName + price)
        const response = await fetch(`${URL}/services/electrician.json`, {
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
            type: SERVICES.SET_DEFAULT_SERVICE_ELECTRICIAN,
            payload: {
                serviceName, price, id: newId
            }
        });
    }
}

