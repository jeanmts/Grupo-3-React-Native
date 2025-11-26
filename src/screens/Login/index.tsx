import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./login.styles";
import apiUsers from "../../services/apiUsers";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Routes/navigations/Stack";
import { useAuth } from "../../context/AuthContext";

type LoginScreenProps = StackNavigationProp<RootStackParamList, "Login">;

const Login: React.FC<{ navigation: LoginScreenProps }> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth(); 

  const validateFields = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Erro", "Preencha email e senha.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Erro", "Email inválido.");
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    if (!validateFields()) return;

    apiUsers
      .get("/users")
      .then((response) => {
        const users = response.data;

        const found = users.find(
          (u: any) => u.email === email && u.senha === password
        );

        if (found) {
          login({
            id: found.id,
            nome: found.nome,
            email: found.email,
            foto: found.foto,
          });

          navigation.navigate({ name: "Tabs", params: {} });

        } else {
          Alert.alert("Erro", "Credenciais inválidas.");
        }
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Erro", "Erro na comunicação com o servidor.");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate({ name: "Profile", params: {} })}
      >
        <Text style={styles.login}> Não possui uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
