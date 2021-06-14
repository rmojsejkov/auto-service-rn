import React from 'react';
import {Button, FlatList, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import {Icon} from "react-native-elements";
import ModalSelector from 'react-native-modal-selector-searchable';
import DateTimePicker from '@react-native-community/datetimepicker';

import Colors from '../../../constants/colors';

const toSelectorItem = service => (({key: service.id, label: service.serviceName}));

const OrderAddScreen = ({navigation, ...props}) => {
    const {
        serviceType,
        setServiceType,
        dateValue,
        durationValue,
        show,
        serviceInputValue,
        selectedServiceInputValue,
        repairInputValue,
        showDatepicker,

        defaultServicesIce,
        defaultServicesSuspension,
        defaultServicesAutoElectrician,
        defaultRepairs,

        onChangeDate,
        onChangeDuration,
        onChangeService,
        onChangeSelected,
        onChangeRepair,

        error,
        isLoading,
    } = props;

    const year = dateValue.getFullYear();
    const month = dateValue.getMonth();
    const day = dateValue.getDate();

    const addedDate = new Date(year, month, day  + 7)

    const selector = {
        ['ДВС']: () => defaultServicesIce.map(service => toSelectorItem(service)),
        ['Подвеска']: () => defaultServicesSuspension.map(service => toSelectorItem(service)),
        ['Электрика']: () => defaultServicesAutoElectrician.map(service => toSelectorItem(service)),
        DEFAULT: () => console.log('Not service case')
    }

    const repairs = defaultRepairs.map(repair => ({key: repair.id, label: repair.detailName}))

    let index = 0;
    const chooseService = [
        { key: index++, section: true, label: 'Направления услуг' },
        { key: index++, label: 'ДВС' },
        { key: index++, label: 'Подвеска' },
        { key: index++, label: 'Электрика'}
    ];

    if (error) {
        return (
            <View style={{...styles.screen, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{error}</Text>
                <View>
                    <Button title='Try again' color={Colors.black} onPress={() => ({})}/>
                </View>
            </View>
        )
    }

    if (isLoading) {
        return (
            <View style={{...styles.screen, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    style={{width: 60, height: 60}}
                    source={require('../../../assets/Gear.gif')}
                />
            </View>
        )
    }

    let price = 0;

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

    return(
        <View style={styles.screen}>
            <View style={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.serviceTitle}
                >
                    <Icon
                        color={Colors.black}
                        name='wrench'
                        type='foundation'
                        size={40}
                        style={styles.icon}
                    />
                    <ModalSelector
                        data={chooseService}
                        initValue="Выберите направление"
                        onChange={(option)=> {
                            setServiceType(selector[option.label] || selector.DEFAULT);
                            onChangeService(option.label);
                        }}
                        searchText='Поиск'
                        cancelText='Закрыть'
                        style={{width: '80%', marginBottom: '3%'}}
                    >
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: '#ccc',
                                padding: 10,
                                height: 40,
                                borderRadius: 6,
                                textAlign: 'center'
                            }}
                            value={serviceInputValue}
                            placeholder="Выберите направление"
                        />
                    </ModalSelector>
                    <ModalSelector
                        data={serviceType}
                        initValue="Выберите услугу"
                        onChange={(service)=> onChangeSelected(service.label)}
                        searchText='Поиск услуги'
                        cancelText='Закрыть'
                        style={{width: '80%'}}
                    >
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: '#ccc',
                                padding: 10,
                                height: 40,
                                borderRadius: 6,
                                textAlign: 'center'
                            }}
                            placeholder="Выберите услугу"
                            value={selectedServiceInputValue}
                        />
                    </ModalSelector>
                </KeyboardAvoidingView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.repairTitle}
                >
                    <Icon
                        color={Colors.black}
                        name='gear'
                        type='font-awesome'
                        size={40}
                        style={styles.icon}
                    />
                    <ModalSelector
                        data={repairs}
                        initValue="Выберите деталь"
                        onChange={(repair)=> onChangeRepair(repair.label)}
                        searchText='Поиск услуги'
                        cancelText='Закрыть'
                        style={{width: '80%'}}
                    >
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: '#ccc',
                                padding: 10,
                                height: 40,
                                borderRadius: 6,
                                textAlign: 'center'
                            }}
                            placeholder="Выберите деталь"
                            value={repairInputValue}
                        />
                    </ModalSelector>
                </KeyboardAvoidingView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.calendar}
                >
                    <Icon
                        color={Colors.black}
                        name='calendar'
                        type='entypo'
                        size={40}
                        style={styles.icon}
                        onPress={showDatepicker}
                    />
                    <View>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={dateValue}
                                mode='datetime'
                                is24Hour={true}
                                display="default"
                                onChange={onChangeDate}
                                minimumDate={new Date()}
                            />
                        )}
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: '#ccc',
                                padding: 10,
                                height: 40,
                                borderRadius: 6,
                                textAlign: 'center',
                                marginTop: '4%',
                                paddingHorizontal: '20%',
                                // width: '80%'
                            }}
                            placeholder="Дата заказа"
                            value={'Дата заказа: ' + dateValue.toLocaleDateString()}
                            editable={false}
                        />
                    </View>
                </KeyboardAvoidingView>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.calendar}
                >
                    <TextInput
                        style={{
                            borderWidth: 1,
                            borderColor: '#ccc',
                            // padding: 10,
                            height: 40,
                            borderRadius: 6,
                            marginTop: '4%',
                            textAlign: 'center',
                            width: '80%'
                            // paddingHorizontal: '20%',
                        }}
                        placeholder={"Дата выполнения заказа: "}
                        value={"Дата выполнения заказа: " + addedDate.toLocaleDateString()}
                        editable={false}
                        onChange={onChangeDuration}
                    />
                </KeyboardAvoidingView>
                <View style={styles.priceContainer}>
                    <Text style={{fontSize: 20}}>Цена заказа: {price} р.</Text>
                </View>
            </View>
        </View>
    );
};

export const orderAddScreenOptions = navData => {
    return {
        headerTitle: 'Добавление сотрудника',
    }
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.white,
        flex: 1
    },
    container: {
        alignItems: 'center',
        marginTop: '2%',
        paddingVertical: '20%',
        // borderWidth: 2,
        // flex: 1,
        backgroundColor: Colors.white

    },
    weatherText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    weatherContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameTitle: {
        bottom: '3%',
        alignItems: 'center',
        width: '100%',
        // height: '13%',
        // borderWidth: 2,
        marginBottom: '40%',
        flexDirection: 'row',
        paddingLeft: '7%',
    },
    calendar: {
        // paddingLeft: '6%',
        alignItems: 'center',
        width: '100%',
        // marginBottom: '6%',
        // flexDirection: 'row',
        bottom: '21%'
    },
    repairTitle: {
        // paddingLeft: '6%',
        alignItems: 'center',
        width: '100%',
        marginBottom: '6%',
        // flexDirection: 'row',
        bottom: '19%'
    },
    serviceTitle: {
        // paddingLeft: '6%',
        alignItems: 'center',
        width: '100%',
        marginBottom: '6%',
        // flexDirection: 'row',
        bottom: '15%'
    },
    titleText: {
        fontSize: 19,
        fontWeight: 'bold',
        left: '5%'

    },
    icon: {
        padding: '3%'
    },
    priceContainer: {
        // marginVertical: '30%'
    }
});

export default OrderAddScreen;