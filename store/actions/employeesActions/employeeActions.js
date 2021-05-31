import { EMPLOYEES } from "../../../constants/types";
import { URL } from "../../../constants";

export const clearEmployees = () => {
    return {
        type: EMPLOYEES.GET_DEFAULT_EMPLOYEES,
        payload: []
    }
}

export const getDefaultEmployees = () => {
    return async dispatch => {
        const response = await fetch(`${URL}/employees.json`);
        const fetchEmployees = await response.json();
        const employeesArr = Object.keys(fetchEmployees).map(key => ({
            ...fetchEmployees[key],
            id: key})
        )
        dispatch({
            type: EMPLOYEES.GET_DEFAULT_EMPLOYEES,
            payload: employeesArr
        });
    }
}

export const deleteEmployee = id => {
    return async dispatch => {
        const response = await fetch(`${URL}/employees/${id}.json`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error("Can't delete employee");
        }

        dispatch({
            type: EMPLOYEES.DELETE_EMPLOYEE,
            payload: id
        });
    }
}

export const setDefaultEmployee = (lastName, firstName, surName, email, phone, pass, roleId) => {
    return async dispatch => {
        const response = await fetch(`${URL}/employees.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                lastName,
                firstName,
                surName,
                phone,
                email,
                pass,
                roleId
            })
        });
        if (!response.ok) {
            throw new Error("Can't edit employee");
        }
        const {name} = await response.json();

        dispatch({
            type: EMPLOYEES.SET_DEFAULT_EMPLOYEE,
            payload: {
                lastName,
                firstName,
                surName,
                phone,
                email,
                pass,
                roleId,
                id: name
            }
        });
    }
}

export const editEmployee = (id, lastName, firstName, surName, email, phone, pass) => {
    return async dispatch => {
        const response = await fetch(`${URL}/employees/${id}.json`, {
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
            throw new Error("Can't edit employee");
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
            type: EMPLOYEES.EDIT_EMPLOYEE,
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

