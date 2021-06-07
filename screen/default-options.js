import React from "react";
import {MaterialHeaderButton} from "../components/UI";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

/**
 * Компонент, отвечающий за отображение кнопки меню на хэдэре
 * @param navData
 * @returns {JSX.Element}
 * @constructor
 */
export const HeaderToggleButton = ({navData}) => {
    return (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
            <Item
                title="Menu"
                iconName="menu"
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>
    )
}