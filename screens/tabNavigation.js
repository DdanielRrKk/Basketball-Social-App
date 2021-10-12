import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign } from '@expo/vector-icons';

import FeedScreen from './homeScreens/feedScreen';
import SearchScreen from './searchScreens/searchScreen';
import PlayScreen from './playScreens/playScreen';
import EventScreen from './eventScreens/eventScreen';
import ProfileScreen from './profileScreens/profileScreen';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return(
        <Tab.Navigator initialRouteName='FeedScreen'>
            <Tab.Screen 
                name='FeedScreen' 
                component={FeedScreen} 
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({color}) => (
                        <AntDesign 
                            name="home" 
                            size={24} 
                            color={color} />
                    ),
                    }}/>
            <Tab.Screen 
                name='SearchScreen' 
                component={SearchScreen} 
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({color}) => (
                        <AntDesign 
                            name="search1" 
                            size={24} 
                            color={color} />
                    ),
                    }}/>
            <Tab.Screen 
                name='PlayScreen' 
                component={PlayScreen} 
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({color}) => (
                        <AntDesign 
                            name="barschart" 
                            size={24} 
                            color={color} />
                    ),
                    }}/>
            <Tab.Screen 
                name='EventScreen' 
                component={EventScreen} 
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({color}) => (
                        <AntDesign 
                            name="calendar" 
                            size={24} 
                            color={color} />
                    ),
                    }}/>
            <Tab.Screen 
                name='ProfileScreen' 
                component={ProfileScreen} 
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({color}) => (
                        <AntDesign 
                            name="user" 
                            size={24} 
                            color={color} />
                    ),
                    }}/>
        </Tab.Navigator>
    );
}