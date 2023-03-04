import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
// import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold
} from "@expo-google-fonts/montserrat"

import HomeScreen from "./src/app/screens/HomeScreen";
import BookingScreen from "./src/app/screens/BookingScreen";
import SupportScreen from "./src/app/screens/SupportScreen";
import { Provider } from "react-redux";
import { store } from "./src/features/store";



const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home-screen"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          tabBarIconStyle: {
            minHeight: 40,
          },
          headerShown:false
        }}
      >
        <Tab.Screen
          name="home-screen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="booking-screen"
          component={BookingScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="list-alt" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="support-screen"
          component={SupportScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="support-agent" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


const styles = StyleSheet.create({});
