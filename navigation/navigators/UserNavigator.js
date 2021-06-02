import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import Colors from '../../constants/colors';
import {UserScreen} from "../../screen/users";
import {userScreenOptions} from "../../screen/users/UserScreenView";
import {UserEditScreen} from "../../screen/users/userEdit";
import {userEditScreenOptions} from "../../screen/users/userEdit/UserEditScreen";

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
            <UserStackNavigator.Screen
                name="UserEditScreen"
                component={UserEditScreen}
                options={userEditScreenOptions}
            />
        </UserStackNavigator.Navigator>
    )
};

export default UserNavigator;