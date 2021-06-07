import { SERVICES } from "../../../constants/types";
import { URL } from "../../../constants";

/**
 * Функция, позволяющая очистить список услуг в состоянии
 * @returns {{payload: *[], type: string}}
 */
export const clearServices = () => {
    return {
        type: SERVICES.GET_DEFAULT_SERVICES_SUSPENSION,
        payload: []
    }
}
/**
 * Запрос в базу данных на получения всех услуг
 * @returns {(function(*): Promise<void>)|*}
 */
export const getDefaultServicesSuspension = () => {
    return async dispatch => {
        const response = await fetch(`${URL}/services/suspension.json`);
        const fetchServices = await response.json();
        const suspenseArr = Object.keys(fetchServices).map(key => ({
            ...fetchServices[key],
            id: key})
        )
        dispatch({
            type: SERVICES.GET_DEFAULT_SERVICES_SUSPENSION,
            payload: suspenseArr
        });
    }
}
/**
 * Запрос в базу данных на удаление услуги
 * @param id
 * @returns {(function(*): Promise<void>)|*}
 * @constructor
 */
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
/**
 * Запрос в базу данных на создание услуги
 * @param serviceName
 * @param price
 * @returns {(function(*): Promise<void>)|*}
 */
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
        const {name} = await response.json();

        dispatch({
            type: SERVICES.SET_DEFAULT_SERVICE_SUSPENSION,
            payload: {
                serviceName, price, id: name
            }
        });
    }
}

