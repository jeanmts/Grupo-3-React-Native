import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../../screens/Home";
import Food from "../../screens/Food";
import Add from "../../screens/Add";
import Detalhes from "../../screens/detalhes";
import Perfil from "../../screens/Perfil";

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: "#229431ff",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#E0E0E0",
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Food"
        component={Food}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="fast-food" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Detalhes"
        component={Detalhes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
