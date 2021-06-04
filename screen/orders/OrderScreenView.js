import React, {useEffect} from "react";
import {Text, View, StyleSheet, FlatList, Button, ActivityIndicator, Image} from "react-native";

import { HeaderToggleButton } from "../default-options";
import {CustomButtonAdding, InputContainer, ServiceBlockItem, SwiperData} from '../../components';
import Colors from '../../constants/colors';
import OrderBlockItem from "../../components/Blocks/OrderBlockItem";

const OrderScreenView = ({navigation, ...props}) => {

    const {
        error,
        isLoading,
        loadOrders,
        defaultOrders,
        orderSelectHandler,
    } = props;

    if (error) {
        return (
            <View style={{...styles.screen, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{error}</Text>
                <View>
                    <Button title='Try again' color={Colors.black} onPress={() => loadOrders()}/>
                </View>
            </View>
        )
    }

    if (isLoading) {
        return (
            <View style={{...styles.screen, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    style={{width: 60, height: 60}}
                    source={require('../../assets/Gear.gif')}
                />
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={defaultOrders}
                keyExtractor={item => item.id + ''}
                numColumns={1}
                renderItem={itemData => <OrderBlockItem order={itemData.item} onSelect={orderSelectHandler.bind(this)}/>}
                refreshing={isLoading}
                onRefresh={() => loadOrders()}
            />
        </View>
    );
};

export const orderScreenOptions = navData => {
    return {
        headerTitle: 'Заказы',
        headerLeft: () => (
            <HeaderToggleButton navData={navData} />
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.lightgray
    }
});

export default OrderScreenView;