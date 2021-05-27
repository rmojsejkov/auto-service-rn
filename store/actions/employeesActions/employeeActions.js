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

// export const DeleteServiceElectrician = id => {
//     return async dispatch => {
//         const response = await fetch(`${URL}/services/electrician/${id}.json`, {
//             method: 'DELETE',
//         });
//         if (!response.ok) {
//             throw new Error("Can't delete service");
//         }
//
//         dispatch({
//             type: SERVICES.DELETE_SERVICE_ELECTRICIAN,
//             payload: id
//         });
//     }
// }

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
                roleId,
                pass
            })
        });
        if (!response.ok) {
            throw new Error("Can't post employee");
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
                roleId,
                pass,
                id: name
            }
        });
    }
}

