
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from './home.styles';
import { Ionicons } from "@expo/vector-icons";

export default function Home({ navigation }: any) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Nutri Life</Text>
          <Text style={styles.subtitle}>Sua evolução, no seu ritmo</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Listar todos os "produtos"</Text>

        {/* se quiser usar os cards como exemplo  */}
        <View style={styles.cardsRow}>
          <TouchableOpacity style={styles.card}>
            <Ionicons name="restaurant-outline" size={38} color="#5A67D8" />
            <Text style={styles.cardText}>{"\n"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} >
            <Ionicons name="fitness-outline" size={38} color="#48BB78" />
            <Text style={styles.cardText}>{"\n"}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardsRow}>
          <TouchableOpacity style={styles.card}>
            <Ionicons name="search" size={38} color="#ED8936" />
            <Text style={styles.cardText}>{"\n"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Ionicons name="stats-chart-outline" size={38} color="#4299E1" />
            <Text style={styles.cardText}>{"\n"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recomendações do dia</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.recoCard}>
            <Ionicons name="water-outline" size={34} color="#3182CE" />
            <Text style={styles.recoText}>Beba 2L de água</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.recoCard}>
            <Ionicons name="walk-outline" size={34} color="#38A169" />
            <Text style={styles.recoText}>Caminhe 20 min</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.recoCard}>
            <Ionicons name="leaf-outline" size={34} color="#D69E2E" />
            <Text style={styles.recoText}>Coma mais fibras</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

    </ScrollView>
  );
}