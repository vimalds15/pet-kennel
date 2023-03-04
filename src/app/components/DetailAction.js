import { Pressable, StyleSheet, Text, View } from 'react-native'
import React,{useEffect, useState} from 'react'

const DetailAction = ({route,navigation}) => {
  

  return (
    <View style={styles.container}>
      <View style={styles.bookBtn}>
        <Text style={{color:"white"}}>Book</Text>
      </View>
    </View>
  )
}

export default DetailAction

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
    },
    bookBtn:{
        flex:1,
        paddingTop:15,
        paddingBottom:15,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"black"
    }
})