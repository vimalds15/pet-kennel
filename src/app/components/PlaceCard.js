import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React,{useEffect, useState} from "react";
import Logo from "../../../assets/logo.png";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


const PlaceCard = (props) => {
  // console.log(navigation)
  const [state,setState] = useState({
    name:"",
    lmark:"",
    img:"",
    address:""
  })

  const mapState = () => {
    setState({
      name:props?.name,
      email:props?.email,
      num:props?.call,
      desc:props?.description,
      amentities:props?.amentities,
      img:props?.image,
      lmark:props?.landmark,
      address:props?.address
    })
  }

  useEffect(()=>{
    mapState()
  },[])

  
  return (
    <View style={styles.container}>
      <View style={styles.imageCont}>
        <Image
          source={{
            uri: state?.img,
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
        <Text style={styles.textBold}>{state?.name}</Text>
        <View>
        <View style={styles.addressCont}>
          <MaterialIcons name="location-pin" color={"black"} size={20} />
          <Text style={styles.text}>{state?.address}</Text>
        </View>
        <View style={styles.landmarkCont}>
          <Text style={styles.textBold}>Landmark:</Text>
          <Text style={styles.text}> {state?.landmark}</Text>
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
    height:120,
    elevation:1,
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
    
    fontWeight:"bold",
  },
  text:{
    
  }
});
