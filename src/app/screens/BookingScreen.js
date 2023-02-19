import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import BookingHome from './bookingscreen/BookingHome'
import BookingDetail from './bookingscreen/BookingDetail'

const Stack = createNativeStackNavigator()

const BookingScreen = () => {
  return (
    <Stack.Navigator
        initialRouteName='book-home'
        screenOptions={{
            headerShadowVisible:true
        }}
    >
      <Stack.Screen name='book-home' component={BookingHome}/>
      <Stack.Screen name='book-detail' component={BookingDetail}/>
    </Stack.Navigator>
)}

export default BookingScreen

const styles = StyleSheet.create({})