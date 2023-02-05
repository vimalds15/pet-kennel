import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import HomeScreen from "./src/app/screens/HomeScreen";
import BookingScreen from "./src/app/screens/BookingScreen";
import SupportScreen from "./src/app/screens/SupportScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          tabBarIconStyle: {
            minHeight: 40,
          },
        }}
      >
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="booking"
          component={BookingScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="list-alt" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="support"
          component={SupportScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="support-agent" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
