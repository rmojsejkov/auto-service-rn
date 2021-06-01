import React, {useEffect} from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";

import { HeaderToggleButton } from "../default-options";
import { SwiperData }  from '../../components';
import Colors from '../../constants/colors';
import { RecommendHome } from "../../components";

const HomeScreenView = ({navigation, ...props}) => {

    const {
        defaultServicesIce,
        defaultServicesSuspension,
        defaultServicesAutoElectrician
    } = props;

    console.log(defaultServicesIce.length)

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
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>Количество услуг по ДВС: {defaultServicesIce.length}</Text>
                    <Text style={{fontSize: 14, fontWeight: "bold"}}>Количество услуг по подвеске: {defaultServicesSuspension.length}</Text>
                    <Text style={{fontSize: 14, fontWeight: "bold"}}>Количество услуг по электрике: {defaultServicesAutoElectrician.length}</Text>
                </View>
                {/*<FlatList*/}
                {/*    // data={citiesWeather}*/}
                {/*    keyExtractor={item => item.id + ''}*/}
                {/*    numColumns={1}*/}
                {/*    renderItem={itemData => <RecommendHome city={itemData.item} onSelect={() => ({})} />}*/}
                {/*    // refreshing={isLoading}*/}
                {/*    // onRefresh={() => loadCities()}*/}
                {/*/>*/}
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
        backgroundColor: Colors.white,
        alignItems: 'center',
        borderWidth: 2,
        bottom: 400,
        marginHorizontal: '7%'
    },
    aboutService: {
        alignItems: 'center',
        borderWidth: 2,
        bottom: 100,
        marginHorizontal: '7%'
    }
});

export default HomeScreenView;