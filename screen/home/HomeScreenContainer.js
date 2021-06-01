import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { serviceActions } from '../../store/actions/servicesActions';
import HomeScreenView from "./HomeScreenView";

const HomeScreenContainer = ({navigation, ...props}) => {
    const {
        defaultServicesIce,
        defaultServicesSuspension,
        defaultServicesAutoElectrician
    } = useSelector(state => state.service);

    return (
        <HomeScreenView
            defaultServicesIce={defaultServicesIce}
            defaultServicesSuspension={defaultServicesSuspension}
            defaultServicesAutoElectrician={defaultServicesAutoElectrician}
        />
    )
}

export default HomeScreenContainer;