import { REPAIRS } from "../../../constants/types";
import { URL } from "../../../constants";

/**
 * Функция, позволяющая очистить список сотрудников в состоянии
 * @returns {{payload: *[], type: string}}
 */
export const clearRepairs = () => {
    return {
        type: REPAIRS.GET_DEFAULT_REPAIRS,
        payload: []
    }
}
/**
 * Запрос в базу данных для получения всех сотрудников
 * @returns {(function(*): Promise<void>)|*}
 */
export const getDefaultRepairs = () => {
    return async dispatch => {
        const response = await fetch(`${URL}/minutiaes.json`);
        const fetchRepairs = await response.json();
        const repairsArr = Object.keys(fetchRepairs).map(key => ({
            ...fetchRepairs[key],
            id: key})
        )
        dispatch({
            type: REPAIRS.GET_DEFAULT_REPAIRS,
            payload: repairsArr
        });
    }
}
/**
 * Запрос в базу данных для удаления сотрудника
 * @param id
 * @returns {(function(*): Promise<void>)|*}
 */
export const deleteRepair = id => {
    return async dispatch => {
        const response = await fetch(`${URL}/minutiaes/${id}.json`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error("Can't delete repair");
        }

        dispatch({
            type: REPAIRS.DELETE_REPAIR,
            payload: id
        });
    }
}

export const setDefaultRepair = (detailName, price, counts, carType, warehouseId) => {
    return async dispatch => {
        const response = await fetch(`${URL}/minutiaes.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                detailName,
                price,
                counts,
                carType,
                warehouseId
            })
        });
        if (!response.ok) {
            throw new Error("Can't edit employee");
        }
        const {name} = await response.json();

        dispatch({
            type: REPAIRS.SET_DEFAULT_REPAIR,
            payload: {
                detailName,
                price,
                counts,
                carType,
                warehouseId,
                id: name
            }
        });
    }
}

export const editRepair = (id, detailName, price, counts, carType) => {
    return async dispatch => {
        const response = await fetch(`${URL}/minutiaes/${id}.json`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                detailName,
                price,
                counts,
                carType
            })
        });
        if (!response.ok) {
            throw new Error("Can't edit repair");
        }
        console.log(JSON.stringify({
            detailName,
            price,
            counts,
            carType
        }))
        dispatch({
            type: REPAIRS.EDIT_REPAIR,
            payload: {
                detailName,
                price,
                counts,
                carType,
                id
            }
        });
    }
}

