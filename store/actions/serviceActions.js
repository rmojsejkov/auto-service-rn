import { SERVICES } from "../../constants/types";
import { URL } from "../../constants";

export const clearServices = () => {
    return {
        type: SERVICES.GET_DEFAULT_SERVICES,
        payload: []
    }
}

export const getDefaultServices = () => {
    return async dispatch => {
        const response = await fetch(`${URL}/services.json`);
        const fetchServices = await response.json();
        const arr = Object.keys(fetchServices).map(key => ({
            ...fetchServices[key],
            id: key})
        )
        console.log(arr)
        dispatch({
            type: SERVICES.GET_DEFAULT_SERVICES,
            payload: arr
        });

    }
}