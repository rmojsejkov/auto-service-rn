import React from "react";
import { Image, SafeAreaView, StyleSheet, View, Text, Button } from "react-native";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";

import Colors from '../constants/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
    HomeNavigator,
    AboutNavigator,
    EmployeeNavigator,
    PriceNavigator,
    ServicesNavigator
} from './navigators';

const AutoServiceDrawerNavigator = createDrawerNavigator();

export const AutoServiceNavigator = () => {
    return (
        <AutoServiceDrawerNavigator.Navigator
            drawerContent={props => {
                return (
                    <View style={styles.drawer}>
                        <View style={styles.button}>
                            <Button title='Button' color={Colors.red} onPress={() => ({})} />
                        </View>
                        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                            <DrawerItemList {...props} />
                            <View style={styles.imageContainer}>
                                <Image
                                    borderRadius={50}
                                    style={styles.image}
                                    source={require("../assets/new-icon.png")} />
                            </View>
                        </SafeAreaView>
                    </View>
                )
            }}
            drawerContentOptions={{
                activeTintColor: Colors.primary
            }}
        >
            <AutoServiceDrawerNavigator.Screen 
                name="Home"
                component={HomeNavigator}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: props => (
                        <MaterialCommunityIcons
                            name="home"
                            size={23}
                            color={Colors.splash}
                        />
                    )
                }}
            />
            <AutoServiceDrawerNavigator.Screen 
                name="Services"
                component={ServicesNavigator}
                options={{
                    drawerLabel: 'Services',
                    drawerIcon: props => (
                        <MaterialCommunityIcons
                            name="wrench"
                            size={23}
                            color={Colors.splash}
                        />
                    )
                }}
            />
            <AutoServiceDrawerNavigator.Screen
                name="Employee"
                component={EmployeeNavigator}
                options={{
                    drawerLabel: 'Employees',
                    drawerIcon: props => (
                        <MaterialCommunityIcons
                            name="account-cog"
                            size={23}
                            color={Colors.splash}
                        />
                    )
                }}
            />
            <AutoServiceDrawerNavigator.Screen 
                name="About"
                component={AboutNavigator}
                options={{
                    drawerLabel: 'About',
                    drawerIcon: props => (
                        <MaterialCommunityIcons
                            name="newspaper-variant-multiple"
                            size={23}
                            color={Colors.splash}
                        />
                    )
                }}
            />
            <AutoServiceDrawerNavigator.Screen
                name="Prices"
                component={PriceNavigator}
                options={{
                    drawerLabel: 'Prices',
                    drawerIcon: props => (
                        <MaterialCommunityIcons
                            name="cash-multiple"
                            size={23}
                            color={Colors.splash}
                        />
                    )
                }}
            />
        </AutoServiceDrawerNavigator.Navigator>
    )
}

const styles = StyleSheet.create({
    drawer: {
        flex: 1,
        paddingTop: 30
    },
    imageContainer: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 300
    },
    image: {
        width: 80,
        height: 80
    },
    button: {
        alignItems: 'center'

    }
});