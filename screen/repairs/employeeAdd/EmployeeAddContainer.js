import React, {useCallback, useEffect, useState} from "react";

import EmployeeAddScreen from "./EmployeeAddScreen";
import Colors from '../../../constants/colors';
import {StyleSheet, Alert} from "react-native";

import {useDispatch} from "react-redux";
import {employeeActions} from "../../../store/actions/employeesActions";
import {MaterialHeaderButton} from "../../../components";
import {HeaderButtons, Item} from "react-navigation-header-buttons";

const EmployeeAddContainer = ({ navigation, route, ...props }) => {

    const [lastNameInputValue, setLastNameInputValue] = useState('');
    const [firstNameInputValue, setFirstNameInputValue] = useState('');
    const [surNameInputValue, setSurNameInputValue] = useState('');
    const [emailInputValue, setEmailInputValue] = useState('');
    const [phoneInputValue, setPhoneInputValue] = useState('');
    const [passInputValue, setPassInputValue] = useState('');

    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const roleId = 3;

    const dispatch = useDispatch();

    const postEmployeeAdd = useCallback( async () => {
        console.log('click save');

        setIsLoading(true);
        try {
            await dispatch(employeeActions.setDefaultEmployee(
                lastNameInputValue,
                firstNameInputValue,
                surNameInputValue,
                emailInputValue,
                phoneInputValue,
                passInputValue,
                roleId
            ));
        } catch (err) {
            Alert.alert('Error', err.message, [{ message: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsLoading(false);
        navigation.goBack();
    }, [
        lastNameInputValue,
        firstNameInputValue,
        surNameInputValue,
        emailInputValue,
        phoneInputValue,
        passInputValue,
        setIsLoading,
        dispatch
    ]);

    const addHandler = () => {
        Alert.alert('Предупреждение',
            'Добавить сотрудника?',
            [
                {
                    text: 'Нет',
                    onPress: () => console.log('Нажали закрыть'),
                    style: 'cancel'
                },
                {
                    text: 'Да',
                    onPress: () => postEmployeeAdd()
                }
            ]
        );
    }

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Добавить сотрудника',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: Colors.white,
                fontSize: 22
            },
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
                    <Item
                        title="Save"
                        iconName="save"
                        onPress={addHandler.bind(this)}
                    />
                </HeaderButtons>
            )
        })
    }, [navigation, postEmployeeAdd]);

    return (
        <EmployeeAddScreen
            error={error}
            isLoading={isLoading}
            lastNameInputValue={lastNameInputValue}
            firstNameInputValue={firstNameInputValue}
            surNameInputValue={surNameInputValue}
            emailInputValue={emailInputValue}
            phoneInputValue={phoneInputValue}
            passInputValue={passInputValue}
            onChangeLastName={setLastNameInputValue}
            onChangeFirstName={setFirstNameInputValue}
            onChangeSurName={setSurNameInputValue}
            onChangeEmail={setEmailInputValue}
            onChangePhone={setPhoneInputValue}
            onChangePass={setPassInputValue}
        />
    )
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginHorizontal: 6,
        borderColor: Colors.signInBorder,
    }
})

export default EmployeeAddContainer;