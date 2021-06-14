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
    const [serviceType, setServiceType] = useState([]);
    const [selectedServiceInputValue, setSelectedServiceInputValue] = useState('');
    const [repairInputValue, setRepairInputValue] = useState('');
    const [dateValue, setDateValue] = useState(new Date(2021, 5, 11));
    const [durationValue, setDurationValue] = useState(new Date(2021, 5, 18));

    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

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
            await dispatch(orderActions.getDefaultOrders());
            await dispatch(serviceActions.getDefaultServicesIce());
            await dispatch(suspensionActions.getDefaultServicesSuspension());
            await dispatch(electricianActions.getDefaultServicesAutoElectrician());
            await dispatch(employeeActions.getDefaultEmployees());
            await dispatch(userActions.getDefaultUsers());
            await dispatch(repairActions.getDefaultRepairs());
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

    const {
        defaultRepairs
    } = useSelector(state => state.repair)

    const {
        defaultOrders
    } = useSelector(state => state.order)

    const {
        defaultEmployees
    } = useSelector(state => state.employee)

    const {
        defaultUsers
    } = useSelector(state => state.user)

    let employeeValue = 'Иванов';
        // defaultEmployees.getRandomPosition.map(employee => employee.lastName)

    let userValue = 'roma.moiseikov@mail.ru';
        // defaultUsers.getRandomPosition.map(user => user.email)

    let price = 0;

    const postRepairAdd = useCallback( async () => {
        if (selectedServiceInputValue && selectedServiceInputValue.trim().length !== 0) {
            price += defaultServicesIce.concat(defaultServicesSuspension)
                .concat(defaultServicesAutoElectrician)
                .find(service => service.serviceName === selectedServiceInputValue)
                .price;
        }
        if (repairInputValue && repairInputValue.trim().length !== 0) {
            price += +defaultRepairs.find(repair => repair.detailName === repairInputValue)
                .price;
        }
        setIsLoading(true);


        try {
            await dispatch(orderActions.setDefaultOrder(
                dateValue.toLocaleDateString(),
                durationValue.toLocaleDateString(),
                repairInputValue,
                selectedServiceInputValue,
                employeeValue,
                userValue,
                price
            ));
        } catch (err) {
            Alert.alert('Error', err.message, [{ message: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsLoading(false);
        navigation.goBack();
    }, [
        dateValue,
        durationValue,
        repairInputValue,
        selectedServiceInputValue,
        employeeValue,
        userValue,
        price,
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
            durationValue={durationValue}

            serviceInputValue={serviceInputValue}
            repairInputValue={repairInputValue}
            selectedServiceInputValue={selectedServiceInputValue}
            price={price}

            onChangeSelected={setSelectedServiceInputValue}
            onChangeService={setServiceInputValue}
            onChangeRepair={setRepairInputValue}
            onChangeDate={onChange}
            onChangeDuration={setDurationValue}

            defaultOrders={defaultOrders}
            defaultServicesIce={defaultServicesIce}
            defaultServicesSuspension={defaultServicesSuspension}
            defaultServicesAutoElectrician={defaultServicesAutoElectrician}
            defaultRepairs={defaultRepairs}
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