import React, {useEffect} from "react";
import {Text, View, StyleSheet } from "react-native";

import {HeaderToggleButton} from "../default-options";
import SwiperData from '../../components/Swiper';
import Colors from '../../constants/colors';

const HomeScreenView = ({navigation, ...props}) => {
    return (
        <View style={styles.screen}>
            <View style={styles.swiper}>
                <SwiperData/>
            </View>
        </View>
    )
};

export const homeScreenOptions = navData => {
    return {
        headerTitle: 'Grand Auto Service',
        headerLeft: () => (
            <HeaderToggleButton navData={navData} />
        )
    }
}

const styles = StyleSheet.create({
    swiper: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginVertical: '60%',
        marginHorizontal: '5%',
        // padding: '10%',
        // width: 170,
        // height: 140,
        bottom: '29%',
        borderWidth: 0.001,
        borderColor: Colors.splash,
        elevation: 5
        // left: '5%',

    },
    screen: {
        flex: 1,
        backgroundColor: Colors.lightgray
    },

});

export default HomeScreenView;