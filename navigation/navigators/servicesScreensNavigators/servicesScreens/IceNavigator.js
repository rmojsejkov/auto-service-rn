import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Image, StyleSheet, View, Text} from "react-native";

import Colors from '../../../../constants/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ServicesScreen } from "../../../../screen/services/ice";
import { servicesScreenOptions } from "../../../../screen/services/ice/ServicesScreenView";
import { IceAddScreen } from "../../../../screen/services/ice/iceAdd";
import { IceAddScreenOptions } from "../../../../screen/services/ice/iceAdd/IceAddScreen";
import { ServicesDetails } from "../../../../screen/services/ice/servicesDetails";
import { servicesDetailsOptions } from "../../../../screen/services/ice/servicesDetails/ServicesDetails"

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Colors.splash,
        elevation: 5,
        shadowOpacity: 4
    },
    headerTitleStyle: {
        color: Colors.mainBackground,
    },
    headerTintColor: Colors.white,
    headerTitle: 'Screen'
};

const IceStackNavigator = createStackNavigator();

const IceNavigator = () => {
    return (
        <IceStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
            <IceStackNavigator.Screen
                name="ServicesScreen"
                component={ServicesScreen}
                options={servicesScreenOptions}
            />
            <IceStackNavigator.Screen
                name="IceAddScreen"
                component={IceAddScreen}
            />
            <IceStackNavigator.Screen
                name="ServicesDetails"
                component={ServicesDetails}
            />
        </IceStackNavigator.Navigator>
    )
};

export default IceNavigator;

