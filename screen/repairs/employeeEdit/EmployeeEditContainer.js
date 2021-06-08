import React, {useCallback, useEffect, useState} from "react";

import EmployeeEditScreen from "./EmployeeEditScreen";
import Colors from '../../../constants/colors';
import {StyleSheet, Alert} from "react-native";

import {useDispatch} from "react-redux";
import {employeeActions} from "../../../store/actions/employeesActions";
import {MaterialHeaderButton} from "../../../components";
import {HeaderButtons, Item} from "react-navigation-header-buttons";

const EmployeeEditContainer = ({ navigation, route, ...props }) => {

    const {
        id,
        lastName,
        firstName,
        surName,
        email,
        phone,
        pass
    } = route.params;
    // console.log(route.params)

    const [lastNameInputValue, setLastNameInputValue] = useState(lastName);
    const [firstNameInputValue, setFirstNameInputValue] = useState(firstName);
    const [surNameInputValue, setSurNameInputValue] = useState(surName);
    const [emailInputValue, setEmailInputValue] = useState(email);
    const [phoneInputValue, setPhoneInputValue] = useState(phone);
    const [passInputValue, setPassInputValue] = useState(pass);

    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const dispatch = useDispatch();

    const postEmployeeEdit = useCallback( async () => {
        console.log('click save');

        setIsLoading(true);
        try {
            await dispatch(employeeActions.editEmployee(
                id,
                lastNameInputValue,
                firstNameInputValue,
                surNameInputValue,
                emailInputValue,
                phoneInputValue,
                passInputValue
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

    const editHandler = () => {
        Alert.alert('Предупреждение',
            'Сохранить изменения?',
            [
                {
                    text: 'Нет',
                    onPress: () => console.log('Нажали закрыть'),
                    style: 'cancel'
                },
                {
                    text: 'Да',
                    onPress: () => postEmployeeEdit()
                }
            ]
        );
    }

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Редактирование',
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
                        onPress={editHandler.bind(this)}
                    />
                </HeaderButtons>
            )
        })
    }, [navigation, postEmployeeEdit]);

    return (
        <EmployeeEditScreen
            lastName={lastName}
            firstName={firstName}
            surName={surName}
            email={email}
            phone={phone}
            pass={pass}
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

export default EmployeeEditContainer;