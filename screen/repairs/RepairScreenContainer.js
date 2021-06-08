import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import RepairScreenView from "./RepairScreenView";
import Colors from "../../constants/colors";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {MaterialHeaderButton} from "../../components";
import {repairActions} from "../../store/actions/repairsActions";

const RepairScreenContainer = ({navigation, ...props}) => {
    const {
        defaultRepairs
    } = useSelector(state => state.repair);

    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    const dispatch = useDispatch();

    const loadRepairs = useCallback(async () => {
        setIsLoading(true);
        try {
            await dispatch(repairActions.getDefaultRepairs());
        } catch (err) {
            Alert.alert('Error', err.message, [{ message: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsLoading(false);

    }, [dispatch, setIsLoading, setError]);

    const repairAddHandler = repair => {
        navigation.navigate('RepairAddScreen')
    }

    const repairEditHandler = repair => {
        navigation.navigate('RepairEditScreen', {
            detailName: repair.detailName,
            price: repair.price,
            counts: repair.counts,
            carType: repair.carType
        })
    }

    const postRepairDelete = useCallback( async id => {
        setIsLoading(true);
        try {
            await dispatch(repairActions.deleteRepair(id));
        } catch (err) {
            Alert.alert('Error', err.message, [{ message: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsLoading(false);
    }, [setIsLoading, dispatch]);

    const deleteHandler = id => {
        Alert.alert('Предупреждение',
            'Удалить деталь со склада?',
            [
                {
                    text: 'Нет',
                    onPress: () => console.log('Нажали закрыть'),
                    style: 'cancel'
                },
                {
                    text: 'Да',
                    onPress: () => postRepairDelete(id)
                }
            ]
        );
    }

    useEffect(() => {
        loadRepairs();
    }, [loadRepairs]);

    useEffect(() => {
        return navigation.dangerouslyGetParent()
            .addListener('focus', () => {
                loadRepairs();
            });
    }, [navigation]);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Детали',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: Colors.white,
                fontSize: 24
            },
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
                    <Item
                        title="Delete"
                        iconName="add"
                        onPress={repairAddHandler}
                    />
                </HeaderButtons>
            )
        })
    }, [navigation]);
    return (
        <RepairScreenView
            defaultRepairs={defaultRepairs}
            loadRepairs={loadRepairs}
            error={error}
            isLoading={isLoading}
            navigation={navigation}
            deleteHandler={deleteHandler}
            editHandler={repairEditHandler}
        />
    )
}

export default RepairScreenContainer;