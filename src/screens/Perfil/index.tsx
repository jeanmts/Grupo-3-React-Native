import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ActivityIndicator, TextInput } from "react-native";
import { useAuth } from "../../context/AuthContext";
import apiUsers from "../../services/apiUsers";
import { styles } from "./perfil.styles";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { BottomTabNav } from "../../Routes/navigations/BottomTabNavigator";
import { useNavigation } from "@react-navigation/native";
import imagem from "../../assets/image.png";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Routes/navigations/Stack";

type PerfilScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Tabs">;
};

interface UserAPI {
  id: string;
  nome: string;
  email: string;
  foto: string;
}

const Perfil: React.FC<PerfilScreenProps> = ({ navigation }) => {
  const { user, logout } = useAuth();

  const [profile, setProfile] = useState<UserAPI | null>(null);
  const [loading, setLoading] = useState(true);

  const [carb, setCarb] = useState("0");
  const [protein, setProtein] = useState("0");
  const [fat, setFat] = useState("0");

  const totalCalories =
    (parseInt(carb) || 0) * 4 +
    (parseInt(protein) || 0) * 4 +
    (parseInt(fat) || 0) * 9;

  useEffect(() => {
    if (!user) return;

    apiUsers
      .get(`/users/${user.id}`)
      .then((response) => setProfile(response.data))
      .catch((err) => console.log("Erro ao buscar perfil:", err))
      .finally(() => setLoading(false));
  }, [user]);

  if (!profile)
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Não foi possível carregar o perfil.</Text>
      </View>
    );

  return (
    <View style={styles.container}>

      <Text style={styles.header}>Perfil</Text>

      <View style={styles.userCard}>
        <Image source={{ uri: profile.foto }} style={styles.avatar} />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.userName}>{profile.nome}</Text>
          <Text style={styles.userPlan}>Tipo de plano</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Nutrição</Text>

      <View style={styles.goalsCard}>

        <Text style={styles.goalLabel}>Calorias Diárias</Text>

        <View style={styles.calorieBox}>
          <Text style={styles.calorieNumber}>{totalCalories}</Text>
          <Text style={styles.kcalText}>kcal</Text>
        </View>

        <View style={styles.macroRow}>
          <Text style={styles.macroLabel}>Carboidratos (g)</Text>
          <TextInput
            style={styles.macroBox}
            keyboardType="numeric"
            value={carb}
            onChangeText={setCarb}
          />
        </View>

        <View style={styles.macroRow}>
          <Text style={styles.macroLabel}>Proteína (g)</Text>
          <TextInput
            style={styles.macroBox}
            keyboardType="numeric"
            value={protein}
            onChangeText={setProtein}
          />
        </View>

        <View style={styles.macroRow}>
          <Text style={styles.macroLabel}>Gordura (g)</Text>
          <TextInput
            style={styles.macroBox}
            keyboardType="numeric"
            value={fat}
            onChangeText={setFat}
          />
        </View>

        {/* <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity> */}
      </View>

      <Text style={styles.sectionTitle}>Gráfico</Text>

      <View style={styles.grafCard}>
        <Image
          source={imagem}
          style={styles.grafico}
        />
      </View>

      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => {
          logout();
          navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
          });
        }}
      >
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Perfil;
