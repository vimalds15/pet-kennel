import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, Image, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { handleSignUp } from "../../../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visible, setVisibility] = React.useState({ name: "eye-off" });

  //Toggles the eye icon to show the password
  const ToggleVisibilty = () => {
    if (visible.name === "eye") {
      setVisibility({ name: "eye-off" });
    } else {
      setVisibility({ name: "eye" });
    }
  };

  //Handles password visibility when the eye icon is pressed
  const secureTextEntry = () => {
    if (visible.name === "eye") {
      return false;
    } else if (visible.name === "eye-off") {
      return true;
    }
  };

  //Handles email input
  const handleEmailChange = (text) => {
    setEmail(text);
  };

  //Handles password input
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  //Handles confirm password input
  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  //Handles sign up
  const handleSubmit = async () => {
    if (email === "" && password !== confirmPassword && password === "" && confirmPassword === "") {
        console.error("Invalid Credentials");
      } else {
        try {
          await handleSignUp(email, password);
        } catch (error) {
          console.error(error);
        }
      }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={{ fontSize: 40, fontFamily: "QuicksandBold", color: "#fff" }}>Create</Text>
        <Image
          source={require("../../../assets/logo.png")}
          style={{
            height: 30,
            width: 50,
            top: 9,
            marginRight: 5,
            transform: [{ rotate: "-10deg" }],
          }}
        />
        <Text style={{ fontSize: 40, fontFamily: "QuicksandBold", color: "#fff" }}>account</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.email}
          defaultValue={email}
          onChangeText={handleEmailChange}
          textContentType="emailAddress"
          placeholder="Email Address"
          placeholderTextColor="grey"
          keyboardType="email-address"
          returnKeyType="next"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.password}
            defaultValue={password}
            onChangeText={handlePasswordChange}
            placeholder="Enter Password"
            placeholderTextColor="grey"
            returnKeyType="next"
            secureTextEntry={secureTextEntry()}
            textContentType="password"
            keyboardType="default"
            autoCorrect={false}
          />
          <Ionicons
            name={visible.name}
            size={24}
            color="#1da"
            style={styles.eyeContainer}
            onPress={ToggleVisibilty}
          />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.password}
            defaultValue={confirmPassword}
            onChangeText={handleConfirmPasswordChange}
            placeholder="Confirm Password"
            placeholderTextColor="grey"
            returnKeyType="go"
            secureTextEntry={secureTextEntry()}
            textContentType="password"
            keyboardType="default"
            autoCorrect={false}
          />
        </View>
        <Pressable
          style={styles.registerContainer}
        >
          <Text style={styles.register}>want to sign in?</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={{ fontFamily: "QuicksandBold", fontSize: 20 }}>SIGN UP</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#0C0C1C",
  },
  headerContainer: {
    flexDirection: "row",
    width: "80%",
    height: 50,
    marginBottom: 40,
    top: -20,
  },
  form: {
    width: "80%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top: -40,
  },
  email: {
    width: "100%",
    height: 60,
    backgroundColor: "#0ff1",
    borderRadius: 5,
    marginBottom: 35,
    padding: 10,
    fontSize: 18,
    fontFamily: "QuicksandBold",
    color: "#fff",
  },
  password: {
    width: "85%",
    height: 60,
    borderRadius: 5,
    marginBottom: 35,
    padding: 10,
    fontSize: 18,
    fontFamily: "QuicksandBold",
    color: "#fff",
  },

  passwordContainer: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    backgroundColor: "#0ff1",
    borderRadius: 5,
    marginBottom: 35,
  },
  eyeContainer: {
    position: "absolute",
    right: 10,
    top: 20,
  },

  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#1da",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
    padding: 10,
  },

  register: {
    fontFamily: "QuicksandBold",
    color: "#fff",
    fontSize: 18,
  },
  registerContainer: {
    top: -20,
    flexDirection: "row",
    alignSelf: "flex-end",
  },
});