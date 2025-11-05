import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{}}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Todos",
          tabBarIcon: ({color: string, size: number}) => (
            <Ionicons />
          )
        }}
      />
    </Tabs>
  )
}

export default TabsLayout