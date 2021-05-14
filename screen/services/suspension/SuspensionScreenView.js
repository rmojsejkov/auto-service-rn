import React, { useEffect } from "react";
import {Text, View, StyleSheet, FlatList, Button, ActivityIndicator } from "react-native";

import { HeaderToggleButton } from "../../default-options";
import Colors from '../../../constants/colors';
import {InputContainer, ServiceBlockItem} from '../../../components'


const SuspensionScreenView = ({navigation, ...props}) => {

    const {
        error,
        isLoading,
        loadServices,
        defaultServicesSuspension
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
                data={defaultServicesSuspension}
                keyExtractor={item => item.id + ''}
                numColumns={1}
                renderItem={itemData => <ServiceBlockItem service={itemData.item} onSelect={() => ({})} />}
                refreshing={isLoading}
                onRefresh={() => loadServices()}
            />
        </View>
    );
};

export const suspensionScreenOptions = navData => {
    return {
        headerTitle: 'Работа с подвеской',
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


export default SuspensionScreenView;