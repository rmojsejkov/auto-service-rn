import React from 'react';
import {Button, FlatList, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import {Icon} from "react-native-elements";
import ModalSelector from 'react-native-modal-selector-searchable';
import DateTimePicker from '@react-native-community/datetimepicker';

import Colors from '../../../constants/colors';
import {ServiceBlockItem} from "../../../components";

const OrderAddScreen = ({navigation, ...props}) => {
    const {
        dateValue,
        loadAllDates,
        defaultServicesIce,
        surNameInputValue,
        emailInputValue,
        phoneInputValue,
        passInputValue,
        onChangeDate,
        onChangeService,
        onChangeSurName,
        onChangeEmail,
        onChangePhone,
        onChangePass,
        error,
        isLoading,
    } = props;

    const data = defaultServicesIce.map(service => ({key: service.id, label: service.serviceName}))

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
                    source={require('../../../assets/Gear.gif')}
                />
            </View>
        )
    }

    return(
        <View style={styles.screen}>
            <View style={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.employeeTitle}
                >
                    <Icon
                        color={Colors.black}
                        name='person-circle'
                        type='ionicon'
                        size={21}
                        style={styles.icon}
                    />
                    <ModalSelector
                        data={data}
                        initValue="Выберите услугу"
                        onChange={(service)=> onChangeService}
                    />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.employeeTitle}
                >
                    <Icon
                        color={Colors.black}
                        name='person-circle'
                        type='ionicon'
                        size={21}
                        style={styles.icon}
                    />
                    <DateTimePicker
                        testID='dateTimePicker'
                        value={dateValue}
                        mode='date'
                        is24Hour={true}
                        display="default"
                        onChange={onChangeDate}
                    />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView
                    style={styles.employeeTitle}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <Icon
                        color={Colors.black}
                        name='person-circle'
                        type='ionicon'
                        size={21}
                        style={styles.icon}
                    />
                    <TextInput
                        style={{borderBottomColor: Colors.black, borderBottomWidth: 1, width: '80%', fontSize: 18, marginHorizontal: 10}}
                        placeholder="Введите отчество"
                        autoCapitalize='words'
                        value={surNameInputValue}
                        onChangeText={onChangeSurName}
                    />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView
                    style={styles.employeeTitle}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <Icon
                        color={Colors.black}
                        name='email'
                        type='MaterialCommunityIcon'
                        size={21}
                        style={styles.icon}
                    />
                    <TextInput
                        style={{borderBottomColor: Colors.black, borderBottomWidth: 1, width: '80%', fontSize: 18, marginHorizontal: 10}}
                        placeholder="Введите электронную почту"
                        keyboardType="email-address"
                        value={emailInputValue}
                        onChangeText={onChangeEmail}
                    />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView
                    style={styles.employeeTitle}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <Icon
                        color={Colors.black}
                        name='phone'
                        type='font-awesome'
                        size={21}
                        style={styles.icon}
                    />
                    <TextInput
                        style={{borderBottomColor: Colors.black, borderBottomWidth: 1, width: '80%', fontSize: 18, marginHorizontal: 10}}
                        placeholder="Введите телефон"
                        keyboardType="phone-pad"
                        value={phoneInputValue}
                        onChangeText={onChangePhone}
                    />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView
                    style={styles.employeeTitle}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <Icon
                        color={Colors.black}
                        name='lock'
                        type='Entypo'
                        size={21}
                        style={styles.icon}
                    />
                    <TextInput
                        style={{borderBottomColor: Colors.black, borderBottomWidth: 1, width: '80%', fontSize: 18, marginHorizontal: 10}}
                        placeholder="Введите пароль"
                        autoCapitalize='words'
                        value={passInputValue}
                        onChangeText={onChangePass}
                    />
                </KeyboardAvoidingView>
            </View>
        </View>
    );
};

export const orderAddScreenOptions = navData => {
    return {
        headerTitle: 'Добавление сотрудника',
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
    employeeTitle: {
        paddingLeft: '6%',
        alignItems: 'center',
        width: '100%',
        marginBottom: '6%',
        // flexDirection: 'row',
        bottom: '15%'
    },
    titleText: {
        fontSize: 19,
        fontWeight: 'bold',
        left: '5%'

    }
});

export default OrderAddScreen;