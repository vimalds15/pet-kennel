import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const BookingForm = () => {
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [form, setForm] = useState({
    name: null,
    email: null,
    mobile: null,
    address: null,
    startDate: null,
    endDate: null,
    packageId: null,
  });

  const showDatePicker = () => {
    setDatePicker(true);
  };

  const onDateSelected = (event, selectedDate) => {
    const currentDate = selectedDate || mydate;
    setDate(currentDate);
    setDatePicker(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subCont}>
        <Text style={styles.labelText}>Name:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your Name..."
          placeholderTextColor={"gray"}
        />
      </View>
      <View style={styles.subCont}>
        <Text style={styles.labelText}>Email:</Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={"gray"}
          placeholder="Enter your email..."
        />
      </View>
      <View style={styles.subCont}>
        <Text style={styles.labelText}>Mobile:</Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={"gray"}
          keyboardType="number-pad"
          maxLength={10}
          placeholder="Enter your mobile number..."
        />
      </View>
      <View style={styles.subAddrCont}>
        <Text style={styles.labelText}>Address:</Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={"gray"}
          placeholder="Enter your address"
        />
      </View>
      <Pressable onPress={showDatePicker} style={styles.dateCont}>
        <MaterialIcons name="date-range" color="black" size={20} />
        <Text style={styles.dateText}> From: {date.toDateString()}</Text>
        {datePicker && (
          <DateTimePicker
            value={date}
            mode={"date"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={true}
            onChange={onDateSelected}
          />
        )}
      </Pressable>
      <Pressable onPress={showDatePicker} style={styles.dateCont}>
        <MaterialIcons name="date-range" color="black" size={20} />
        <Text style={styles.dateText}> To: {date.toDateString()}</Text>
        {datePicker && (
          <DateTimePicker
            value={date}
            mode={"date"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={true}
            onChange={onDateSelected}
          />
        )}
      </Pressable>
    </ScrollView>
  );
};

export default BookingForm;

const styles = StyleSheet.create({
  subCont: {
    borderWidth: 1,
    borderColor: "#b0b0b0",
    backgroundColor: "white",
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
  },
  subAddrCont: {
    borderWidth: 1,
    borderColor: "#b0b0b0",
    backgroundColor: "white",
    padding: 8,
    height: 100,
    borderRadius: 5,
    marginBottom: 10,
  },
  dateCont: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#b0b0b0",
    backgroundColor: "white",
    padding: 8,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  dateText: {
    marginLeft: 5,
  },
});
