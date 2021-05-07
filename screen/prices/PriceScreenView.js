import React, {useEffect} from "react";
import {Text, View} from "react-native";

import {HeaderToggleButton} from "../default-options";

const PriceScreenView = ({navigation, ...props}) => {
    return (
        <View>
            <Text>Prices screen!</Text>
        </View>
    )
};

export const priceScreenOptions = navData => {
    return {
        headerTitle: 'Prices',
        headerLeft: () => (
            <HeaderToggleButton navData={navData} />
        )
    }
}


export default PriceScreenView;