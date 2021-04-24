import * as React from 'react';
import {View,Text} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import sideDrawer from 'components/Drawer';
import appTab from 'screens/appTab';

export const drawN = createDrawerNavigator({
    Home:{
            screen:appTab
         },
        },

         {
            contentComponent:sideDrawer 
         },

         {
             initialRouteName:'Home'
         
})