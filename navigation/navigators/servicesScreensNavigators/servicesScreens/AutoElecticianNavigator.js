import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Image, StyleSheet, View, Text} from "react-native";

import Colors from '../../../../constants/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AutoElectricianScreen } from "../../../../screen/services/autoElectrician";
import { autoElectricianScreenOptions } from "../../../../screen/services/autoElectrician/AutoElectricianScreenView";
import { ElectricianAddScreen } from './../../../../screen/services/autoElectrician/electricianAdd';
import { ElectricianDetails } from './../../../../screen/services/autoElectrician/electricianDetails';
import { electricianDetailsOptions } from '../../../../screen/services/autoElectrician/electricianDetails/ElectricianDetails'

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
                name="ElectricianScreen"
                component={AutoElectricianScreen}
                options={autoElectricianScreenOptions}
            />
            <AutoElectricianStackNavigator.Screen
                name="ElectricianAddScreen"
                component={ElectricianAddScreen}
            />
            <AutoElectricianStackNavigator.Screen
                name="ElectricianDetails"
                component={ElectricianDetails}
                options={electricianDetailsOptions}
            />
        </AutoElectricianStackNavigator.Navigator>
    )
};

export default AutoElectricianNavigator;

