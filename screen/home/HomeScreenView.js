import React, {useEffect} from "react";
import {Text, View, StyleSheet, FlatList, Button, ActivityIndicator, Image} from "react-native";

import { HeaderToggleButton } from "../default-options";
import { SwiperData }  from '../../components';
import Colors from '../../constants/colors';

const HomeScreenView = ({navigation, ...props}) => {

    const {
        error,
        isLoading,
        defaultServicesIce,
        defaultServicesSuspension,
        defaultServicesAutoElectrician,
        defaultEmployees,
        defaultUsers
    } = props;

    if (error) {
        return (
            <View style={{...styles.screen, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{error}</Text>
                <View>
                    <Button title='Try again' color={Colors.black} onPress={() => loadServices()}/>
                </View>
            </View>
        )
    }

    if (isLoading) {
        return (
            <View style={{...styles.screen, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    style={{width: 60, height: 60}}
                    source={require('../../assets/Gear.gif')}
                />
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <View style={styles.swiper}>
                <SwiperData/>
            </View>
            <View>
                <View style={styles.services}>
                    <Text style={{fontSize: 25, fontWeight: "bold"}}>Услуги</Text>
                </View>
                <View style={styles.aboutService}>
                    <Text style={{fontSize: 19, fontWeight: "bold", margin: 5}}>Количество услуг по ДВС: {defaultServicesIce.length}</Text>
                    <Text style={{fontSize: 19, fontWeight: "bold"}}>Количество услуг по подвеске: {defaultServicesSuspension.length}</Text>
                    <Text style={{fontSize: 19, fontWeight: "bold", margin: 5}}>Количество услуг по электрике: {defaultServicesAutoElectrician.length}</Text>
                </View>
                <View style={styles.users}>
                    <Text style={{fontSize: 25, fontWeight: "bold"}}>Пользователи</Text>
                </View>
                <View style={styles.aboutUsers}>
                    <Text style={{fontSize: 19, fontWeight: "bold", margin: 5}}>Количество сотрудников: {defaultEmployees.length}</Text>
                    <Text style={{fontSize: 19, fontWeight: "bold"}}>Количество пользователей: {defaultUsers.length}</Text>
                </View>
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

export default HomeScreenView;