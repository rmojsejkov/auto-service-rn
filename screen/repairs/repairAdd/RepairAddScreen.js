import React from 'react';
import {ActivityIndicator, Button, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View} from 'react-native';

import Colors from '../../../constants/colors';
import {Icon} from "react-native-elements";

const RepairAddScreen = ({navigation, ...props}) => {
    const {
        detailNameInputValue,
        priceInputValue,
        countsInputValue,
        carTypeInputValue,
        onChangeDetailName,
        onChangePrice,
        onChangeCounts,
        onChangeCarType,
        error,
        isLoading,
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
                    <TextInput
                        style={{borderBottomColor: Colors.black, borderBottomWidth: 1, width: '80%', fontSize: 18, marginHorizontal: 14}}
                        placeholder="Введите наименование детали"
                        autoCapitalize='words'
                        value={detailNameInputValue}
                        onChangeText={onChangeDetailName}
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
                    <TextInput
                        style={{borderBottomColor: Colors.black, borderBottomWidth: 1, width: '80%', fontSize: 18, marginHorizontal: 14}}
                        placeholder="Введите цену"
                        keyboardType='numeric'
                        value={priceInputValue}
                        onChangeText={onChangePrice}
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
                        placeholder="Введите количество"
                        keyboardType='numeric'
                        value={countsInputValue}
                        onChangeText={onChangeCounts}
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
                        placeholder="Введите тип автомобиля"
                        autoCapitalize='words'
                        value={carTypeInputValue}
                        onChangeText={onChangeCarType}
                    />
                </KeyboardAvoidingView>
            </View>
        </View>
    );
};

export const repairAddScreenOptions = navData => {
    return {
        headerTitle: 'Добавление детали',
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
        flexDirection: 'row',
        bottom: '15%'
    },
    titleText: {
        fontSize: 19,
        fontWeight: 'bold',
        left: '5%'

    }
});

export default RepairAddScreen;