import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {electricianActions, serviceActions, suspensionActions} from '../../store/actions/servicesActions';
import OrderScreenView from "./OrderScreenView";
import {employeeActions} from "../../store/actions/employeesActions";
import {userActions} from "../../store/actions/usersActions";
import ServicesScreenView from "../services/ice/ServicesScreenView";
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

    const orderSelectHandler = order => {
        navigation.navigate('OrderDetails', {
            orderDate: order.orderDate,
            duration: order.duration,
            detail: order.detail,
            service: order.service,
            employee: order.employee,
            user: order.user,
            id: order.id
        })
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
            orderSelectHandler={orderSelectHandler}
        />
    )
}

export default OrderScreenContainer;