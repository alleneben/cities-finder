import React from 'react';


import AddCity from './addcity/addcity';
import City from './cities/city';
import Cities from './cities/cities';



import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { colors } from './theme';


const CitiesNav = createStackNavigator({
    Cities: { 
        screen: Cities,
        navigationOptions: {
            headerStyle: {
                backgroundColor: colors.primary
            },
            headerTintColor: colors.white
        } 
    },
    City: { screen: City}
})

const Tabs = createBottomTabNavigator({
    AddCity: { screen: AddCity },
    Cities: { screen: CitiesNav}
})

export default createAppContainer(Tabs)
