import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Image, SafeAreaView, StyleSheet, View, Text} from "react-native";
import {createDrawerNavigator} from "@react-navigation/drawer";

import { HomeScreen } from "../screen/home";
import { ServicesScreen } from "../screen/services";
import { AboutScreen } from "../screen/about";
import { homeScreenOptions } from "../screen/home/options";
import { aboutScreenOptions } from "../screen/about/options";
import { servicesScreenOptions } from "../screen/services/options";

import Colors from '../constants/colors';

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
}

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
}

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
}

const AutoServiceDrawerNavigator = createDrawerNavigator();

export const AutoServiceNavigator = () => {
    return (
        <AutoServiceDrawerNavigator.Navigator>
            <AutoServiceDrawerNavigator.Screen 
                name="Home"
                component={HomeNavigator}
            />
            <AutoServiceDrawerNavigator.Screen 
                name="Services"
                component={ServicesNavigator}
            />
            <AutoServiceDrawerNavigator.Screen 
                name="About"
                component={AboutNavigator}
            />
        </AutoServiceDrawerNavigator.Navigator>
    )
}