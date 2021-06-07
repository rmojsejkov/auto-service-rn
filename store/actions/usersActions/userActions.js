import { USERS } from "../../../constants/types";
import { URL } from "../../../constants";

/**
 * Функция, позволяющая очистить список пользователей в состоянии
 * @returns {{payload: *[], type: string}}
 */
export const clearUsers = () => {
    return {
        type: USERS.GET_DEFAULT_USERS,
        payload: []
    }
}
/**
 * Запрос в базу данных для получения всех пользователей
 * @returns {(function(*): Promise<void>)|*}
 */
export const getDefaultUsers = () => {
    return async dispatch => {
        const response = await fetch(`${URL}/users.json`);
        const fetchUsers = await response.json();
        const usersArr = Object.keys(fetchUsers).map(key => ({
            ...fetchUsers[key],
            id: key})
        )
        dispatch({
            type: USERS.GET_DEFAULT_USERS,
            payload: usersArr
        });
    }
}
/**
 *Запрос в базу данных на удаление пользователя
 * @param id
 * @returns {(function(*): Promise<void>)|*}
 */
export const deleteUser = id => {
    return async dispatch => {
        const response = await fetch(`${URL}/users/${id}.json`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error("Can't delete user");
        }

        dispatch({
            type: USERS.DELETE_USER,
            payload: id
        });
    }
}
/**
 * Запрос в базу данных на изменение данных пользователя
 * @param id
 * @param lastName
 * @param firstName
 * @param surName
 * @param email
 * @param phone
 * @param pass
 * @returns {(function(*): Promise<void>)|*}
 */
export const editUser = (id, lastName, firstName, surName, email, phone, pass) => {
    return async dispatch => {
        const response = await fetch(`${URL}/users/${id}.json`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                lastName,
                firstName,
                surName,
                phone,
                email,
                pass
            })
        });
        if (!response.ok) {
            throw new Error("Can't edit user");
        }
        console.log(JSON.stringify({
            lastName,
            firstName,
            surName,
            phone,
            email,
            pass
        }))
        dispatch({
            type: USERS.EDIT_USER,
            payload: {
                lastName,
                firstName,
                surName,
                phone,
                email,
                pass,
                id
            }
        });
    }
}

