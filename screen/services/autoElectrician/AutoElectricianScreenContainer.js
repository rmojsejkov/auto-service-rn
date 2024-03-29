import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { electricianActions } from '../../../store/actions/servicesActions';
import AutoElectricianScreenView from "./AutoElectricianScreenView";

const AutoElectricianScreenContainer = ({navigation, ...props}) => {
    const {
        defaultServicesAutoElectrician
    } = useSelector(state => state.service);

    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    const dispatch = useDispatch();

    const loadServices = useCallback(async () => {
        setIsLoading(true);
        try {
            await dispatch(electricianActions.getDefaultServicesAutoElectrician());
        } catch (err) {
            Alert.alert('Error', err.message, [{ message: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsLoading(false);

    }, [dispatch, setIsLoading, setError]);

    const electricianAddHandler = service => {
        navigation.navigate('ElectricianAddScreen')
    }

    const electricianSelectHandler = service => {
        navigation.navigate('ElectricianDetails', {
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
        <AutoElectricianScreenView
            defaultServicesAutoElectrician={defaultServicesAutoElectrician}
            loadServices={loadServices}
            error={error}
            isLoading={isLoading}
            navigation={navigation}
            electricianAddHandler={electricianAddHandler}
            electricianSelectHandler={electricianSelectHandler}
        />
    )
}

export default AutoElectricianScreenContainer;