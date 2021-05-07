import React, {useEffect} from "react";
import {Text, View} from "react-native";

import {HeaderToggleButton} from "../default-options";

const EmployeeScreenView = ({navigation, ...props}) => {
    return (
        <View>
            <Text>Employees screen!</Text>
        </View>
    )
};

export const employeeScreenOptions = navData => {
    return {
        headerTitle: 'Employees',
        headerLeft: () => (
            <HeaderToggleButton navData={navData} />
        )
    }
}


export default EmployeeScreenView;