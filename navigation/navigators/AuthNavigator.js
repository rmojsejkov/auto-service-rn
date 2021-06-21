import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Image, StyleSheet, View, Text} from "react-native";

import Colors from '../../constants/colors';
import {AuthScreen} from "../../screen/auth";
import {authScreenOptions} from "../../screen/auth/AuthScreenView";

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

const AuthStackNavigator = createStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStackNavigator.Navigator
            screenOptions={defaultStackNavOptions}
        >
            <AuthStackNavigator.Screen
                name="AuthScreenView"
                component={AuthScreen}
                options={authScreenOptions}
            />
        </AuthStackNavigator.Navigator>
    )
};

export default AuthNavigator;