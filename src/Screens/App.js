import React from "react";
import  {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { Dimensions } from "react-native";
import {Feather} from '@expo/vector-icons';
import { 
    ProfileScreen,
    MessageScreen,
    ActivityScreen,
    ListScreen,
    ReportScreen,
    StatisticScreen,
    SingOutScreen 
} from "./Screens";

const DrawerNavigation = createDrawerNavigator({
    ProfileScreen,
    MessageScreen,
    ActivityScreen,
    ListScreen,
    ReportScreen,
    StatisticScreen,
    SingOutScreen
})

export default createAppContainer(DrawerNavigation);