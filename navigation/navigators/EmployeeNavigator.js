import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import Colors from '../../constants/colors';
import {EmployeeScreen} from "../../screen/employees";
import {employeeScreenOptions} from "../../screen/employees/EmployeeScreenView";
import {EmployeeAddScreen}  from "../../screen/employees/employeeAdd";
import {employeeAddScreenOptions} from "../../screen/employees/employeeAdd/EmployeeAddScreen";
import {EmployeeEditScreen} from "../../screen/employees/employeeEdit";
import {employeeEditScreenOptions} from '../../screen/employees/employeeEdit/EmployeeEditScreen';

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
            <EmployeeStackNavigator.Screen
                name="EmployeeEditScreen"
                component={EmployeeEditScreen}
                options={employeeEditScreenOptions}
            />
        </EmployeeStackNavigator.Navigator>
    )
};

export default EmployeeNavigator;