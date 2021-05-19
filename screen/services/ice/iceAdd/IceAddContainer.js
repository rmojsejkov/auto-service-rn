import React, {useCallback, useEffect, useState} from "react";

import IceAddScreen from "./IceAddScreen";
import Colors from '../../../../constants/colors';
import {Button, TouchableOpacity, StyleSheet, Alert} from "react-native";
// import {HeaderToggleButton} from "../../../default-options";
import {FontAwesome5, Ionicons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {serviceActions} from "../../../../store/actions";
import {MaterialHeaderButton} from "../../../../components";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
// import {setDefaultService} from "../../../../store/actions/serviceActions";

const IceAddContainer = ({ navigation, route, ...props }) => {
    // const { serviceName, price } = route.params;

    const [serviceInputValue, setServiceInputValue] = useState('');
    const [isAdd, setIsAdd] = useState(false);

    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    let timeoutId;
    const dispatch = useDispatch();

    const textHandler = text => {
        console.log(text)
        setServiceInputValue(text);
        // console.log(serviceInputValue)
        // if (text.trim() !== '' && text.length > 3) {
        //     if (timeoutId) {
        //         clearTimeout(timeoutId);
        //     }
        //     timeoutId = setTimeout(() => {
        //         postServiceAdd(text);
        //     }, 500);
        //     return;
        // // }
        // postServiceAdd(text);
        // setIsAdd(false);
    };

    const addHandler = () => {
        Alert.alert('Warning',
            'Вы уверены?',
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
    };

    const postServiceAdd = useCallback( async () => {
        console.log('click save');
        console.log(serviceInputValue);

        setIsLoading(true);
        setIsAdd(true);
        try {
            await dispatch(serviceActions.setDefaultService(serviceInputValue));
        } catch (err) {
            Alert.alert('Error', err.message, [{ message: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsAdd(true);
        setIsLoading(false);
        navigation.goBack();
    }, [serviceInputValue, setServiceInputValue, setIsLoading, dispatch]);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Добавление услуги',
            // headerTitle: cityName,
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
            // textHandler={textHandler}
            isAdd={isAdd}
            onChangeText={setServiceInputValue}
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