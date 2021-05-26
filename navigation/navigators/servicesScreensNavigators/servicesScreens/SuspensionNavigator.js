import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Image, StyleSheet, View, Text} from "react-native";

import Colors from '../../../../constants/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SuspensionScreen } from "../../../../screen/services/suspension";
import { suspensionScreenOptions } from "../../../../screen/services/suspension/SuspensionScreenView";
import { SuspensionAddScreen } from "../../../../screen/services/suspension/suspensionAdd";
import { SuspensionDetails }  from "../../../../screen/services/suspension/suspensionDetails";
import { suspensionDetailsOptions } from '../../../../screen/services/suspension/suspensionDetails/SuspensionDetails';

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
                name="SuspensionScreen"
                component={SuspensionScreen}
                options={suspensionScreenOptions}
            />
            <SuspensionStackNavigator.Screen
                name="SuspensionAddScreen"
                component={SuspensionAddScreen}
            />
            <SuspensionStackNavigator.Screen
                name="SuspensionDetails"
                component={SuspensionDetails}
                options={suspensionDetailsOptions}
            />
        </SuspensionStackNavigator.Navigator>
    )
};

export default SuspensionNavigator;

