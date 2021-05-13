import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Image, StyleSheet, View, Text} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from '../../../constants/colors';
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import {
    IceNavigator,
    AutoElectricianNavigator,
    SuspensionNavigator
} from "./servicesScreens";


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

const TabNavigator = createBottomTabNavigator();

const ServicesNavigator = () => {
    return(
        <TabNavigator.Navigator
            lazy={true}
            tabBarOptions={{
                activeTintColor: Colors.bottomTabIcon,
                inactiveTintColor: 'gray'
            }}
        >
            <TabNavigator.Screen
                name="Ice"
                component={IceNavigator}
                options={{
                    tabBarIcon: tabInfo => (
                        <MaterialCommunityIcons name='engine' size={24} color={tabInfo.color}/>
                    ),
                    tabBarLabel:'ДВС',
                }}
            />
            <TabNavigator.Screen
                name="SuspensionScreen"
                component={SuspensionNavigator}
                options={{
                    tabBarIcon: tabInfo => (
                        <MaterialCommunityIcons name='car-cog' size={24} color={tabInfo.color} />
                    ),
                    tabBarLabel:'Подвеска'
                }}
            />
            <TabNavigator.Screen
                name="AutoElectricianScreen"
                component={AutoElectricianNavigator}
                options={{
                    tabBarIcon: tabInfo => (
                        <MaterialCommunityIcons name='car-battery' size={24} color={tabInfo.color} />
                    ),
                    tabBarLabel:'Автоэлектрика'
                }}
            />
        </TabNavigator.Navigator>
    );
};

export default ServicesNavigator;

