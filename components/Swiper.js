import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Swiper from 'react-native-swiper';

const SwiperData = props => {
    return(
        <View style={styles.container}>
            <Swiper showsButtons={true}>
                <View style={styles.container}>
                    <Image
                        style={{ width: "100%", height: "100%" }}
                        source={ require('../assets/swiperPhoto/Image1.png') }
                    />
                </View>

                <View style={styles.container} >
                    <Image
                        style={{ width: "100%", height: "100%" }}
                        source={ require('../assets/swiperPhoto/Image2.jpg') }
                    />
                </View>

                <View style={styles.container}>
                    <Image
                        style={{ width: "100%", height: "100%" }}
                        source={ require('../assets/swiperPhoto/Image3.jpg') }
                    />
                </View>

            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default SwiperData;
