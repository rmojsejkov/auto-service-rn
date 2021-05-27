import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Image, StyleSheet, View, Text} from "react-native";

import Colors from '../../constants/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {UserScreen} from "../../screen/users";
import {userScreenOptions} from "../../screen/users/UserScreenView";

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

const UserStackNavigator = createStackNavigator();

const UserNavigator = () => {
    return (
        <UserStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
            <UserStackNavigator.Screen
                name="UserStack"
                component={UserScreen}
                options={userScreenOptions}
            />
        </UserStackNavigator.Navigator>
    )
};

export default UserNavigator;