import React, {useEffect} from "react";
import {Text, View, StyleSheet, FlatList, Button, ActivityIndicator, Image} from "react-native";

import { HeaderToggleButton } from "../../default-options";
import Colors from '../../../constants/colors';
import {
    ServiceBlockItem,
    InputContainer,
    CustomButtonSearch,
    CustomButtonAdding
} from '../../../components';

const ServicesScreenView = (props) => {
    const {
        error,
        isLoading,
        loadServices,
        defaultServicesIce,
        iceAddHandler,
        iceSelectHandler,
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
                data={defaultServicesIce}
                keyExtractor={item => item.id + ''}
                numColumns={1}
                renderItem={itemData => <ServiceBlockItem service={itemData.item} onSelect={iceSelectHandler.bind(this)}/>}
                refreshing={isLoading}
                onRefresh={() => loadServices()}
            />
            <View style={styles.buttonAdd}>
                <CustomButtonAdding onPress={iceAddHandler}/>
            </View>
        </View>
    );
};

export const servicesScreenOptions = navData => {
    return {
        headerTitle: 'Работа с ДВС',
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
        right: '3%',
        position: 'absolute'
    },
    buttonAdd: {
        bottom: '6%',
        position: 'absolute',
        right: '3%'
    }
});


export default ServicesScreenView;