import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import TouchableComponent from '../Blocks/TouchableComponent';
import Block from './Block';
import Colors from '../../constants/colors';

const ServiceBlockItem = ({service, onSelect, ...props}) => {
    return(
        <Block style={styles.block}>
            <View style={styles.touchable}>
                <TouchableComponent onPress={() => onSelect(service)}>
                    <View>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>{service.serviceName}</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            {/*<CityWeatherIcon iconName={city.weather[0].icon} />*/}
                            <View style={styles.price}>
                                <Text style={styles.priceText}>Цена: {service.price}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableComponent>
            </View>
        </Block>
    );
};

const styles = StyleSheet.create({
    block: {
        flex: 1,
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    priceContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    weather: {
        paddingVertical: 5
    },
    price: {
        paddingVertical: 5,

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
    },
    priceText: {
        fontSize: 15
    }
});

export default ServiceBlockItem;