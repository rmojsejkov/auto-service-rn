import React, {useEffect} from "react";
import {Text, View} from "react-native";

import {HeaderToggleButton} from "../default-options";

const AboutScreenView = ({navigation, ...props}) => {
    return (
        <View>
            <Text>About screen!</Text>
        </View>
    )
};

export const aboutScreenOptions = navData => {
    return {
        headerTitle: 'About',
        headerLeft: () => (
            <HeaderToggleButton navData={navData} />
        )
    }
}


export default AboutScreenView;