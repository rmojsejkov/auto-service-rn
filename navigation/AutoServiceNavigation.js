import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Image, SafeAreaView, StyleSheet, View, Text} from "react-native";
import {createDrawerNavigator, DrawerItem} from "@react-navigation/drawer";

import { HomeScreen } from "../screen/home";
import { ServicesScreen } from "../screen/services";
import { AboutScreen } from "../screen/about";
import { homeScreenOptions } from "../screen/home/options";
import { aboutScreenOptions } from "../screen/about/options";
import { servicesScreenOptions } from "../screen/services/options";
import { EmployeeScreen } from '../screen/emloyee';
import { employeeScreenOptions } from "../screen/emloyee/options";
import { PriceScreen } from '../screen/prices';
import { priceScreenOptions } from "../screen/prices/options";

import Colors from '../constants/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";

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

const EmployeeStackNavigator = createStackNavigator();

const EmployeeNavigator = () => {
    return (
        <EmployeeStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
            <EmployeeStackNavigator.Screen
                name="EmployeeStack"
                component={EmployeeScreen}
                options={employeeScreenOptions}
            />
        </EmployeeStackNavigator.Navigator>
    )
}

const PriceStackNavigator = createStackNavigator();

const PriceNavigator = () => {
    return (
        <PriceStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
            <PriceStackNavigator.Screen
                name="PriceStack"
                component={PriceScreen}
                options={priceScreenOptions}
            />
        </PriceStackNavigator.Navigator>
    )
}

const AutoServiceDrawerNavigator = createDrawerNavigator();

export const AutoServiceNavigator = () => {


    return (
        <AutoServiceDrawerNavigator.Navigator>
            <AutoServiceDrawerNavigator.Screen 
                name="Home"
                component={HomeNavigator}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: props => (
                        <MaterialCommunityIcons
                            name="home"
                            size={23}
                            color={Colors.splash}
                        />
                    )
                }}
            />
            <AutoServiceDrawerNavigator.Screen 
                name="Services"
                component={ServicesNavigator}
                options={{
                    drawerLabel: 'Services',
                    drawerIcon: props => (
                        <MaterialCommunityIcons
                            name="wrench"
                            size={23}
                            color={Colors.splash}
                        />
                    )
                }}
            />
            <AutoServiceDrawerNavigator.Screen
                name="Employee"
                component={EmployeeNavigator}
                options={{
                    drawerLabel: 'Employees',
                    drawerIcon: props => (
                        <MaterialCommunityIcons
                            name="account-cog"
                            size={23}
                            color={Colors.splash}
                        />
                    )
                }}
            />
            <AutoServiceDrawerNavigator.Screen 
                name="About"
                component={AboutNavigator}
                options={{
                    drawerLabel: 'About',
                    drawerIcon: props => (
                        <MaterialCommunityIcons
                            name="newspaper-variant-multiple"
                            size={23}
                            color={Colors.splash}
                        />
                    )
                }}
            />
            <AutoServiceDrawerNavigator.Screen
                name="Prices"
                component={PriceNavigator}
                options={{
                    drawerLabel: 'Prices',
                    drawerIcon: props => (
                        <MaterialCommunityIcons
                            name="cash-multiple"
                            size={23}
                            color={Colors.splash}
                        />
                    )
                }}
            />
        </AutoServiceDrawerNavigator.Navigator>
    )
}