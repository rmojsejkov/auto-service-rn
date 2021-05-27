import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { serviceActions } from '../../../store/actions/servicesActions';
import ServicesScreenView from "./ServicesScreenView";

const ServicesScreenContainer = ({navigation, ...props}) => {
    const {
        defaultServicesIce
    } = useSelector(state => state.service);

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

    const iceAddHandler = service => {
        navigation.navigate('IceAddScreen')
    }

    const iceSelectHandler = service => {
        navigation.navigate('ServicesDetails', {
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
        <ServicesScreenView
            defaultServicesIce={defaultServicesIce}
            loadServices={loadServices}
            error={error}
            isLoading={isLoading}
            navigation={navigation}
            iceAddHandler={iceAddHandler}
            iceSelectHandler={iceSelectHandler}
        />
    )
}

export default ServicesScreenContainer;