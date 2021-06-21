import React, {useEffect} from "react";
import {Text, View, StyleSheet} from "react-native";

import {HeaderToggleButton} from "../default-options";

import Colors from "../../constants/colors";

const AboutScreenView = ({navigation, ...props}) => {
    return (
        <View>
            <View>
                <View style={{
                    alignItems: 'center',
                    paddingVertical: '4%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: '5%'
                }}>
                    <View>
                        <Text style={{
                            fontSize: 18,
                            color: Colors.splash,
                            fontWeight: 'bold'
                        }}
                        >ВРЕМЯ РАБОТЫ</Text>
                        <Text style={{
                            fontSize: 20,
                            color: Colors.red,
                        }}>с 8:00 до 20:00</Text>
                        <Text style={{
                            fontSize: 18,
                            color: Colors.splash,
                            fontWeight: 'bold'
                        }}>без выходных</Text>
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 22,
                            color: Colors.red,
                            fontWeight: 'bold'
                        }}>(29) 118 73 00</Text>
                        <Text style={{
                            fontSize: 22,
                            color: Colors.red,
                            fontWeight: 'bold'
                        }}>(29) 325 02 21</Text>
                    </View>
                </View>
                <View style={{
                    // backgroundColor: Colors.white,
                    // borderRadius: 20,
                    borderColor: Colors.black,
                    width: '90%',
                    marginLeft: '5%',

                }}>
                    <Text style={styles.text}>
                        Наш автосервис оснащен современным, оборудованием европейского и американского производства.
                        Мы производим качественные работы в следующих направлениях:
                        <Text style={{fontWeight: 'bold'}}> Работа с ДВС</Text>,
                        <Text style={{fontWeight: 'bold'}}> работа с подвеской</Text> и
                        <Text style={{fontWeight: 'bold'}}> работа по электрике автомобиля!</Text>
                    </Text>
                </View>
            </View>
        </View>
    )
};

export const aboutScreenOptions = navData => {
    return {
        headerTitle: 'О нас',
        headerLeft: () => (
            <HeaderToggleButton navData={navData} />
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 19,
        alignItems: 'center',
        paddingHorizontal: '1%',
        // paddingVertical: '5%',
        // borderWidth: 1,
        // borderRadius: 20,
        elevation: 2

    }
})

export default AboutScreenView;