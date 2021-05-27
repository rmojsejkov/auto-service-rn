import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import EmployeeScreenView from "./EmployeeScreenView";
import { employeeActions } from "../../store/actions/employeesActions";
import Colors from "../../constants/colors";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {MaterialHeaderButton} from "../../components";

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

    const employeeAddHandler = employee => {
        navigation.navigate('EmployeeAddScreen')
    }

    useEffect(() => {
        loadEmployees();
    }, [loadEmployees]);

    useEffect(() => {
        return navigation.dangerouslyGetParent()
            .addListener('focus', () => {
                loadEmployees();
            });
    }, [navigation]);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Сотрудники',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: Colors.white,
                fontSize: 24
            },
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
                    <Item
                        title="Delete"
                        iconName="person-add-alt-1"
                        onPress={employeeAddHandler}
                    />
                </HeaderButtons>
            )
        })
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