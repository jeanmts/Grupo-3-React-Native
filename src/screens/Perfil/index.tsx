import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ActivityIndicator, Switch } from "react-native";
import { useAuth } from "../../context/AuthContext";
import apiUsers from "../../services/apiUsers";
import { styles } from "./perfil.styles";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { BottomTabNav } from "../../Routes/navigations/BottomTabNavigator";

type PerfilScreenProps = {
  navigation: BottomTabNavigationProp<BottomTabNav, "Perfil">;
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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (!user) return;

    apiUsers
      .get(`/users/${user.id}`)
      .then((response) => setProfile(response.data))
      .catch((err) => console.log("Erro ao buscar perfil:", err))
      .finally(() => setLoading(false));
  }, [user]);

  if (loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#2ecc71" />
      </View>
    );

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
        <Image
          source={{ uri: profile.foto }}
          style={styles.avatar}
        />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.userName}>{profile.nome}</Text>
          <Text style={styles.userPlan}>Tipo de plano</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Nutrição</Text>

      <View style={styles.goalsCard}>
        <Text style={styles.goalLabel}>Calorias Diárias</Text>
        <View style={styles.calorieBox}>
          <Text style={styles.calorieNumber}>2200</Text>
          <Text style={styles.kcalText}>kcal</Text>
        </View>

        <View style={styles.macroRow}>
          <Text style={styles.macroLabel}>Carboidratos (g)</Text>
          <View style={styles.macroBox}><Text>250</Text></View>
        </View>

        <View style={styles.macroRow}>
          <Text style={styles.macroLabel}>Proteina (g)</Text>
          <View style={styles.macroBox}><Text>150</Text></View>
        </View>

        <View style={styles.macroRow}>
          <Text style={styles.macroLabel}>Gordura (g)</Text>
          <View style={styles.macroBox}><Text>70</Text></View>
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Salvar v</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Perfil;
