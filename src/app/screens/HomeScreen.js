import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from './homescreen/Home'
import Detail from './homescreen/Detail'
import Book from './homescreen/Book'
import Profile from '../components/Profile'
import SignUp from '../components/SignUp'

const Stack = createNativeStackNavigator()

const HomeScreen = () => {
  return (
    <Stack.Navigator
        initialRouteName='home'
        screenOptions={{
            headerShadowVisible:true
        }}
    >
      <Stack.Screen name='home' component={Home}/>
      <Stack.Screen name='detail' component={Detail}/>
      <Stack.Screen name='book' component={Book}/>
    </Stack.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})