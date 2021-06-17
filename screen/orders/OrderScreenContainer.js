import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import OrderScreenView from "./OrderScreenView";
import {orderActions} from "../../store/actions/ordersActions";
import Colors from "../../constants/colors";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {OrderButton} from "../../components/UI";

const OrderScreenContainer = ({navigation, ...props}) => {
    const {
        defaultOrders,
    } = useSelector(state => state.order);

    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    const dispatch = useDispatch();

    const loadOrders = useCallback(async () => {
        setIsLoading(true);
        try {
            await dispatch(orderActions.getDefaultOrders());
        } catch (err) {
            Alert.alert('Error', err.message, [{ message: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsLoading(false);
    }, [dispatch, setIsLoading, setError]);

    const orderAddHandler = order => {
        navigation.navigate('OrderAddScreen')
    }

    const postOrderDelete = useCallback( async id => {
        setIsLoading(true);
        try {
            await dispatch(orderActions.deleteOrder(id));
        } catch (err) {
            Alert.alert('Error', err.message, [{ message: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsLoading(false);
    }, [setIsLoading, dispatch]);

    const deleteHandler = id => {
        Alert.alert('Предупреждение',
            'Удалить заказ?',
            [
                {
                    text: 'Нет',
                    onPress: () => console.log('Нажали закрыть'),
                    style: 'cancel'
                },
                {
                    text: 'Да',
                    onPress: () => postOrderDelete(id)
                }
            ]
        );
    }

    useEffect(() => {
        loadOrders();
    }, [loadOrders]);

    useEffect(() => {
        return navigation.dangerouslyGetParent()
            .addListener('focus', () => {
                loadOrders();
            });
    }, [navigation]);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Заказы',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: Colors.white,
                fontSize: 24
            },
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={OrderButton}>
                    <Item
                        title="Add"
                        iconName="cart-plus"
                        onPress={orderAddHandler}
                    />
                </HeaderButtons>
            )
        })
    }, [navigation]);

    return (
        <OrderScreenView
            defaultOrders={defaultOrders}
            loadOrders={loadOrders}
            error={error}
            isLoading={isLoading}
            navigation={navigation}
            deleteHandler={deleteHandler}
        />
    )
}

export default OrderScreenContainer;