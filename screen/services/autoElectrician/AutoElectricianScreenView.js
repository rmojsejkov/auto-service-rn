import React from "react";
import {Text, View, StyleSheet, FlatList, Button, ActivityIndicator } from "react-native";

import { HeaderToggleButton } from "../../default-options";
import Colors from '../../../constants/colors';
import {InputContainer, ServiceBlockItem} from '../../../components'

const AutoElectricianScreenView = ({navigation, ...props}) => {

    const {
        error,
        isLoading,
        loadServices,
        defaultServicesAutoElectrician
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
                renderItem={itemData => <ServiceBlockItem service={itemData.item} onSelect={() => ({})} />}
                refreshing={isLoading}
                onRefresh={() => loadServices()}
            />
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
    }
});


export default AutoElectricianScreenView;