import { Image, Pressable,Linking, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FeatureCont from '../../components/FeatureCont';
import DetailAction from '../../components/DetailAction';

const Detail = ({navigation}) => {
  useEffect(()=>(
    navigation.setOptions({
      headerTitle:"Chinocappin Pet Shelter"
    })
  ))

  const phoneCallHandler = (num) => {
    Linking.openURL(`tel:${num}`)
  }

  return (
    <View style={styles.container}>
    <ScrollView style={styles.wrapper}>
      <View style={styles.imageCont}>
      <Image
        source={{uri:"https://www.mydomaine.com/thmb/dke2LC6lH21Pvqwd2lI6AIutnDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg"}}
        style={{
          height:"100%",
          width:"100%"
        }}
      />
      </View>
      <View style={styles.descCont}>
        <Text style={styles.boldText}>Chinocappin Pet Shelter</Text>
        <View style={styles.addressCont}>
        <MaterialIcons name="location-pin" color={"black"} size={20} />
          <Text style={styles.text}>No 17/4, Renuka Street, Porur </Text>
          </View>
          <View style={styles.landCont}>
          <Text style={styles.landText}>Landmark:</Text>
          <Text style={styles.text}> Near CSI Bishop Church</Text>
          </View>
          <View style={styles.contactCont}>
            <View style={styles.callCont}>
            <MaterialIcons name='phone' size={18} />
            <Text onPress={()=>Linking.openURL("tel:9884488441")} style={styles.text}>+916381079503</Text>
            </View>
            <View style={styles.mailCont}>
              <MaterialIcons name='mail-outline' size={20} />
              <Text onPress={()=>Linking.openURL("mailto:chinnocappin@gmail.com")} style={styles.text}>cappincapeffchino@gmail.com</Text>
            </View>
          </View>
      </View>
      <FeatureCont />
    </ScrollView>
      <View>
      <Pressable  style={styles.actionCont} onPress={()=>navigation.navigate('book')}>
          <DetailAction />
      </Pressable>
      </View>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  wrapper:{
    flex:1,
    padding:10,
    marginBottom:40
  },
  imageCont:{
    flex:1,
    minHeight:250,
    maxHeight:350
  },
  boldText:{
    fontSize:18,
    
    fontWeight:"bold",
    marginTop:10,
  },
  landText:{
    
    fontWeight:"600"
  },
  text:{
    
  },
  descCont:{
    flex:1,
    padding:5,
    borderBottomWidth:1,
    borderBottomColor:"#b0b0b0"
  },
  landCont:{
    flex:1,
    flexDirection:"row",
    marginTop:10
  },
  addressCont:{
    flex:1,
    flexDirection:"row",
    marginLeft:-4,
    marginTop:10
  },
  contactCont:{
    flex:1,
    flexDirection:"row",
    marginTop:10,
    marginBottom:5,
    flexWrap:"wrap",
    marginBottom:20,
  },
  callCont:{
    flexDirection:"row",
    marginRight:8,
    marginBottom:8
  },
  mailCont:{
    flexDirection:"row"
  },
  actionCont:{
    flex:1,
    width:"100%",
    position:"absolute",
    bottom:0,
  }
})