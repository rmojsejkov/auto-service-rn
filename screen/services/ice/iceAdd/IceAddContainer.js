import React, { useEffect } from "react";

import IceAddScreen from "./IceAddScreen";
import Colors from '../../../../constants/colors';


const IceAddContainer = ({ navigation, route, ...props }) => {
    const { serviceName, price } = route.params;
    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'serviceDetailsAdd',
            // headerTitle: cityName,
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: Colors.red,
                fontSize: 24
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