import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import Colors from '../../constants/colors';;
import {EmployeeScreen} from "../../screen/emloyees";
import {employeeScreenOptions} from "../../screen/emloyees/EmployeeScreenView";
import {EmployeeAddScreen}  from "../../screen/emloyees/employeeAdd";
import {employeeAddScreenOptions} from "../../screen/emloyees/employeeAdd/EmployeeAddScreen";

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
            <EmployeeStackNavigator.Screen
                name="EmployeeAddScreen"
                component={EmployeeAddScreen}
                options={employeeAddScreenOptions}
            />
        </EmployeeStackNavigator.Navigator>
    )
};

export default EmployeeNavigator;