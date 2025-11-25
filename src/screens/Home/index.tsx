
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from './home.styles';
import { Ionicons } from "@expo/vector-icons";

export default function Home({ navigation }: any) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Nutri Track AI</Text>
          <Text style={styles.subtitle}>Sua evolução, no seu ritmo</Text>
        </View>

        <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate("Profile")}>
          <Ionicons name="person-circle-outline" size={42} color="#333" />
        </TouchableOpacity>
      </View>

      {/* ACCESS CARDS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Acessos rápidos</Text>

        <View style={styles.cardsRow}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Food")}>
            <Ionicons name="restaurant-outline" size={38} color="#5A67D8" />
            <Text style={styles.cardText}>Registro{"\n"}Alimentar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Calculo")}>
            <Ionicons name="fitness-outline" size={38} color="#48BB78" />
            <Text style={styles.cardText}>Cálculo{"\n"}Ideal</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardsRow}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Search")}>
            <Ionicons name="search" size={38} color="#ED8936" />
            <Text style={styles.cardText}>Buscar{"\n"}Alimentos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Ionicons name="stats-chart-outline" size={38} color="#4299E1" />
            <Text style={styles.cardText}>Progresso{"\n"}Diário</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* RECOMMENDATIONS */}
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