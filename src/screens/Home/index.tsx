
import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./home.styles";

export default function HomeScreen() {
  const [drinkChecked, setDrinkChecked] = useState(false);
  const [walkChecked, setWalkChecked] = useState(false);
  const [fiberChecked, setFiberChecked] = useState(false);

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Olá!</Text>
          <Text style={styles.subtitle}>Veja suas informações de hoje</Text>
        </View>

        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-circle-outline" size={40} color="#2D3748" />
        </TouchableOpacity>
      </View>

      {/* RECOMENDAÇÕES */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recomendações do dia</Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.recoContainer}
        >

          {/* BEBER ÁGUA */}
          <TouchableOpacity
            style={styles.recoCard}
            onPress={() => setDrinkChecked(!drinkChecked)}
          >
            <View style={[styles.diamond, drinkChecked && styles.diamondActive]}>
              <View style={styles.diamondInner}>
                <Ionicons
                  name={drinkChecked ? "checkmark" : "water-outline"}
                  size={30}
                  color={drinkChecked ? "#fff" : "#3182CE"}
                />
              </View>
            </View>
            <Text style={styles.recoText}>Beba 2L de água</Text>
          </TouchableOpacity>

          {/* CAMINHAR */}
          <TouchableOpacity
            style={styles.recoCard}
            onPress={() => setWalkChecked(!walkChecked)}
          >
            <View style={[styles.diamond, walkChecked && styles.diamondActive]}>
              <View style={styles.diamondInner}>
                <Ionicons
                  name={walkChecked ? "checkmark" : "walk-outline"}
                  size={30}
                  color={walkChecked ? "#fff" : "#38A169"}
                />
              </View>
            </View>
            <Text style={styles.recoText}>Caminhe 20 min</Text>
          </TouchableOpacity>

          {/* FIBRAS */}
          <TouchableOpacity
            style={styles.recoCard}
            onPress={() => setFiberChecked(!fiberChecked)}
          >
            <View style={[styles.diamond, fiberChecked && styles.diamondActive]}>
              <View style={styles.diamondInner}>
                <Ionicons
                  name={fiberChecked ? "checkmark" : "leaf-outline"}
                  size={30}
                  color={fiberChecked ? "#fff" : "#D69E2E"}
                />
              </View>
            </View>
            <Text style={styles.recoText}>Coma mais fibras</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    </View>
  );
}