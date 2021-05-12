import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Image, StyleSheet, View, Text} from "react-native";

import Colors from '../../constants/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {EmployeeScreen} from "../../screen/emloyee";
import {employeeScreenOptions} from "../../screen/emloyee/EmployeeScreenView";

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
};

export default EmployeeNavigator;