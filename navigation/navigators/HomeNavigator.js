import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Image, StyleSheet, View, Text} from "react-native";

import Colors from '../../constants/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {HomeScreen} from "../../screen/home";
import {homeScreenOptions} from "../../screen/home/HomeScreenView";

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

const HomeStackNavigator = createStackNavigator();

const HomeNavigator = () => {
    return (
        <HomeStackNavigator.Navigator
            screenOptions={defaultStackNavOptions}
        >
            <HomeStackNavigator.Screen
                name="HomeStack"
                component={HomeScreen}
                options={homeScreenOptions}
            />
        </HomeStackNavigator.Navigator>
    )
};

export default HomeNavigator;