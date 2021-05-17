import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Swiper from 'react-native-swiper';
import Colors from '../constants/colors';

const SwiperData = props => {

    return(
        <View style={styles.container}>
            <Swiper
                showsButtons={true}
                selectionColor={{backgroundColor: Colors.white}}
                // style={{backgroundColor: Colors.red}}
                showPagination={true}
                autoplay={true}
                animated={true}
            >
                <View style={styles.container}>
                    <Image
                        style={{ width: "100%", height: "100%" }}
                        source={ require('../assets/swiperPhoto/Image1.png') }
                    />
                </View>

                <View style={styles.container} >
                    <Image
                        style={{ width: "100%", height: "100%" }}
                        source={ require('../assets/swiperPhoto/Image2.png') }
                    />
                </View>

                <View style={styles.container}>
                    <Image
                        style={{ width: "100%", height: "100%" }}
                        source={ require('../assets/swiperPhoto/Image3.png') }
                    />
                </View>

                <View style={styles.container}>
                    <Image
                        style={{ width: "100%", height: "100%" }}
                        source={ require('../assets/swiperPhoto/Image4.png') }
                    />
                </View>

                <View style={styles.container}>
                    <Image
                        style={{ width: "100%", height: "100%" }}
                        source={ require('../assets/swiperPhoto/Image5.png') }
                    />
                </View>
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Colors.red
    },
    WrapperStyle: {
        // backgroundColor: Colors.red
    },
    // nextButton: {
    //     backgroundColor: Colors.red
    // }
});

export default SwiperData;
