import React from "react";
import {Text, View, StyleSheet } from "react-native";

import {HeaderToggleButton} from "../default-options";
import Colors from '../../constants/colors';

const ServicesScreenView = ({navigation, ...props}) => {
    
    return (
        <View style={styles.screen} />
    )
};

export const servicesScreenOptions = navData => {
    return {
        headerTitle: 'Services',
        headerLeft: () => (
            <HeaderToggleButton navData={navData} />
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});


export default ServicesScreenView;