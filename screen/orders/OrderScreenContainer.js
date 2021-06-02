import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {electricianActions, serviceActions, suspensionActions} from '../../store/actions/servicesActions';
import OrderScreenView from "./OrderScreenView";
import {employeeActions} from "../../store/actions/employeesActions";
import {userActions} from "../../store/actions/usersActions";

const OrderScreenContainer = ({navigation, ...props}) => {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    const dispatch = useDispatch();

    const loadAllDates = useCallback(async () => {
        setIsLoading(true);
        try {
            await dispatch(serviceActions.getDefaultServicesIce());
            await dispatch(suspensionActions.getDefaultServicesSuspension());
            await dispatch(electricianActions.getDefaultServicesAutoElectrician());
            await dispatch(employeeActions.getDefaultEmployees());
            await dispatch(userActions.getDefaultUsers());
        } catch (err) {
            Alert.alert('Error', err.message, [{ message: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsLoading(false);
    }, [dispatch]);

    useEffect(() => {
        loadAllDates();
    }, [loadAllDates]);


    const {
        defaultServicesIce,
        defaultServicesSuspension,
        defaultServicesAutoElectrician
    } = useSelector(state => state.service);

    const {
        defaultEmployees
    } = useSelector(state => state.employee);

    const {
        defaultUsers
    } = useSelector(state => state.user);

    return (
        <OrderScreenView
            error={error}
            isLoading={isLoading}
            defaultServicesIce={defaultServicesIce}
            defaultServicesSuspension={defaultServicesSuspension}
            defaultServicesAutoElectrician={defaultServicesAutoElectrician}
            defaultEmployees={defaultEmployees}
            defaultUsers={defaultUsers}
        />
    )
}

export default OrderScreenContainer;