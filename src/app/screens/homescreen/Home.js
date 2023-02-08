import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Logo from "../../../../assets/logo.png";
import PlaceCard from "../../components/PlaceCard";

const Home = ({ navigation }) => {
  useEffect(
    () =>
      navigation.setOptions({
        headerShadowVisible:true,
        header: () => (
          <SafeAreaView
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              shadowColor:"#b0b0b0",
              shadowOffset:{width:0,height:3},
              shadowOpacity:0.8,
              shadowRadius:5,
            }}
          >
            {/* Logo  */}
            <View
              style={{
                marginLeft: 10,
                width: "8%",
              }}
            >
              <Image
                source={Logo}
                style={{
                  height: 38,
                  width: 38,
                  borderRadius: 38,
                  resizeMode: "contain",
                }}
              />
            </View>

            {/* Search Input */}
            <View
              style={{
                flexDirection: "row",
                width: "70%",
                margin: 15,
                paddingRight: 10,
                alignItems: "center",
                paddingLeft: 15,
                backgroundColor: "#e3e3e3",
                borderRadius: 5,
                paddingTop: 5,
                paddingBottom: 5,
              }}
            >
              <TextInput
                style={{
                  outline: "none",
                  width: "92%",
                  height: "90%",
                  borderWidth: 0,
                  backgroundColor: "#e3e3e3",
                  paddingBottom: 2,
                  fontFamily:"montserrat"
                }}
                placeholder="Search Place..."
                placeholderTextColor={"black"}
              />
              <MaterialIcons name="search" color={"060606"} size={28} />
            </View>

            {/* Profile */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: "100%",
                justifyContent: "center",
                width: "10%",
              }}
            >
              <MaterialIcons name="account-circle" size={36} />
            </View>
          </SafeAreaView>
        ),
        
      }),
    []
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Pressable onPress={()=>navigation.navigate('detail')}>
        <PlaceCard />
      </Pressable>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#eeeeee",
        padding:10,
        paddingTop:20
    }
});
