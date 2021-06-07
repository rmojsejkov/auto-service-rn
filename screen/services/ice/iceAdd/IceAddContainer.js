import React, {useCallback, useEffect, useState} from "react";

import IceAddScreen from "./IceAddScreen";
import Colors from '../../../../constants/colors';
import {Button, TouchableOpacity, StyleSheet, Alert} from "react-native";
// import {HeaderToggleButton} from "../../../default-options";
import {useDispatch} from "react-redux";
import {serviceActions} from "../../../../store/actions/servicesActions";
import {MaterialHeaderButton} from "../../../../components";
import {HeaderButtons, Item} from "react-navigation-header-buttons";

/**
 * Функция, содержащая все функции экрана добавления услуги по ДВС
 * @param navigation
 * @param route
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const IceAddContainer = ({ navigation, route, ...props }) => {

    const [serviceInputValue, setServiceInputValue] = useState('');
    const [priceInputValue, setPriceInputValue] = useState('');

    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const dispatch = useDispatch();
    /**
     * Функция, вызывающая функцию запроса в базу данных для добавления услуги
     * @type {(function(): Promise<void>)|*}
     */
    const postServiceAdd = useCallback( async () => {
        console.log('click save');
        console.log(serviceInputValue);
        console.log(priceInputValue)

        setIsLoading(true);
        try {
            await dispatch(serviceActions.setDefaultService(serviceInputValue, priceInputValue));
        } catch (err) {
            Alert.alert('Error', err.message, [{ message: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsLoading(false);
        navigation.goBack();
    }, [serviceInputValue, setIsLoading, dispatch, priceInputValue]);
    /**
     * Предупреждение добавления услуги
     */
    const addHandler = () => {
        Alert.alert('Предупреждение',
            'Добавить услугу?',
            [
                {
                    text: 'Нет',
                    onPress: () => console.log('Нажали закрыть'),
                    style: 'cancel'
                },
                {
                    text: 'Да',
                    onPress: () => postServiceAdd()
                }
            ]
        );
    }

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Добавление услуги',
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
    }, [navigation, postServiceAdd]);

    return (
        <IceAddScreen
            error={error}
            isLoading={isLoading}
            serviceInputValue={serviceInputValue}
            priceInputValue={priceInputValue}
            onChangeService={setServiceInputValue}
            onChangePrice={setPriceInputValue}
        />
    )
};
/**
 * Стили экрана
 * @type {{button: {paddingVertical: number, marginHorizontal: number, borderColor: string, borderRadius: number, paddingHorizontal: number}}}
 */
const styles = StyleSheet.create({
    button: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginHorizontal: 6,
        borderColor: Colors.signInBorder,
    }
})

export default IceAddContainer;