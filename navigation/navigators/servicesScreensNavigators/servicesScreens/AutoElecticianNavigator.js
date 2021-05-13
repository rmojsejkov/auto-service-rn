import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Image, StyleSheet, View, Text} from "react-native";

import Colors from '../../../../constants/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AutoElectricianScreen } from "../../../../screen/services/autoElectrician";
import { autoElectricianScreenOptions } from "../../../../screen/services/autoElectrician/AutoElectricianScreenView";

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

const AutoElectricianStackNavigator = createStackNavigator();

const AutoElectricianNavigator = () => {
    return (
        <AutoElectricianStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
            <AutoElectricianStackNavigator.Screen
                name="ServicesStack"
                component={AutoElectricianScreen}
                options={autoElectricianScreenOptions}
            />
        </AutoElectricianStackNavigator.Navigator>
    )
};

export default AutoElectricianNavigator;

