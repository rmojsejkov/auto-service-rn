import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import TouchableComponent from '../Blocks/TouchableComponent';
import Block from './Block';
import Colors from '../../constants/colors';
import {Feather, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons} from "@expo/vector-icons";

const RepairBlockItem = ({repair, deleteHandler, repairEditHandler, ...props}) => {
    return(
        <Block style={styles.block}>
            <View style={styles.touchable}>
                <View style={styles.icons}>
                    <TouchableComponent onPress={() => repairEditHandler(repair)}>
                        <View style={styles.edit}>
                            <MaterialIcons
                                name="mode-edit"
                                size={22}
                                color={Colors.splash}
                            />
                        </View>
                    </TouchableComponent>
                    <View style={styles.human}>
                        <Octicons
                            name="gear"
                            size={40}
                            color={Colors.black}
                        />
                    </View>
                    <TouchableComponent onPress={() => deleteHandler(repair.id)}>
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
                                <Text style={styles.iconText}>Наименование:</Text>
                            </View>
                            <Text style={styles.titleText}>{repair.detailName}</Text>
                        </View>
                        <View style={styles.title}>
                            <View style={styles.iconName}>
                                <Text style={styles.iconText}>Цена:</Text>
                            </View>
                            <Text style={styles.titleText}>{repair.price}</Text>
                        </View>
                        <View style={styles.title}>
                            <View style={styles.iconName}>
                                <Text style={styles.iconText}>Количество:</Text>
                            </View>
                            <Text style={styles.titleText}>{repair.counts}</Text>
                        </View>
                        <View style={styles.title}>
                            <View style={styles.iconName}>
                                <Text style={styles.iconText}>Тип автомобиля:</Text>
                            </View>
                            <Text style={styles.titleText}>{repair.carType}</Text>
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
        marginLeft: '25%',
        padding: 6,
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
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5%'
    },
    human: {
        alignItems: 'center',
        borderRadius: 80,
        padding: '2%'
    },
    delete: {
        backgroundColor: Colors.white,
        borderRadius: 6,
        height: 25,
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
        // borderWidth: 1,
        marginLeft: '5%',
        alignItems: 'center',
        justifyContent:'center'
    }
});

export default RepairBlockItem;