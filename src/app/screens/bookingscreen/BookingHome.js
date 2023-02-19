import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import BookingCard from '../../components/BookingCard'

const BookingHome = ({navigation}) => {
  useEffect(()=>{
    navigation.setOptions({
      headerTitle:"Your Bookings",
      headerTitleStyle:{
        
        fontWeight:"600",
      },
      
    })
  },[])

  return (
    <ScrollView style={styles.container}>
      <BookingCard navigation={navigation} />
      <BookingCard navigation={navigation} />
      <BookingCard navigation={navigation} />
      <BookingCard navigation={navigation} />
      <BookingCard navigation={navigation} />
    </ScrollView>
  )
}

export default BookingHome

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#eeeeee",
    padding:10
  }
})