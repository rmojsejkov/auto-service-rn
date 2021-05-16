import React from "react";
import { Image, SafeAreaView, StyleSheet, View, Text, Button } from "react-native";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";

import Colors from '../constants/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SignInButton, SignUpButton } from "../components";

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
                        <View style={styles.container}>
                            <View style={styles.buttonIn}>
                                <SignInButton />
                            </View>
                            <View style={styles.buttonUp}>
                                {/*<SignUpButton />*/}
                            </View>
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
                    drawerLabel: 'Главная',
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
                    drawerLabel: 'Услуги',
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
                    drawerLabel: 'Сотрудники',
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
                    drawerLabel: 'Контакты',
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
                    drawerLabel: 'Цены',
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
    container: {
        // borderWidth: 1,
        height: '9%'
    },
    drawer: {
        flex: 1,
        paddingTop: 30
    },
    imageContainer: {
        width: '37%',
        alignItems: 'center',
        // paddingTop: '90%',
        // borderWidth: 0.1,
        // borderRadius: 90,
        top: '90%',
        left: '30%',
        // elevation: 3
    },
    image: {
        width: 100,
        height: 100
    },
    buttonUp: {
        alignItems: 'center',
        // paddingTop: 10,
        // ----------------
        // margin: 6,
        //-----------------
        // paddingVertical: 10,
        bottom: 60,
        paddingLeft: '50%'
    },
    buttonIn: {
        alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: '2%',
        margin: 10,
        // borderWidth: 3,
        paddingVertical: 10,
        paddingRight: '70%'

    }
});