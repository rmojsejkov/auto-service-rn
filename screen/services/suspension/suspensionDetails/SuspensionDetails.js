import React from 'react';
import {Text, View, StyleSheet, Button, ActivityIndicator, Image} from 'react-native';

import Colors from '../../../../constants/colors';
import {HeaderToggleButton} from "../../../default-options";

const SuspensionDetails = ({navigation, ...props}) => {
    const {
        serviceName,
        price,
        error,
        isLoading
    } = props;

    if (error) {
        return (
            <View style={{...styles.screen, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{error}</Text>
                <View>
                    <Button title='Try again' color={Colors.black} onPress={() => ({})}/>
                </View>
            </View>
        )
    }

    if (isLoading) {
        return (
            <View style={{...styles.screen, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    style={{width: 60, height: 60}}
                    source={require('../../../../assets/Gear.gif')}
                />
            </View>
        )
    }

    return(
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Название: </Text>
                    <View>
                        <Text style={styles.nameText}>{serviceName}</Text>
                    </View>
                </View>
                <View style={styles.Price}>
                    <Text style={styles.titlePrice}>Цена: </Text>
                    <View>
                        <Text style={styles.priceText}>{price}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export const suspensionDetailsOptions = navData => {
    return {
        headerTitle: 'Подробнее',
        headerLeft: () => (
            <HeaderToggleButton navData={navData} />
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.white,
        flex: 1
    },
    container: {
        alignItems: 'center',
        paddingTop: '37%',
    },
    priceText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: '7%',
    },
    priceContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        // margin: '5%'
    },
    title: {
        bottom: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 2,
        marginHorizontal: '6%'
    },
    nameText: {
        marginHorizontal: '3%',
        fontSize: 20,
        fontWeight: 'bold'
    },
    titleText: {
        marginVertical: '7%',
        fontSize: 23,
        fontWeight: 'bold',
        // borderWidth: 3
    },
    titlePrice: {
        alignItems: 'center',
        // marginVertical: '13%',
        fontSize: 23,
        fontWeight: 'bold',
        // borderWidth: 3
    },
    Price: {
        bottom: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 2,
        marginHorizontal: '6%'
    }
});

export default SuspensionDetails;