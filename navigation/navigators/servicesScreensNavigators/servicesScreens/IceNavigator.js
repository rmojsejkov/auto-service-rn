import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Image, StyleSheet, View, Text} from "react-native";

import Colors from '../../../../constants/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ServicesScreen } from "../../../../screen/services/ice";
import { servicesScreenOptions } from "../../../../screen/services/ice/ServicesScreenView";

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Colors.splash,
        elevation: 5,
        shadowOpacity: 4
    },
    headerTitleStyle: {
        color: Colors.mainBackground,
    },
    headerBackTitleStyle: {

    },
    headerTintColor: 'white',
    headerTitle: 'Screen'
};

const IceStackNavigator = createStackNavigator();

const IceNavigator = () => {
    return (
        <IceStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
            <IceStackNavigator.Screen
                name="ServicesStack"
                component={ServicesScreen}
                options={servicesScreenOptions}
            />
        </IceStackNavigator.Navigator>
    )
};

export default IceNavigator;

