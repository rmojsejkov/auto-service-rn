import React, {useCallback, useEffect, useState} from "react";

import SuspensionDetails from "./SuspensionDetails";
import Colors from '../../../../constants/colors';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {MaterialHeaderButton} from "../../../../components";
import {suspensionActions} from "../../../../store/actions/servicesActions";
import {Alert} from "react-native";
import {useDispatch} from "react-redux";

/**
 * Функция, содержащая все функции экрана подробной информации по услуге
 * @param navigation
 * @param route
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const SuspensionDetailsContainer = ({ navigation, route, ...props }) => {

    const { serviceName, price, id } = route.params;

    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const dispatch = useDispatch();
    /**
     * Функция, вызывающая функция запроса в базу данных для удаления услуги
     * @type {(function(): Promise<void>)|*}
     */
    const postServiceDelete = useCallback( async () => {
        console.log('click delete');

        setIsLoading(true);
        try {
            await dispatch(suspensionActions.DeleteServiceSuspension(id));
        } catch (err) {
            Alert.alert('Error', err.message, [{ message: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsLoading(false);
        navigation.goBack();
    }, [setIsLoading, dispatch, id]);
    /**
     * Подтверждение удаления услуги
     */
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
        <SuspensionDetails
            serviceName={serviceName}
            price={price}
            error={error}
            isLoading={isLoading}
        />
    )
};

export default SuspensionDetailsContainer;