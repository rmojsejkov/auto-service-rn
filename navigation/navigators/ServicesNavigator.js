import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Image, StyleSheet, View, Text} from "react-native";

import Colors from '../../constants/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {ServicesScreen} from "../../screen/services";
import {servicesScreenOptions} from "../../screen/services/ServicesScreenView";

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

const ServicesStackNavigator = createStackNavigator();

const ServicesNavigator = () => {
    return (
        <ServicesStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
            <ServicesStackNavigator.Screen
                name="ServicesStack"
                component={ServicesScreen}
                options={servicesScreenOptions}
            />
        </ServicesStackNavigator.Navigator>
    )
};

export default ServicesNavigator;

