import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Image, StyleSheet, View, Text} from "react-native";

import Colors from '../../../../constants/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SuspensionScreen } from "../../../../screen/services/suspension";
import { suspensionScreenOptions } from "../../../../screen/services/suspension/SuspensionScreenView";

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

const SuspensionStackNavigator = createStackNavigator();

const SuspensionNavigator = () => {
    return (
        <SuspensionStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
            <SuspensionStackNavigator.Screen
                name="ServicesStack"
                component={SuspensionScreen}
                options={suspensionScreenOptions}
            />
        </SuspensionStackNavigator.Navigator>
    )
};

export default SuspensionNavigator;

