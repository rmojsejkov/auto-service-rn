import React, {useCallback, useEffect, useState} from "react";

import RepairAddScreen from "./RepairAddScreen";
import Colors from '../../../constants/colors';
import {StyleSheet, Alert} from "react-native";

import {useDispatch} from "react-redux";
import {MaterialHeaderButton} from "../../../components";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {repairActions} from "../../../store/actions/repairsActions";

const RepairAddContainer = ({ navigation, route, ...props }) => {

    const [detailNameInputValue, setDetailNameInputValue] = useState('');
    const [priceInputValue, setPriceInputValue] = useState('');
    const [countsInputValue, setCountsInputValue] = useState('');
    const [carTypeInputValue, setCarTypeInputValue] = useState('');

    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const warehouseId = 1;

    const dispatch = useDispatch();

    const postRepairAdd = useCallback( async () => {
        console.log('click save');

        setIsLoading(true);
        try {
            await dispatch(repairActions.setDefaultRepair(
                detailNameInputValue,
                priceInputValue,
                countsInputValue,
                carTypeInputValue,
                warehouseId
            ));
        } catch (err) {
            Alert.alert('Error', err.message, [{ message: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsLoading(false);
        navigation.goBack();
    }, [
        detailNameInputValue,
        priceInputValue,
        countsInputValue,
        carTypeInputValue,
        dispatch
    ]);

    const addHandler = () => {
        Alert.alert('Предупреждение',
            'Добавить деталь?',
            [
                {
                    text: 'Нет',
                    onPress: () => console.log('Нажали закрыть'),
                    style: 'cancel'
                },
                {
                    text: 'Да',
                    onPress: () => postRepairAdd()
                }
            ]
        );
    }

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Добавить деталь',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: Colors.white,
                fontSize: 22
            },
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
                    <Item
                        title="Save"
                        iconName="save"
                        onPress={addHandler.bind(this)}
                    />
                </HeaderButtons>
            )
        })
    }, [navigation, postRepairAdd]);

    return (
        <RepairAddScreen
            error={error}
            isLoading={isLoading}
            detailNameInputValue={detailNameInputValue}
            priceInputValue={priceInputValue}
            countsInputValue={countsInputValue}
            carTypeInputValue={carTypeInputValue}
            onChangeDetailName={setDetailNameInputValue}
            onChangePrice={setPriceInputValue}
            onChangeCounts={setCountsInputValue}
            onChangeCarType={setCarTypeInputValue}
        />
    )
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginHorizontal: 6,
        borderColor: Colors.signInBorder,
    }
})

export default RepairAddContainer;