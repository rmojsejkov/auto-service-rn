import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import EmployeeScreenView from "./EmployeeScreenView";
import { employeeActions } from "../../store/actions/employeesActions";

const EmployeeScreenContainer = ({navigation, ...props}) => {
    const {
        defaultEmployees
    } = useSelector(state => state.employee);

    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    const dispatch = useDispatch();

    const loadEmployees = useCallback(async () => {
        setIsLoading(true);
        try {
            await dispatch(employeeActions.getDefaultEmployees());
        } catch (err) {
            Alert.alert('Error', err.message, [{ message: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsLoading(false);

    }, [dispatch, setIsLoading, setError]);

    useEffect(() => {
        loadEmployees();
    }, [loadEmployees]);

    useEffect(() => {
        return navigation.dangerouslyGetParent()
            .addListener('focus', () => {
                loadEmployees();
            });
    }, [navigation]);

    return (
        <EmployeeScreenView
            defaultEmployees={defaultEmployees}
            loadEmployees={loadEmployees}
            error={error}
            isLoading={isLoading}
            navigation={navigation}
        />
    )
}

export default EmployeeScreenContainer;