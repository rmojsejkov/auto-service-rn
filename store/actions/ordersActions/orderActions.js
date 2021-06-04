import { ORDERS } from "../../../constants/types";
import { URL } from "../../../constants";

export const clearOrders = () => {
    return {
        type: ORDERS.GET_DEFAULT_ORDERS,
        payload: []
    }
}

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

