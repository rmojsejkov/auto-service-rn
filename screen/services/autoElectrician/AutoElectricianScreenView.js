import React from "react";
import {Text, View, StyleSheet, FlatList, Button, ActivityIndicator, Image} from "react-native";

import { HeaderToggleButton } from "../../default-options";
import Colors from '../../../constants/colors';
import {
    CustomButtonAdding,
    CustomButtonSearch,
    InputContainer,
    ServiceBlockItem
} from '../../../components'

/**
 * Компонент, отвечающий за отображение главного экрана услуг по электрике
 * @param navigation
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const AutoElectricianScreenView = ({navigation, ...props}) => {

    const {
        error,
        isLoading,
        loadServices,
        defaultServicesAutoElectrician,
        electricianAddHandler,
        electricianSelectHandler
    } = props;

    if (error) {
        return (
            <View style={{...styles.screen, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{error}</Text>
                <View>
                    <Button title='Try again' color={Colors.black} onPress={() => loadServices()}/>
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

    return (
        <View style={styles.screen}>
            <View>
                <InputContainer />
            </View>
            <FlatList
                data={defaultServicesAutoElectrician}
                keyExtractor={item => item.id + ''}
                numColumns={1}
                renderItem={itemData => <ServiceBlockItem service={itemData.item} onSelect={electricianSelectHandler.bind(this)} />}
                refreshing={isLoading}
                onRefresh={() => loadServices()}
            />
            <View style={styles.buttonAdd}>
                <CustomButtonAdding onPress={electricianAddHandler}/>
            </View>
        </View>
    );
};
/**
 * Функция, отображающая заголовок хэдера экрана услуг по электрике
 * @param navData
 * @returns {{headerLeft: (function()), headerTitle: string}}
 */
export const autoElectricianScreenOptions = navData => {
    return {
        headerTitle: 'Автоэлектрика / тормоза',
        headerLeft: () => (
            <HeaderToggleButton navData={navData} />
        )
    }
}
/**
 * Стили экрана
 * @type {{buttonSearch: {left: string, bottom: string}, screen: {flex: number}, buttonAdd: {left: string, bottom: string}}}
 */
const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    buttonSearch: {
        bottom: '15%',
        left: '3%'
    },
    buttonAdd: {
        bottom: '6%',
        left: '2%'
    }
});


export default AutoElectricianScreenView;