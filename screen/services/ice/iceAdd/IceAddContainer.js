import React, {useCallback, useEffect, useState} from "react";

import IceAddScreen from "./IceAddScreen";
import Colors from '../../../../constants/colors';
import {Button, TouchableOpacity, StyleSheet, Alert} from "react-native";
// import {HeaderToggleButton} from "../../../default-options";
import {useDispatch} from "react-redux";
import {serviceActions} from "../../../../store/actions";
import {MaterialHeaderButton} from "../../../../components";
import {HeaderButtons, Item} from "react-navigation-header-buttons";

const IceAddContainer = ({ navigation, route, ...props }) => {

    const [serviceInputValue, setServiceInputValue] = useState('');
    const [priceInputValue, setPriceInputValue] = useState('');
    const [isAdd, setIsAdd] = useState(false);

    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const dispatch = useDispatch();

    const postServiceAdd = useCallback( async () => {
        console.log('click save');
        console.log(serviceInputValue);
        console.log(priceInputValue)

        setIsLoading(true);
        setIsAdd(true);
        try {
            await dispatch(serviceActions.setDefaultService(serviceInputValue, priceInputValue));
        } catch (err) {
            Alert.alert('Error', err.message, [{ message: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsAdd(true);
        setIsLoading(false);
        navigation.goBack();
    }, [serviceInputValue, setIsLoading, dispatch, priceInputValue]);

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
                        onPress={postServiceAdd.bind(this)}
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
            isAdd={isAdd}
            onChangeService={setServiceInputValue}
            onChangePrice={setPriceInputValue}
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

export default IceAddContainer;