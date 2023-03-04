import {
  Image,
  Pressable,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FeatureCont from "../../components/FeatureCont";
import DetailAction from "../../components/DetailAction";

const Detail = ({ route, navigation }) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    num: 0,
    desc: "",
    lmark: "",
    img: "",
    amentities: [],
    address: "",
  });

  const mapState = () => {
    setState({
      name: route?.params?.name,
      email: route?.params?.email,
      num: route?.params?.call,
      desc: route?.params?.description,
      amentities: route?.params?.amentities,
      img: route?.params?.image,
      lmark: route?.params?.landmark,
      address: route?.params?.address,
    });
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: state?.name,
    });
    mapState()
    console.log("first")
  }, [state?.name]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <View style={styles.imageCont}>
          <Image
            source={{
              uri: state?.img,
            }}
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </View>
        <View style={styles.descCont}>
          <Text style={styles.boldText}>{state?.name}</Text>
          <View style={styles.addressCont}>
            <MaterialIcons name="location-pin" color={"black"} size={20} />
            <Text style={styles.text}>{state?.address}</Text>
          </View>
          <View style={styles.landCont}>
            <Text style={styles.landText}>Landmark:</Text>
            <Text style={styles.text}> {state?.lmark}</Text>
          </View>
          <View style={styles.contactCont}>
            <View style={styles.callCont}>
              <MaterialIcons name="phone" size={18} />
              <Text
                onPress={() => Linking.openURL(`tel:${state?.num}`)}
                style={styles.text}
              >
                +91{state?.num}
              </Text>
            </View>
            <View style={styles.mailCont}>
              <MaterialIcons name="mail-outline" size={20} />
              <Text
                onPress={() => Linking.openURL(`mailto:${state?.email}`)}
                style={styles.text}
              >
                {state?.email}
              </Text>
            </View>
          </View>
        </View>
        <FeatureCont />
      </ScrollView>
      <View>
        <Pressable
          style={styles.actionCont}
          onPress={() => navigation.navigate("book",
            {
              id:route?.params.id,
              name:route?.params?.name
            }
          )}
        >
          <DetailAction />
        </Pressable>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    padding: 10,
    marginBottom: 40,
  },
  imageCont: {
    flex: 1,
    minHeight: 250,
    maxHeight: 350,
  },
  boldText: {
    fontSize: 18,

    fontWeight: "bold",
    marginTop: 10,
  },
  landText: {
    fontWeight: "600",
  },
  text: {},
  descCont: {
    flex: 1,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#b0b0b0",
  },
  landCont: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
  },
  addressCont: {
    flex: 1,
    flexDirection: "row",
    marginLeft: -4,
    marginTop: 10,
  },
  contactCont: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 5,
    flexWrap: "wrap",
    marginBottom: 20,
  },
  callCont: {
    flexDirection: "row",
    marginRight: 8,
    marginBottom: 8,
  },
  mailCont: {
    flexDirection: "row",
  },
  actionCont: {
    flex: 1,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});
