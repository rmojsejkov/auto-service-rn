import React from 'react';
import {
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

const RepairEditScreen = ({navigation, ...props}) => {
    const {
        detailName,
        price,
        counts,
        carType,
        detailNameInputValue,
        priceInputValue,
        countsInputValue,
        carTypeInputValue,
        onChangeDetailName,
        onChangePrice,
        onChangeCounts,
        onChangeCarType,
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
                    style={styles.repairTitle}
                >
                    <Icon
                        color={Colors.black}
                        name='gear'
                        type='font-awesome'
                        size={21}
                        style={styles.icon}
                    />
                    <TextInput
                        style={{borderBottomColor: Colors.black, borderBottomWidth: 1, width: '80%', fontSize: 18, marginHorizontal: 14}}
                        placeholder={detailName}
                        autoCapitalize='words'
                        value={detailNameInputValue}
                        onChangeText={onChangeDetailName}
                    />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.repairTitle}
                >
                    <Icon
                        color={Colors.black}
                        name='pricetags'
                        type='ionicon'
                        size={21}
                        style={styles.icon}
                    />
                    <TextInput
                        style={{borderBottomColor: Colors.black, borderBottomWidth: 1, width: '80%', fontSize: 18, marginHorizontal: 14}}
                        placeholder={'' + price}
                        keyboardType='number-pad'
                        value={'' + priceInputValue}
                        onChangeText={onChangePrice}
                    />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView
                    style={styles.repairTitle}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <Icon
                        color={Colors.black}
                        name='list-alt'
                        type='material-icon'
                        size={21}
                        style={styles.icon}
                    />
                    <TextInput
                        style={{borderBottomColor: Colors.black, borderBottomWidth: 1, width: '80%', fontSize: 18, marginHorizontal: 10}}
                        placeholder={'' + counts}
                        keyboardType="numeric"
                        value={'' + countsInputValue}
                        onChangeText={onChangeCounts}
                    />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView
                    style={styles.repairTitle}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <Icon
                        color={Colors.black}
                        name='car'
                        type='ionicon'
                        size={21}
                        style={styles.icon}
                    />
                    <TextInput
                        style={{borderBottomColor: Colors.black, borderBottomWidth: 1, width: '80%', fontSize: 18, marginHorizontal: 10}}
                        placeholder={carType}
                        autoCapitalize='words'
                        value={carTypeInputValue}
                        onChangeText={onChangeCarType}
                    />
                </KeyboardAvoidingView>
            </View>
        </View>
    );
};

export const repairEditScreenOptions = navData => {
    return {
        headerTitle: 'Редактирование',
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
    repairTitle: {
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

export default RepairEditScreen;