import React, {useEffect} from "react";
import {Text, View} from "react-native";

import {HeaderToggleButton} from "../../default-options";

const AutoElectricianScreenView = ({navigation, ...props}) => {
    return (
        <View>
            <Text>AutoElectrician screen!</Text>
        </View>
    )
};

export const autoElectricianScreenOptions = navData => {
    return {
        headerTitle: 'Автоэлектрика / тормоза',
        headerLeft: () => (
            <HeaderToggleButton navData={navData} />
        )
    }
}


export default AutoElectricianScreenView;