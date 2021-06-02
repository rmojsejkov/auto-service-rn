import React, {useEffect} from "react";
import {ActivityIndicator, Button, FlatList, Image, StyleSheet, Text, View} from "react-native";

import {HeaderToggleButton} from "../default-options";
import Colors from "../../constants/colors";
import {CustomButtonAdding, CustomButtonSearch, InputContainer} from "../../components";
import UserBlockItem from "../../components/Blocks/UserBlockItem";

const UserScreenView = ({navigation, ...props}) => {
    const {
        deleteHandler,
        editHandler,
        error,
        isLoading,
        loadUsers,
        defaultUsers
    } = props;

    if (error) {
        return (
            <View style={{...styles.screen, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{error}</Text>
                <View>
                    <Button title='Try again' color={Colors.black} onPress={() => loadUsers()}/>
                </View>
            </View>
        )
    }

    if (isLoading) {
        return (
            <View style={{...styles.screen, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    style={{width: 60, height: 60}}
                    source={require('../../assets/Gear.gif')}
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
                data={defaultUsers}
                keyExtractor={item => item.id + ''}
                numColumns={1}
                renderItem={itemData => <UserBlockItem
                    user={itemData.item}
                    deleteHandler={deleteHandler}
                    editHandler={editHandler}
                />}
                refreshing={isLoading}
                onRefresh={() => loadUsers()}
            />
        </View>
    );
};

export const userScreenOptions = navData => {
    return {
        headerTitle: 'Пользователи',
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


export default UserScreenView;