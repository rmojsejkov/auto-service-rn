import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import Colors from '../../constants/colors';
import {RepairScreen} from "../../screen/repairs";
import {repairScreenOptions} from "../../screen/repairs/RepairScreenView";
import {RepairAddScreen} from "../../screen/repairs/repairAdd";
import {repairAddScreenOptions} from "../../screen/repairs/repairAdd/RepairAddScreen";
import {RepairEditScreen} from '../../screen/repairs/repairEdit';
import {repairEditScreenOptions} from '../../screen/repairs/repairEdit/RepairEditScreen';

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

const RepairStackNavigator = createStackNavigator();

const RepairNavigator = () => {
    return (
        <RepairStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
            <RepairStackNavigator.Screen
                name="RepairStack"
                component={RepairScreen}
                options={repairScreenOptions}
            />
            <RepairStackNavigator.Screen
                name="RepairAddScreen"
                component={RepairAddScreen}
                options={repairAddScreenOptions}
            />
            <RepairStackNavigator.Screen
                name="RepairEditScreen"
                component={RepairEditScreen}
                options={repairEditScreenOptions}
            />
        </RepairStackNavigator.Navigator>
    )
};

export default RepairNavigator;