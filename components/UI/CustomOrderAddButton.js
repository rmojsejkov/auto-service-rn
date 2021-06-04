import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import {FontAwesome5} from '@expo/vector-icons';

const CustomHeaderButton = props => {
    return (
        <HeaderButton
            {...props}
            IconComponent={FontAwesome5}
            iconSize={23}
            color={'white'}
        />
    );
};

export default CustomHeaderButton;
