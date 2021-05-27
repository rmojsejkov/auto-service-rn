import React, {useEffect} from "react";
import {Text, View} from "react-native";

import {HeaderToggleButton} from "../default-options";

const UserScreenView = ({navigation, ...props}) => {
    return (
        <View>
            <Text>Users!</Text>
        </View>
    )
};

export const userScreenOptions = navData => {
    return {
        headerTitle: 'About',
        headerLeft: () => (
            <HeaderToggleButton navData={navData} />
        )
    }
}


export default UserScreenView;