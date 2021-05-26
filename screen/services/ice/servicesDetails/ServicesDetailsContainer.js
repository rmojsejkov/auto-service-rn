import React, {useCallback, useEffect, useState} from "react";

import ServicesDetails from "./ServicesDetails";
import Colors from '../../../../constants/colors';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {MaterialHeaderButton} from "../../../../components";
import {serviceActions} from "../../../../store/actions/servicesActions";
import {Alert} from "react-native";
import {useDispatch} from "react-redux";
import {DeleteService} from "../../../../store/actions/servicesActions/serviceActions";


const ServicesDetailsContainer = ({ navigation, route, ...props }) => {

    const { serviceName, price, id } = route.params;

    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const dispatch = useDispatch();

    const postServiceDelete = useCallback( async () => {
        console.log('click delete');

        setIsLoading(true);
        try {
            await dispatch(serviceActions.DeleteService(id));
        } catch (err) {
            Alert.alert('Error', err.message, [{ message: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsLoading(false);
        navigation.goBack();
    }, [setIsLoading, dispatch, id]);

    const deleteHandler = () => {
        Alert.alert('Предупреждение',
            'Удалить услугу?',
            [
                {
                    text: 'Нет',
                    onPress: () => console.log('Нажали закрыть'),
                    style: 'cancel'
                },
                {
                    text: 'Да',
                    onPress: () => postServiceDelete()
                }
            ]
        );
    }

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Об услуге',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: Colors.white,
                fontSize: 24
            },
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
                    <Item
                        title="Delete"
                        iconName="delete"
                        onPress={deleteHandler.bind(this)}
                    />
                </HeaderButtons>
            )
        })
    }, [navigation, postServiceDelete]);
    return (
        <ServicesDetails
            serviceName={serviceName}
            price={price}
            error={error}
            isLoading={isLoading}
        />
    )
};

export default ServicesDetailsContainer;