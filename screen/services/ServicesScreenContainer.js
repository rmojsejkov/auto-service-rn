import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { serviceActions } from '../../store/actions';
import ServicesScreenView from "./ServicesScreenView";

const ServicesScreenContainer = ({navigation, ...props}) => {
    const {
        defaultServices
    } = useSelector(state => state.services);

    const dispatch = useDispatch();

    const loadServices = useCallback(async () => {
        await dispatch(serviceActions.getDefaultServices());
    }, [dispatch]);

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
        />
    )
}

export default ServicesScreenContainer;