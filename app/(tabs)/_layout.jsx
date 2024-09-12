import { View, Text, Image } from 'react-native'
import React from 'react'
import { Slot, Tabs, Redirect } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

const TabIcon = ({ icon, color, focused }) => {
  return (
    <View ClassName=" items-center justify-center gap-2">
      <Feather 
      name={icon} 
      size={24} 
      color={color}
       />
    </View>
  )
}

const TabsLayout = () => {
  return (
    <Tabs
    screenOptions={{
      tabBarShowLabel: false,
      // tabBarActiveTintColor: 'black', - Custom active color if primary color is not desired
      // tabBarInactiveTintColor: 'gray', - Custom inactive color if primary color is not desired
      tabBarStyle: {
        backgroundColor: 'white',
        borderTopColor: 'transparent',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#f4f4f4'
      }
    }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon="feather"
              color={color}
              focused={focused}
            />
          )
        }}
      />

<Tabs.Screen
        name="search"
        options={{
          title: 'search',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon="search"
              color={color}
              focused={focused}
            />
          )
        }}
      />
           <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon="user"
              color={color}
              focused={focused}
            />
          )
        }}
      />


    </Tabs>
  )
}

export default TabsLayout