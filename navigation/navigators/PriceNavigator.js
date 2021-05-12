import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Image, StyleSheet, View, Text} from "react-native";

import Colors from '../../constants/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {PriceScreen} from "../../screen/prices";
import {priceScreenOptions} from "../../screen/prices/PriceScreenView";

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
};

export default PriceNavigator;