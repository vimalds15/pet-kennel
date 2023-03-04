import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect,useState } from 'react'
import BookingForm from '../../components/BookingForm'

const Book = ({route,navigation}) => {
  const [state,setState] =  useState({
    id:"",
    name:""
  })

  const mapState = () => {
    setState({
      id:route?.params?.id,
      name:route?.params?.name
    })
  }

  useEffect(()=>{
    navigation.setOptions({
      headerTitle:state?.name
    })
    mapState()
    console.log(route)
  },[state.name])

  return (
    <View style={styles.container}> 
      <BookingForm />
    </View>
  )
}

export default Book

const styles = StyleSheet.create({
  container:{
    padding:20
  }
})