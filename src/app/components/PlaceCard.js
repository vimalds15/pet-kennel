import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Logo from "../../../assets/logo.png";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const swidth = Dimensions.get("window").width;

const PlaceCard = ({navigation}) => {
  console.log(navigation)
  return (
    <View style={styles.container}>
      <View style={styles.imageCont}>
        <Image
          source={{
            uri: "https://www.mydomaine.com/thmb/dke2LC6lH21Pvqwd2lI6AIutnDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg",
          }}
          style={{
            height: "100%",
            width: "100%",
            resizeMode: "cover",
            borderRadius: 6,
          }}
        />
      </View>
      <View style={styles.descCont}>
        <Text style={styles.textBold}>ChinoCappin Pet Shelter</Text>
        <View>
        <View style={styles.addressCont}>
          <MaterialIcons name="location-pin" color={"black"} size={20} />
          <Text style={styles.text}>No 17/4, Renuka Street, Porur </Text>
        </View>
        <View style={styles.landmarkCont}>
          <Text style={styles.textBold}>Landmark:</Text>
          <Text style={styles.text}> Near CSI Bishop Church</Text>
        </View>
        </View>
        <View style={styles.ratingCont}>
          <Text style={styles.textBold}>Ratings:</Text>
          <View style={styles.starCont}>
          <MaterialIcons name="star" size={15} color="gold" onPress={()=>navigation.navigate("detail")}/>
          <MaterialIcons name="star" size={15} color="gold"/>
          <MaterialIcons name="star" size={15} color="gold"/>
          <MaterialIcons name="star" size={15} color="gold"/>
          <MaterialIcons name="star" size={15} color="gold"/>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlaceCard;

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    flexDirection:"row",
    padding:8,
    borderRadius:5,
    minHeight:120,
    shadowColor:"black",
    shadowOffset:{width:0,height:1},
    shadowOpacity:0.1,
    shadowRadius:4,
    marginBottom:15
  },
  imageCont:{
    flex:1.25,
    marginRight:10
  },
  descCont:{
    flex:3,
    justifyContent:"space-between"
  },
  addressCont:{
    flexDirection:"row",
    marginLeft:-5,
  },
  landmarkCont:{
    flexDirection:"row",
  },
  ratingCont:{
    flexDirection:"row",
    alignItems:"center",
  },
  starCont:{
    flexDirection:"row",
    marginLeft:5,
  },
  textBold:{
    fontFamily:"montserrat",
    fontWeight:"bold",
  },
  text:{
    fontFamily:"montserrat"
  }
});
