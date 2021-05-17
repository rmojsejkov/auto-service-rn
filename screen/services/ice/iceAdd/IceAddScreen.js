import React, { useState } from 'react';
import {Text, View, StyleSheet, Button, TextInput} from 'react-native';

import Colors from '../../../../constants/colors';
import { Icon, Input} from "react-native-elements";
import { InputContainer } from "../../../../components";

const IceAddScreen = ({navigation, ...props}) => {
    const { serviceName, price, onPress } = props;
    // const [enteredCity, setEnteredCity] = useState(value || '');

    return(
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.title}>
                    <TextInput
                        style={{borderBottomColor: Colors.black, borderBottomWidth: 1}}
                        placeholder="Enter name of the service here..."
                        autoCapitalize='words'

                    />
                </View>
                <View style={styles.weatherContainer}>
                    {/*<CityWeatherIcon iconName={weatherIcon} size={130} />*/}
                    <View style={styles.weather}>
                        <Text style={styles.weatherText}>{price}</Text>
                        <Text style={styles.weatherText}>Привет!</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export const IceAddScreenOptions = navData => {
    return {
        headerTitle: 'Добавление услуги',
    }
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.white,
        flex: 1
    },
    container: {
        alignItems: 'center',
        padding: '10%',
        borderWidth: 2
    },
    weatherText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    weatherContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        padding: 10,
        alignItems: 'center',
        width: '100%',
        height: '30%',
        borderWidth: 2
    },
    titleText: {
        fontSize: 19,
        fontWeight: 'bold'
    }
});

export default IceAddScreen;