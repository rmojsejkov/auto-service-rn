import React from 'react';
import {
    ActivityIndicator,
    Button,
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

import Colors from '../../../constants/colors';
import {Icon} from "react-native-elements";

const EmployeeEditScreen = ({navigation, ...props}) => {
    const {
        lastName,
        firstName,
        surName,
        email,
        phone,
        pass,
        firstNameInputValue,
        lastNameInputValue,
        surNameInputValue,
        emailInputValue,
        phoneInputValue,
        passInputValue,
        onChangeFirstName,
        onChangeLastName,
        onChangeSurName,
        onChangeEmail,
        onChangePhone,
        onChangePass,
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
                        placeholder={lastName}
                        autoCapitalize='words'
                        value={lastNameInputValue}
                        onChangeText={onChangeLastName}
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
                        placeholder={firstName}
                        autoCapitalize='words'
                        value={firstNameInputValue}
                        onChangeText={onChangeFirstName}
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
                        placeholder={surName}
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
                        placeholder={email}
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
                        placeholder={phone}
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
                        placeholder={pass}
                        autoCapitalize='words'
                        value={passInputValue}
                        onChangeText={onChangePass}
                    />
                </KeyboardAvoidingView>
            </View>
        </View>
    );
};

export const employeeEditScreenOptions = navData => {
    return {
        headerTitle: 'Редактировать данные',
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

export default EmployeeEditScreen;