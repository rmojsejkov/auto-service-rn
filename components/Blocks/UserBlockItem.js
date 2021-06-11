import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import TouchableComponent from '../Blocks/TouchableComponent';
import Block from './Block';
import Colors from '../../constants/colors';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const UserBlockItem = ({user, deleteHandler, editHandler, ...props}) => {
    return(
        <Block style={styles.block}>
            <View style={styles.touchable}>
                <View style={styles.icons}>
                    <TouchableComponent onPress={() => editHandler(user)}>
                        <View style={styles.edit}>
                            <FontAwesome5
                                name="edit"
                                size={22}
                                color={Colors.splash}
                            />
                        </View>
                    </TouchableComponent>
                    <View style={styles.human}>
                        <Ionicons
                            name="person"
                            size={50}
                            color={Colors.splash}
                        />
                    </View>
                    <TouchableComponent onPress={() => deleteHandler(user.id)}>
                        <View style={styles.delete}>
                            <MaterialCommunityIcons
                                name="delete"
                                size={27}
                                color={Colors.red}
                            />
                        </View>
                    </TouchableComponent>
                </View>
                <TouchableComponent onPress={() => ({})}>
                    <View>
                        <View style={styles.line}/>
                        <View style={styles.title}>
                            <View style={styles.iconName}>
                                <Text style={styles.iconText}>Эл. почта:</Text>
                            </View>
                            <Text style={styles.titleText}>{user.email}</Text>
                        </View>
                        <View style={styles.title}>
                            <View style={styles.iconName}>
                                <Text style={styles.iconText}>Телефон:</Text>
                            </View>
                            <Text style={styles.titleText}>{user.phone}</Text>
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
        fontSize: 15,
        alignItems: 'center',
        marginLeft: '30%',
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
        borderBottomWidth: 3,
        borderBottomColor: Colors.lightgray,
        backgroundColor: Colors.white
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5%'
    },
    human: {
        alignItems: 'center',
        borderRadius: 80
    },
    delete: {
        backgroundColor: Colors.white,
        borderRadius: 6,
        alignItems: 'center'
    },
    iconName: {
        flexDirection: 'row',
        right: '75%',
        alignItems: 'center',
        position: 'absolute'
    },
    iconText: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    edit: {
        backgroundColor: Colors.white,
        borderRadius: 6,
        alignItems: 'center'
    }
});

export default UserBlockItem;