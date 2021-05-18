import React, {useEffect, useState} from "react";

import IceAddScreen from "./IceAddScreen";
import Colors from '../../../../constants/colors';
import {Button, TouchableOpacity, StyleSheet} from "react-native";
import {HeaderToggleButton} from "../../../default-options";
import {FontAwesome5, Ionicons} from "@expo/vector-icons";

const IceAddContainer = ({ navigation, route, ...props }) => {
    const { serviceName, price } = route.params;

    const [serviceInputValue, setServiceInputValue] = useState('');
    const [isAdd, setIsAdd] = useState(false);

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
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => ({})}
                >
                    <Ionicons
                        name="save"
                        size={25}
                        color={Colors.white}
                    />
                </TouchableOpacity>
            )
        })
    }, []);

    let timeoutId;
    const textHandler = text => {
        setServiceInputValue(text);
        if (text.trim() !== '' && text.length > 3) {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                fetchCityWeatherByName(text);
            }, 500);
            return;
        }
        setIsAdd(false);
    };


    return (
        <IceAddScreen
            serviceName={serviceName}
            price={price}
            serviceInputValue={serviceInputValue}
            textHandler={textHandler}
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