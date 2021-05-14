import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { serviceActions } from '../../../store/actions';
import AutoElectricianScreenView from "./AutoElectricianScreenView";

const AutoElectricianScreenContainer = ({navigation, ...props}) => {
    const {
        defaultServicesAutoElectrician
    } = useSelector(state => state.service);
    console.log(defaultServicesAutoElectrician)

    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    const dispatch = useDispatch();

    const loadServices = useCallback(async () => {
        setIsLoading(true);
        try {
            await dispatch(serviceActions.getDefaultServicesAutoElectrician());
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
        <AutoElectricianScreenView
            defaultServicesAutoElectrician={defaultServicesAutoElectrician}
            loadServices={loadServices}
            error={error}
            isLoading={isLoading}
        />
    )
}

export default AutoElectricianScreenContainer;