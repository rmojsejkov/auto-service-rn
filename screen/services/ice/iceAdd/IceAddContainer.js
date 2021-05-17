import React, { useEffect } from "react";

import IceAddScreen from "./IceAddScreen";
import Colors from '../../../../constants/colors';
import {Button} from "react-native";

const IceAddContainer = ({ navigation, route, ...props }) => {
    const { serviceName, price } = route.params;
    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Добавление услуги',
            // headerTitle: cityName,
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: Colors.white,
                fontSize: 22
            }
        })
    }, []);
    return (
        <IceAddScreen
            serviceName={serviceName}
            price={price}
        />
    )
};

export default IceAddContainer;