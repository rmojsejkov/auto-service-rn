import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import AuthScreenView from "./AuthScreenView";

const AuthScreenContainer = ({navigation, ...props}) => {

    const {
        defaultServicesIce,
    } = useSelector(state => state.service);

    console.log(defaultServicesIce)
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    const dispatch = useDispatch();
    /**
     * Функция, вызывающая функция запроса в базу данных для получения всех услуг по ДВС
     * @type {(function(): Promise<void>)|*}
     */
    // const loadServices = useCallback(async () => {
    //     setIsLoading(true);
    //     try {
    //         await dispatch(serviceActions.getDefaultServicesIce());
    //     } catch (err) {
    //         Alert.alert('Error', err.message, [{ message: 'Okay' }]);
    //         setError('Something went wrong during network call');
    //     }
    //     setIsLoading(false);
    // }, [dispatch, setIsLoading, setError]);
    /**
     * Обработчик события при нажатии на кнопку, перенаправляющий пользователя на экран добавления услуги
     * @param service
     */
    const iceAddHandler = service => {
        navigation.navigate('IceAddScreen')
    }
    /**
     * Обработчик события при нажатии на кнопку, перенаправляющий пользователя на экран доп. информации об услуге
     * @param service
     */
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
        <AuthScreenView
            // servicesList={servicesList}
            defaultServicesIce={defaultServicesIce}
            // loadServices={loadServices}
            error={error}
            isLoading={isLoading}
            navigation={navigation}
            iceAddHandler={iceAddHandler}
            iceSelectHandler={iceSelectHandler}
        />
    )
}

export default AuthScreenContainer;