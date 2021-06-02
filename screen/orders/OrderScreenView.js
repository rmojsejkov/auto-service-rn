import React, {useEffect} from "react";
import {Text, View, StyleSheet, FlatList, Button, ActivityIndicator, Image} from "react-native";

import { HeaderToggleButton } from "../default-options";
import { SwiperData }  from '../../components';
import Colors from '../../constants/colors';

const OrderScreenView = ({navigation, ...props}) => {


    return (
        <View style={styles.screen}>
            <Text>
                Заказы!
            </Text>
        </View>
    )
};

export const orderScreenOptions = navData => {
    return {
        headerTitle: 'Заказы',
        headerLeft: () => (
            <HeaderToggleButton navData={navData} />
        )
    }
}

const styles = StyleSheet.create({
    swiper: {
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
        marginVertical: '60%',
        marginHorizontal: '5%',
        // padding: '10%',
        // width: 170,
        height: 250,
        bottom: '29%',
        borderWidth: 0.001,
        borderColor: Colors.splash,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        // left: '5%',
        elevation: 6,

    },
    screen: {
        flex: 1,
        backgroundColor: Colors.lightgray
    },
    services: {
        backgroundColor: Colors.lightgray,
        alignItems: 'center',
        borderWidth: 2,
        bottom: 400,
        marginHorizontal: '7%',
        borderColor: Colors.splash,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
    },
    aboutService: {
        alignItems: 'center',
        // borderWidth: 2,
        bottom: 390,
        // marginHorizontal: '3%'
    },
    users: {
        backgroundColor: Colors.lightgray,
        alignItems: 'center',
        borderWidth: 2,
        bottom: 380,
        marginHorizontal: '7%',
        borderColor: Colors.splash,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
    },
    aboutUsers: {
        alignItems: 'center',
        bottom: 370,
    }
});

export default OrderScreenView;