import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../../screens/Home";
import Food from "../../screens/Food";
import Add from "../../screens/Add";
import Perfil from "../../screens/Perfil";
import Busca from "../../screens/Busca";

export type BottomTabNav = {
  Perfil: {};
  Home: {};
  Food: {};
  Add: {};
  Detalhes: {};
  Busca: {};
};

const { Navigator, Screen } = createBottomTabNavigator<BottomTabNav>();

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
        headerShown: false,
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
      {/* <Screen
        name="Detalhes"
        component={Detalhes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      /> */}
      <Screen
        name="Busca"
        component={Busca}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
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
