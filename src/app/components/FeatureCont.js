import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const FeatureCont = (

    
) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Amentities</Text>
      <View style={styles.featureCont}>
        <MaterialIcons name='bolt' size={18} />
        <Text style={styles.listText}>24/7 Maintenance</Text>
      </View>
      <View style={styles.featureCont}>
        <MaterialIcons name='bolt' size={18} />
        <Text style={styles.listText}>Individual Room</Text>
      </View>
      <View style={styles.featureCont}>
        <MaterialIcons name='bolt' size={18} />
        <Text style={styles.listText}>Socialize</Text>
      </View>
      <View style={styles.featureCont}>
        <MaterialIcons name='bolt' size={18} />
        <Text style={styles.listText}>Combing the Dog</Text>
      </View>
      <View style={styles.featureCont}>
        <MaterialIcons name='bolt' size={18} />
        <Text style={styles.listText}>Home cook food</Text>
      </View>
      <View style={styles.featureCont}>
        <MaterialIcons name='bolt' size={18} />
        <Text style={styles.listText}>2 Times Feeding</Text>
      </View>
    </View>
  )
}

export default FeatureCont

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        marginBottom:30
    },
    titleText:{
        
        fontSize:16,
        fontWeight:"bold"
    },
    featureCont:{
        marginTop:10,
        flexDirection:"row",
        alignItems:"center"
    },
    listText:{
        
        marginLeft:5
    }
})