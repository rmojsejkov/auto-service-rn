import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Image, StyleSheet, View, Text} from "react-native";

import Colors from '../../constants/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {AboutScreen} from "../../screen/about";
import {aboutScreenOptions} from "../../screen/about/AboutScreenView";

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

const AboutStackNavigator = createStackNavigator();

const AboutNavigator = () => {
    return (
        <AboutStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
            <AboutStackNavigator.Screen
                name="AboutStack"
                component={AboutScreen}
                options={aboutScreenOptions}
            />
        </AboutStackNavigator.Navigator>
    )
};

export default AboutNavigator;