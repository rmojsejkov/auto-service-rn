import React, {useCallback, useEffect, useState} from "react";

import OrderAddScreen from "./OrderAddScreen";
import Colors from '../../../constants/colors';
import {StyleSheet, Alert, Platform} from "react-native";

import {useDispatch, useSelector} from "react-redux";
import {employeeActions} from "../../../store/actions/employeesActions";
import {MaterialHeaderButton} from "../../../components";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {orderActions} from "../../../store/actions/ordersActions";
import {electricianActions, serviceActions, suspensionActions} from "../../../store/actions/servicesActions";
import {userActions} from "../../../store/actions/usersActions";
import {repairActions} from "../../../store/actions/repairsActions";

const OrderAddContainer = ({ navigation, route, ...props }) => {

    const [serviceInputValue, setServiceInputValue] = useState('');
    const [dateValue, setDateValue] = useState(new Date(2021, 5, 9));

    const [serviceType, setServiceType] = useState([]);

    const [surNameInputValue, setSurNameInputValue] = useState('');
    const [emailInputValue, setEmailInputValue] = useState('');
    const [phoneInputValue, setPhoneInputValue] = useState('');
    const [passInputValue, setPassInputValue] = useState('');

    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const roleId = 3;

    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || dateValue;
        setShow(Platform.OS === 'ios');
        setDateValue(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const dispatch = useDispatch();

    const loadAllDates = useCallback(async () => {
        setIsLoading(true);
        try {
            await dispatch(serviceActions.getDefaultServicesIce());
            await dispatch(suspensionActions.getDefaultServicesSuspension());
            await dispatch(electricianActions.getDefaultServicesAutoElectrician());
            await dispatch(employeeActions.getDefaultEmployees());
            await dispatch(userActions.getDefaultUsers());
        } catch (err) {
            Alert.alert('Error', err.message, [{ message: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsLoading(false);
    }, [dispatch]);

    useEffect(() => {
        loadAllDates();
    }, [loadAllDates]);


    const {
        defaultServicesIce,
        defaultServicesSuspension,
        defaultServicesAutoElectrician
    } = useSelector(state => state.service);

    const postRepairAdd = useCallback( async () => {
        console.log('click save');

        setIsLoading(true);
        try {
            await dispatch(repairActions.setDefaultRepair(
                orderDateInputValue,
                durationInputValue,
                detailInputValue,
                serviceInputValue
            ));
        } catch (err) {
            Alert.alert('Error', err.message, [{ message: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsLoading(false);
        navigation.goBack();
    }, [
        surNameInputValue,
        emailInputValue,
        phoneInputValue,
        passInputValue,
        setIsLoading,
        dispatch
    ]);

    const addHandler = () => {
        Alert.alert('Предупреждение',
            'Добавить заказ?',
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
            headerTitle: 'Создать заказ',
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
        <OrderAddScreen
            error={error}
            isLoading={isLoading}
            dateValue={dateValue}
            surNameInputValue={surNameInputValue}
            emailInputValue={emailInputValue}
            phoneInputValue={phoneInputValue}
            passInputValue={passInputValue}
            serviceInputValue={serviceInputValue}

            onChangeService={setServiceInputValue}
            onChangeDate={onChange}
            onChangeSurName={setSurNameInputValue}
            onChangeEmail={setEmailInputValue}
            onChangePhone={setPhoneInputValue}
            onChangePass={setPassInputValue}

            defaultServicesIce={defaultServicesIce}
            defaultServicesSuspension={defaultServicesSuspension}
            defaultServicesAutoElectrician={defaultServicesAutoElectrician}
            serviceType={serviceType}
            setServiceType={setServiceType}
            loadAllDates={loadAllDates}
            showDatepicker={showDatepicker}
            mode={mode}
            show={show}
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

export default OrderAddContainer;