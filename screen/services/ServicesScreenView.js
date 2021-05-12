import React from "react";
import {Text, View, StyleSheet, FlatList, Button, ActivityIndicator } from "react-native";

import {HeaderToggleButton} from "../default-options";
import Colors from '../../constants/colors';
import { ServiceBlockItem } from '../../components/Blocks'

const ServicesScreenView = ({navigation, ...props}) => {

    const {
        error,
        isLoading,
        loadServices,
        defaultServices
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
            <FlatList
                data={defaultServices}
                keyExtractor={item => item.id + ''}
                numColumns={1}
                renderItem={itemData => <ServiceBlockItem service={itemData.item} onSelect={() => ({})} />}
                refreshing={isLoading}
                onRefresh={() => loadServices()}
            />
        </View>
    );
};

export const servicesScreenOptions = navData => {
    return {
        headerTitle: 'Services',
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


export default ServicesScreenView;