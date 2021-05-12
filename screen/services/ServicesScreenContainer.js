import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { serviceActions } from '../../store/actions';
import ServicesScreenView from "./ServicesScreenView";

const ServicesScreenContainer = ({navigation, ...props}) => {
    const {
        defaultServices
    } = useSelector(state => state.service);
    console.log(defaultServices)

    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    const dispatch = useDispatch();

    const loadServices = useCallback(async () => {
        setIsLoading(true);
        try {
            await dispatch(serviceActions.getDefaultServices());
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
        <ServicesScreenView
            defaultServices={defaultServices}
            loadServices={loadServices}
            error={error}
            isLoading={isLoading}
        />
    )
}

export default ServicesScreenContainer;