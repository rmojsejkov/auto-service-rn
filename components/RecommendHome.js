import React from 'react';
import { View, Text, StyleSheet, Flatlist } from 'react-native';

import Colors from '../constants/colors';
import { Block, TouchableComponent } from './Blocks';

const RecommendHome = (city) => {
    return (
        <Block style={styles.block}>
            <View style={styles.touchable}>
                <TouchableComponent>
                    <View>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>SomethingOne</Text>
                        </View>
                        <View style={styles.recommendContainer}>
                            {/*<CityWeatherIcon iconName={city.weather[0].icon} />*/}
                            <View style={styles.temp}>
                                <Text> SomethingTwo</Text>
                            </View>
                        </View>
                    </View>
                </TouchableComponent>
            </View>
        </Block>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    block: {
        flex: 1,
        borderWidth: 1,
        borderColor: Colors.black,
        margin: 10,
        borderRadius: 10
    },
    recommendContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    weather: {
        paddingVertical: 5
    },
    temp: {
        paddingVertical: 5
    },
    logo: {
        width: 50,
        height: 50
    },
    title: {
        padding: 10,
        alignItems: 'center'
    },
    titleText: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    touchable: {
        overflow: 'hidden',
        borderRadius: 9
    }
});

export default RecommendHome;