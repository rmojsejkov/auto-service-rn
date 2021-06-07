import { SERVICES } from "../../../constants/types";
import { URL } from "../../../constants";

/**
 * Функция, позволяющая очистить список услуг в состоянии
 * @returns {{payload: *[], type: string}}
 */
export const clearServices = () => {
    return {
        type: SERVICES.GET_DEFAULT_SERVICES_ELECTRICIAN,
        payload: []
    }
}
/**
 * Запрос в базу данных на получения всех услуг
 * @returns {(function(*): Promise<void>)|*}
 */
export const getDefaultServicesAutoElectrician = () => {
    return async dispatch => {
        const response = await fetch(`${URL}/services/electrician.json`);
        const fetchServices = await response.json();
        const electricianArr = Object.keys(fetchServices).map(key => ({
            ...fetchServices[key],
            id: key})
        )
        dispatch({
            type: SERVICES.GET_DEFAULT_SERVICES_ELECTRICIAN,
            payload: electricianArr
        });

    }
}
/**
 * Запрос в базу данных на удаление услуги
 * @param id
 * @returns {(function(*): Promise<void>)|*}
 * @constructor
 */
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
/**
 * Запрос в базу данных на создание услуги
 * @param serviceName
 * @param price
 * @returns {(function(*): Promise<void>)|*}
 */
export const setDefaultServiceElectrician = (serviceName, price) => {
    return async dispatch => {
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
        const {name} = await response.json();

        dispatch({
            type: SERVICES.SET_DEFAULT_SERVICE_ELECTRICIAN,
            payload: {
                serviceName, price, id: name
            }
        });
    }
}

