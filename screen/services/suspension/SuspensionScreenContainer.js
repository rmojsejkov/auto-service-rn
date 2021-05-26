import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {suspensionActions} from '../../../store/actions/servicesActions';
import SuspensionScreenView from "./SuspensionScreenView";

const SuspensionScreenContainer = ({navigation, ...props}) => {
    const {
        defaultServicesSuspension
    } = useSelector(state => state.service);

    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    const dispatch = useDispatch();

    const loadServices = useCallback(async () => {
        setIsLoading(true);
        try {
            await dispatch(suspensionActions.getDefaultServicesSuspension());
        } catch (err) {
            Alert.alert('Error', err.message, [{ message: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsLoading(false);

    }, [dispatch, setIsLoading, setError]);

    const suspensionAddHandler = service => {
        navigation.navigate('SuspensionAddScreen', {
            serviceName: service.serviceName,
            price: service.price
        })
    }

    const suspensionSelectHandler = service => {
        navigation.navigate('SuspensionDetails', {
            serviceName: service.serviceName,
            price: service.price,
            id: service.id
        })
    }

    useEffect(() => {
        loadServices();
    }, [loadServices]);

    useEffect(() => {
        return navigation.dangerouslyGetParent()
            .addListener('focus', () => {
                loadServices();
            });
    }, [navigation]);

    return (
        <SuspensionScreenView
            defaultServicesSuspension={defaultServicesSuspension}
            loadServices={loadServices}
            error={error}
            isLoading={isLoading}
            suspensionAddHandler={suspensionAddHandler}
            suspensionSelectHandler={suspensionSelectHandler}
        />
    )
}

export default SuspensionScreenContainer;