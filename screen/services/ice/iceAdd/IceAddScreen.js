import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

import Colors from '../../../../constants/colors';

const IceAddScreen = ({navigation, ...props}) => {
    const { serviceName, price } = props;

    return(
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>{serviceName}</Text>
                    <Text style={styles.titleText}>aa</Text>
                </View>
                <View style={styles.weatherContainer}>
                    {/*<CityWeatherIcon iconName={weatherIcon} size={130} />*/}
                    <View style={styles.weather}>
                        <Text style={styles.weatherText}>{price}</Text>
                        <Text style={styles.weatherText}> С</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.white,
        flex: 1
    },
    container: {
        alignItems: 'center',
        padding: '35%'
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
        alignItems: 'center'
    },
    titleText: {
        fontSize: 19,
        fontWeight: 'bold'
    }
});

export default IceAddScreen;