import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Button, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';

import Colors from '../../../../constants/colors';
import { IceAddInput } from '../../../../components';
import {Icon} from "react-native-elements";

const IceAddScreen = ({navigation, ...props}) => {
    const {
        serviceInputValue,
        textHandler,
        onChangeText
    } = props;

    const [enteredService, setEnteredService] = useState(serviceInputValue || '');

    const serviceInputHandler = enteredService => {
        setEnteredService(enteredService);
    }

    useEffect(() => {
        onChangeText(enteredService);
    }, [enteredService]);
    console.log(serviceInputValue)

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
                        autoCapitalize='words'
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
                        onPress={() => serviceInputHandler('')}
                    />
                    <TextInput
                        style={{borderBottomColor: Colors.black, borderBottomWidth: 1, width: '80%', fontSize: 18, marginHorizontal: 10}}
                        placeholder="Введите название услуги"
                        autoCapitalize='words'
                        value={enteredService}
                    />
                </KeyboardAvoidingView>
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

export default IceAddScreen;