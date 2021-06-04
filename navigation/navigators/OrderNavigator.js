import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Image, StyleSheet, View, Text} from "react-native";

import Colors from '../../constants/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {OrderScreen} from "../../screen/orders";
import {orderScreenOptions} from "../../screen/orders/OrderScreenView";
import {OrderAddScreen} from "../../screen/orders/orderAdd";
import {orderAddScreenOptions} from "../../screen/orders/orderAdd/OrderAddScreen";

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

const OrderStackNavigator = createStackNavigator();

const OrderNavigator = () => {
    return (
        <OrderStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
            <OrderStackNavigator.Screen
                name="OrderStack"
                component={OrderScreen}
                options={orderScreenOptions}
            />
            <OrderStackNavigator.Screen
                name="OrderAddScreen"
                component={OrderAddScreen}
                options={orderAddScreenOptions}
            />
        </OrderStackNavigator.Navigator>
    )
};

export default OrderNavigator;