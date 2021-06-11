import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import TouchableComponent from '../Blocks/TouchableComponent';
import Block from './Block';
import Colors from '../../constants/colors';
import {FontAwesome5, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";

const OrderBlockItem = ({order, deleteHandler, ...props}) => {
    return(
        <Block style={styles.block}>
            <View style={styles.touchable}>
                <View>
                    <View style={styles.title}>
                        <View style={styles.iconName}>
                            <Text style={styles.iconText}>Сотрудник:</Text>
                        </View>
                        <Text style={styles.titleText}>{order.employee}</Text>
                    </View>
                    <View style={styles.title}>
                        <View style={styles.iconName}>
                            <Text style={styles.iconText}>Деталь:</Text>
                        </View>
                        <Text style={styles.titleText}>{order.detail}</Text>
                    </View>
                    <View style={styles.title}>
                        <View style={styles.iconName}>
                            <Text style={styles.iconText}>Услуга:</Text>
                        </View>
                        <Text style={styles.titleText}>{order.service}</Text>
                    </View>
                    <View style={styles.title}>
                        <View style={styles.iconName}>
                            <Text style={styles.iconText}>Конец заказа:</Text>
                        </View>
                        <Text style={styles.titleText}>{order.duration}</Text>
                    </View>
                    <View style={styles.title}>
                        <View style={styles.iconName}>
                            <Text style={styles.iconText}>Цена:</Text>
                        </View>
                        <Text style={styles.titleText}>{order.price}</Text>
                    </View>
                </View>
                <View style={styles.line}/>
                <View style={styles.icons}>
                    <TouchableComponent onPress={() => deleteHandler(order.id)}>
                        <View style={styles.delete}>
                            <MaterialCommunityIcons
                                name="delete"
                                size={40}
                                color={Colors.red}
                            />
                        </View>
                    </TouchableComponent>
                </View>
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
        // fontWeight: 'bold',
        alignItems: 'center',
        marginLeft: '30%',
        // left: '3%',
        // position: 'absolute'
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
        flex: 1,
        alignItems: 'center'
    },
    human: {
        alignItems: 'center',
        marginLeft: '33%',
        // borderWidth: 2,
        borderRadius: 80
    },
    delete: {
        // paddingLeft: '75%',
        // top: '3.5%',
        backgroundColor: Colors.white,
        borderRadius: 6,
        // borderWidth: 1,
        // marginLeft: '30%',
        // height: 2,
        // alignItems: 'center'
    },
    iconName: {
        flexDirection: 'row',
        right: '64%',
        alignItems: 'center',
        position: 'absolute'
    },
    iconText: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    edit: {
        // paddingLeft: '75%',
        top: '4%',
        backgroundColor: Colors.white,
        borderRadius: 6,
        // borderWidth: 1,
        marginLeft: '5%',
        height: 25,
        alignItems: 'center'
    }
});

export default OrderBlockItem;