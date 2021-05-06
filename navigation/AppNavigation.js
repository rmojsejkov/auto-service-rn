import React from "react";
import {NavigationContainer} from "@react-navigation/native";

import {AutoServiceNavigator} from "./AutoServiceNavigation"

const AppNavigator = props => {
    return (
        <NavigationContainer>
            <AutoServiceNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator;