import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { serviceActions } from '../../../store/actions';
import ServicesScreenView from "./ServicesScreenView";

const ServicesScreenContainer = ({navigation, ...props}) => {
    const {
        buttonSheet,
        defaultServicesIce
    } = useSelector(state => state.service);
    console.log(defaultServicesIce)

    const [isSearchTap, setIsSearchTap] = useState(true);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    const dispatch = useDispatch();

    const loadServices = useCallback(async () => {
        setIsLoading(true);
        try {
            await dispatch(serviceActions.getDefaultServicesIce());
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
            defaultServicesIce={defaultServicesIce}
            loadServices={loadServices}
            error={error}
            isLoading={isLoading}
            navigation={navigation}
        />
    )
}

export default ServicesScreenContainer;