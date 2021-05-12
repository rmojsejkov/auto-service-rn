import React from 'react';
import {Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
// import { TouchableComponent } from '../Blocks';
import Colors from '../../constants/colors';

const SignInButton = (...props) => {
    return (
        <TouchableOpacity
            style={styles.signInButton}
            onPress={() => ({})}
        >
            <Text style={styles.buttonText}>
                Sign In
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    signInButton: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        // borderWidth: 0.35,
        borderColor: Colors.signInBorder,
        backgroundColor: Colors.white,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: Colors.splash
    }
});

export default SignInButton;
