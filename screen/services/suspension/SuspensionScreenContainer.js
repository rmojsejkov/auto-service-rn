import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {suspensionActions} from '../../../store/actions/servicesActions';
import SuspensionScreenView from "./SuspensionScreenView";

/**
 * Функция, содержащая все функции экрана услуг по электрике
 * @param navigation
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const SuspensionScreenContainer = ({navigation, ...props}) => {
    const {
        defaultServicesSuspension
    } = useSelector(state => state.service);

    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    const dispatch = useDispatch();
    /**
     * Функция, вызывающая функция запроса в базу данных для получения всех услуг
     * @type {(function(): Promise<void>)|*}
     */
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
    /**
     * Обработчик события при нажатии на кнопку, перенаправляющий пользователя на экран добавления услуги
     * @param service
     */
    const suspensionAddHandler = service => {
        navigation.navigate('SuspensionAddScreen', {
            serviceName: service.serviceName,
            price: service.price
        })
    }
    /**
     * Обработчик события при нажатии на кнопку, перенаправляющий пользователя на экран доп. информации об услуге
     * @param service
     */
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