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
        const response = await fetch(`https://autoservice-db-default-rtdb.firebaseio.com/services/service1.json`);
        const fetchServices = await response.json();
        console.log('khgkg:', fetchServices)
        dispatch({
            type: SERVICES.GET_DEFAULT_SERVICES,
            payload: fetchServices
        });
    }
}