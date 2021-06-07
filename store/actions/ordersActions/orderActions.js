import { ORDERS } from "../../../constants/types";
import { URL } from "../../../constants";

/**
 * Функция, позволяющая очистить список заказов в состоянии
 * @returns {{payload: *[], type: string}}
 */
export const clearOrders = () => {
    return {
        type: ORDERS.GET_DEFAULT_ORDERS,
        payload: []
    }
}
/**
 * Запрос в базу данных для получения всех заказов
 * @returns {(function(*): Promise<void>)|*}
 */
export const getDefaultOrders = () => {
    return async dispatch => {
        const response = await fetch(`${URL}/orders.json`);
        const fetchOrders = await response.json();
        const ordersArr = Object.keys(fetchOrders).map(key => ({
            ...fetchOrders[key],
            id: key})
        )
        dispatch({
            type: ORDERS.GET_DEFAULT_ORDERS,
            payload: ordersArr
        });
    }
}
/**
 * Запрос в базу данных для удаления заказа
 * @param id
 * @returns {(function(*): Promise<void>)|*}
 */
export const deleteOrder = id => {
    return async dispatch => {
        const response = await fetch(`${URL}/orders/${id}.json`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error("Can't delete order");
        }

        dispatch({
            type: ORDERS.DELETE_ORDER,
            payload: id
        });
    }
}
/**
 * Запрос в базу данных для добавления нового заказа
 * @param orderDate
 * @param duration
 * @param detail
 * @param service
 * @param employee
 * @param user
 * @returns {(function(*): Promise<void>)|*}
 */
export const setDefaultOrder = (orderDate, duration, detail, service, employee, user) => {
    return async dispatch => {
        const response = await fetch(`${URL}/employees.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                orderDate,
                duration,
                detail,
                service,
                employee,
                user
            })
        });
        if (!response.ok) {
            throw new Error("Can't edit order");
        }
        const {name} = await response.json();

        dispatch({
            type: ORDERS.SET_DEFAULT_ORDER,
            payload: {
                orderDate,
                duration,
                detail,
                service,
                employee,
                user,
                id: name
            }
        });
    }
}
/**
 * Запрос в базу данных для изменения данных о заказе
 * @param id
 * @param orderDate
 * @param duration
 * @param detail
 * @param service
 * @param employee
 * @param user
 * @returns {(function(*): Promise<void>)|*}
 */
export const editOrder = (id, orderDate, duration, detail, service, employee, user) => {
    return async dispatch => {
        const response = await fetch(`${URL}/orders/${id}.json`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                orderDate,
                duration,
                detail,
                service,
                employee,
                user
            })
        });
        if (!response.ok) {
            throw new Error("Can't edit order");
        }
        console.log(JSON.stringify({
            orderDate,
            duration,
            detail,
            service,
            employee,
            user
        }))
        dispatch({
            type: ORDERS.EDIT_ORDER,
            payload: {
                orderDate,
                duration,
                detail,
                service,
                employee,
                user,
                id
            }
        });
    }
}

