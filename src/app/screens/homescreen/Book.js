import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import BookingForm from '../../components/BookingForm'

const Book = ({navigation}) => {
  useEffect(()=>{
    navigation.setOptions({
      title:"Book your place"
    })
  })

  return (
    <View style={styles.container}> 
      <BookingForm />
    </View>
  )
}

export default Book

const styles = StyleSheet.create({
  container:{
    padding:10
  }
})