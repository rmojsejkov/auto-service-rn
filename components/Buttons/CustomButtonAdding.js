import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import Colors from '../../constants/colors';
import { Ionicons } from "@expo/vector-icons";


const CustomButtonAdding = (props) => {
    return (
        <View style={styles.button}>
            <TouchableOpacity
                onPress={props.onPress}
            >
                <Ionicons
                    name="md-add"
                    size={40}
                    color={Colors.white}
                />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        height: 47,
        width: 47,
        backgroundColor: Colors.black,
        right: '4%',
        bottom: '10%',
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }
});

export default CustomButtonAdding;