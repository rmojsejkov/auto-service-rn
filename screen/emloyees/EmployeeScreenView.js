import React, {useEffect} from "react";
import {ActivityIndicator, Button, FlatList, StyleSheet, Text, View} from "react-native";

import {HeaderToggleButton} from "../default-options";
import Colors from "../../constants/colors";
import {CustomButtonAdding, CustomButtonSearch, InputContainer, ServiceBlockItem} from "../../components";
import EmployeeBlockItem from "../../components/Blocks/EmployeeBlockItem";

const EmployeeScreenView = ({navigation, ...props}) => {
    const {
        error,
        isLoading,
        loadEmployees,
        defaultEmployees
    } = props;

    if (error) {
        return (
            <View style={{...styles.screen, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{error}</Text>
                <View>
                    <Button title='Try again' color={Colors.black} onPress={() => loadEmployees()}/>
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
                data={defaultEmployees}
                keyExtractor={item => item.id + ''}
                numColumns={1}
                renderItem={itemData => <EmployeeBlockItem employee={itemData.item} onSelect={() => ({})}/>}
                refreshing={isLoading}
                onRefresh={() => loadEmployees()}
            />
        </View>
    );
};

export const employeeScreenOptions = navData => {
    return {
        headerTitle: 'Сотрудники',
        headerLeft: () => (
            <HeaderToggleButton navData={navData} />
        )
    }
};

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


export default EmployeeScreenView;