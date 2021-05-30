import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import Colors from '../../constants/colors';;
import {EmployeeScreen} from "../../screen/emloyees";
import {employeeScreenOptions} from "../../screen/emloyees/EmployeeScreenView";
import {EmployeeAddScreen}  from "../../screen/emloyees/employeeAdd";
import {employeeAddScreenOptions} from "../../screen/emloyees/employeeAdd/EmployeeAddScreen";
import {EmployeeEditScreen} from "../../screen/emloyees/employeeEdit";
import {employeeEditScreenOptions} from '../../screen/emloyees/employeeEdit/EmployeeEditScreen';

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