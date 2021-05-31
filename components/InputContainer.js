import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, TouchableWithoutFeedback } from "react-native";
import { Icon } from "react-native-elements";

import Colors from '../constants/colors';

const InputContainer = ({value, onChangeText = () => '', ...props}) => {
    const [enteredText, setEnteredText] = useState(value || '');

    const textInputHandler = enteredText => {
        setEnteredText(enteredText);
    };

    useEffect(() => {
        onChangeText(enteredText);
    }, [enteredText]);

    return(
        <View style={styles.tab}>
            <View style={styles.inputContainer}>
                <Icon
                    color='gray'
                    name='search'
                    type='font-awesome'
                    size={20}
                    style={styles.icon}
                />
                <TextInput
                    placeholder="Введите название..."
                    style={styles.input}
                    onChangeText={textInputHandler}
                    value={enteredText}
                />
                <TouchableWithoutFeedback onPress={() => textInputHandler('')}>
                    <Icon
                        style={{opacity: enteredText !== '' ? 1 : 0}}
                        name='cancel'
                        size={20}
                        color={Colors.black}
                    />
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        borderColor: Colors.whitesmoke,
        borderWidth: 1,
        padding: 0.1,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    input: {
        width: '90%',
        padding: 5
    },
    tab: {
        padding: 10,
        margin: 10,
        backgroundColor: Colors.white,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
    },
    icon: {
        // marginBottom: 650
    }
});

export default InputContainer;