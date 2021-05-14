import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { serviceActions } from '../../../store/actions';
import SuspensionScreenView from "./SuspensionScreenView";

const SuspensionScreenContainer = ({navigation, ...props}) => {
    const {
        defaultServicesSuspension
    } = useSelector(state => state.service);
    console.log(defaultServicesSuspension)

    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    const dispatch = useDispatch();

    const loadServices = useCallback(async () => {
        setIsLoading(true);
        try {
            await dispatch(serviceActions.getDefaultServicesSuspension());
        } catch (err) {
            Alert.alert('Error', err.message, [{ message: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsLoading(false);

    }, [dispatch, setIsLoading, setError]);

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
        />
    )
}

export default SuspensionScreenContainer;