import React from "react";
import {Text, View, StyleSheet, FlatList } from "react-native";

import {HeaderToggleButton} from "../default-options";
import Colors from '../../constants/colors';

const ServicesScreenView = ({navigation, loadServices,...props}) => {

    const {
        defaultServices
    } = props;

    console.log(props);

    return (
        <View style={styles.screen}>
            <Text>{loadServices}</Text>
        </View>
    );
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