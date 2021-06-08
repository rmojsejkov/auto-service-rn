import React, {useCallback, useEffect, useState} from "react";

import RepairEditScreen from "./RepairEditScreen";
import Colors from '../../../constants/colors';
import {Alert} from "react-native";

import {useDispatch} from "react-redux";
import {MaterialHeaderButton} from "../../../components";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {repairActions} from "../../../store/actions/repairsActions";

const RepairEditContainer = ({ navigation, route, ...props }) => {
    const {
        id,
        detailName,
        price,
        counts,
        carType
    } = route.params;

    const [detailNameInputValue, setDetailNameInputValue] = useState(detailName);
    const [priceInputValue, setPriceInputValue] = useState(price);
    const [countsInputValue, setCountsInputValue] = useState(counts);
    const [carTypeInputValue, setCarTypeInputValue] = useState(carType);

    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const dispatch = useDispatch();

    const postRepairEdit = useCallback( async () => {
        console.log('click save');

        setIsLoading(true);
        try {
            await dispatch(repairActions.editRepair(
                id,
                detailNameInputValue,
                priceInputValue,
                countsInputValue,
                carTypeInputValue
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
        setIsLoading,
        dispatch
    ]);

    const editHandler = () => {
        Alert.alert('Предупреждение',
            'Сохранить изменения?',
            [
                {
                    text: 'Нет',
                    onPress: () => console.log('Нажали закрыть'),
                    style: 'cancel'
                },
                {
                    text: 'Да',
                    onPress: () => postRepairEdit()
                }
            ]
        );
    }

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Редактирование',
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
                        onPress={editHandler.bind(this)}
                    />
                </HeaderButtons>
            )
        })
    }, [navigation, postRepairEdit]);

    return (
        <RepairEditScreen
            detailName={detailName}
            price={price}
            counts={counts}
            carType={carType}
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

export default RepairEditContainer;