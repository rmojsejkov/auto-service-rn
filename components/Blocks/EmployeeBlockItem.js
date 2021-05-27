import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import TouchableComponent from '../Blocks/TouchableComponent';
import Block from './Block';
import Colors from '../../constants/colors';
import {Feather, Ionicons} from "@expo/vector-icons";

const EmployeeBlockItem = ({employee, onSelect, ...props}) => {
    return(
        <Block style={styles.block}>
            <View style={styles.touchable}>
                <View style={styles.icons}>
                    <View style={styles.human}>
                        <Ionicons
                            name="person-circle-outline"
                            size={60}
                            color={Colors.bottomTabIcon}

                        />
                    </View>
                    <TouchableComponent onPress={() => ({})}>
                        <View style={styles.add}>
                            <Feather
                                name="edit-2"
                                size={30}
                                color={Colors.red}

                            />
                        </View>
                    </TouchableComponent>
                </View>
                <TouchableComponent onPress={() => ({})}>
                    <View>
                        <View style={styles.line}/>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>{employee.lastName}</Text>
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>{employee.firstName}</Text>
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>{employee.surName}</Text>
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>{employee.email}</Text>
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>{employee.phone}</Text>
                        </View>
                    </View>
                </TouchableComponent>
            </View>
        </Block>
    );
};

const styles = StyleSheet.create({
    block: {
        flex: 1,
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7
    },
    priceContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    weather: {
        paddingVertical: 5
    },
    priceTextCont: {
        paddingVertical: 5,

    },
    logo: {
        width: 50,
        height: 50
    },
    title: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    titleText: {
        fontSize: 17,
        fontWeight: 'bold',
        alignItems: 'center',
        // marginLeft: '30%'
    },
    touchable: {
        overflow: 'hidden',
        borderRadius: 9
    },
    priceText: {
        fontSize: 15
    },
    line: {
        flex: 1,
        height: 1,
        // paddingTop: '15%',
        borderBottomWidth: 3,
        borderBottomColor: Colors.lightgray,
        backgroundColor: Colors.white
    }, icons: {
        flexDirection: 'row'
    },
    human: {
        alignItems: 'center',
        marginLeft: '42%',
        // borderWidth: 2,
        borderRadius: 80
    },
    add: {
        // paddingLeft: '75%',
        top: '4%',
        backgroundColor: Colors.white,
        borderRadius: 6,
        // borderWidth: 2,
        marginLeft: '30%',
        height: 32,
        alignItems: 'center'
    }
});

export default EmployeeBlockItem;