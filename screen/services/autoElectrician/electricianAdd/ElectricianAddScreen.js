import React from 'react';
import {ActivityIndicator, Button, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View} from 'react-native';

import Colors from '../../../../constants/colors';
import {Icon} from "react-native-elements";

const ElectricianAddScreen = ({navigation, ...props}) => {
    const {
        serviceInputValue,
        onChangeService,
        onChangePrice,
        error,
        isLoading,
        priceInputValue,
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
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.nameTitle}
                >
                    <Icon
                        color={Colors.black}
                        name='dollar'
                        type='font-awesome'
                        size={21}
                        style={styles.icon}

                    />
                    <TextInput
                        style={{borderBottomColor: Colors.black, borderBottomWidth: 1, width: '80%', fontSize: 18, marginHorizontal: 14}}
                        placeholder="Введите цену услуги"
                        keyboardType='numeric'
                        value={priceInputValue}
                        onChangeText={onChangePrice}
                    />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView
                    style={styles.priceTitle}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <Icon
                        color={Colors.black}
                        name='wrench'
                        type='font-awesome'
                        size={21}
                        style={styles.icon}
                    />
                    <TextInput
                        style={{borderBottomColor: Colors.black, borderBottomWidth: 1, width: '80%', fontSize: 18, marginHorizontal: 10}}
                        placeholder="Введите название услуги"
                        autoCapitalize='words'
                        value={serviceInputValue}
                        onChangeText={onChangeService}
                    />
                </KeyboardAvoidingView>
            </View>
        </View>
    );
};

export const electricianAddScreenOptions = navData => {
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
        marginTop: '2%',
        paddingVertical: '20%',
        // borderWidth: 2,
        // flex: 1,
        backgroundColor: Colors.white

    },
    weatherText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    weatherContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameTitle: {
        bottom: '3%',
        alignItems: 'center',
        width: '100%',
        // height: '13%',
        // borderWidth: 2,
        marginBottom: '40%',
        flexDirection: 'row',
        paddingLeft: '7%',
    },
    titleText: {
        fontSize: 19,
        fontWeight: 'bold',
        left: '5%'

    },
    priceTitle: {
        paddingLeft: '6%',
        alignItems: 'center',
        width: '100%',
        // borderWidth: 2,
        marginBottom: '7%',
        flexDirection: 'row',
        bottom: '61%',
        // paddingBottom: '6%'
    }
});

export default ElectricianAddScreen;