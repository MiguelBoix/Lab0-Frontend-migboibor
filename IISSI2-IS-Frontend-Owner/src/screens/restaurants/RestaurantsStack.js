
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import RestaurantDetailScreen from './RestaurantDetailScreen'
import RestaurantsScreen from './RestaurantsScreen'

const Stack = createNativeStackNavigator()

export default function RestaurantsStack () {
  return (
        <Stack.Navigator>
            <Stack.Screen
                name='RestaurantsScreen'
                component={RestaurantsScreen} />
            <Stack.Screen
                name='RestaurantDetailScreen'
                component={RestaurantDetailScreen} />
        </Stack.Navigator>
  )
}