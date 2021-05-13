import React, {useEffect} from "react";
import {Text, View} from "react-native";

import {HeaderToggleButton} from "../../default-options";

const SuspensionScreenView = ({navigation, ...props}) => {
    return (
        <View>
            <Text>Suspension screen!</Text>
        </View>
    )
};

export const suspensionScreenOptions = navData => {
    return {
        headerTitle: 'Работа с подвеской',
        headerLeft: () => (
            <HeaderToggleButton navData={navData} />
        )
    }
}


export default SuspensionScreenView;