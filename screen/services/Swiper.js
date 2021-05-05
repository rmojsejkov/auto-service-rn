import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Swiper from 'react-native-swiper';

const SwiperData = props => {
    return(
        <View style={styles.container}>
            <Swiper showsButtons={true}>
                <View style={styles.container}>
                    <Image
                        source={ require('../../assets/swiperPhoto/Image1.jpg') }
                    />
                </View>

                <View style={styles.container} >
                    <Image
                        source={ require('../../assets/swiperPhoto/Image2.jpg') }
                    />
                </View>

                <View style={styles.container}>
                    <Image
                        source={ require('../../assets/swiperPhoto/Image3.jpg') }
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
