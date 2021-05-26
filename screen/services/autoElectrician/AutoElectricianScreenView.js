import React from "react";
import {Text, View, StyleSheet, FlatList, Button, ActivityIndicator } from "react-native";

import { HeaderToggleButton } from "../../default-options";
import Colors from '../../../constants/colors';
import {
    CustomButtonAdding,
    CustomButtonSearch,
    InputContainer,
    ServiceBlockItem
} from '../../../components'

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
                <ActivityIndicator size='large' color={Colors.black} />
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
            <View style={styles.buttonSearch}>
                <CustomButtonSearch />
            </View>
            <View style={styles.buttonAdd}>
                <CustomButtonAdding onPress={electricianAddHandler}/>
            </View>
        </View>
    );
};

export const autoElectricianScreenOptions = navData => {
    return {
        headerTitle: 'Автоэлектрика / тормоза',
        headerLeft: () => (
            <HeaderToggleButton navData={navData} />
        )
    }
}

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