import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./food.styles";

export default function FoodScreen() {
  const [favorites, setFavorites] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
    card5: false,
    card6: false,
    card7: false,
    card8: false,
  });

  const toggleFavorite = (key: keyof typeof favorites) => {
    setFavorites((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const Card = ({ id }: { id: keyof typeof favorites }) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      {/* Ícone no canto */}
      <TouchableOpacity
        style={styles.heartIcon}
        onPress={() => toggleFavorite(id)}
      >
        <Ionicons
          name={favorites[id] ? "heart" : "heart-outline"}
          size={26}
          color={favorites[id] ? "#ff4d4d" : "#888"}
        />
      </TouchableOpacity>

      {/* Conteúdo do card (vazio por enquanto) */}
      <Text>{"\n"}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Favoritos</Text>
          <Text style={styles.subtitle}>Seus cards favoritos</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.cardsRow}>
          <Card id="card1" />
          <Card id="card2" />
        </View>

        <View style={styles.cardsRow}>
          <Card id="card3" />
          <Card id="card4" />
        </View>

        <View style={styles.cardsRow}>
          <Card id="card5" />
          <Card id="card6" />
        </View>

        <View style={styles.cardsRow}>
          <Card id="card7" />
          <Card id="card8" />
        </View>
      </View>
    </View>
  );
}