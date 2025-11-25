// src/screens/FoodSearchScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { styles } from "./styles";
import apiUsers from "../../services/apiUsers";
import { RootStackParamList } from "../../Routes/navigations/Stack";

interface RegistrationData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

type ProfileScreenProps = StackNavigationProp<RootStackParamList, "Profile">;

const Profile: React.FC<{ navigation: ProfileScreenProps }> = ({
  navigation,
}) => {
  const handleLogin = () => {
    navigation.navigate("Login", {});
  };
  const [register, setRegister] = useState<RegistrationData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Função genérica para atualizar o estado
  const handleChange = (key: keyof RegistrationData, value: string) => {
    setRegister((prevData) => ({
      ...prevData,
      [key]: value,
    }));
    // Limpa o erro ao digitar
    setErrors((prevErrors) => ({
      ...prevErrors,
      [key]: "",
    }));
  };

  // Função de validação e submissão
  const handleCadastro = () => {
    let newErrors: { [key: string]: string } = {};
    const { name, email, password, confirmPassword } = register;

    // 1. Validação de campos obrigatórios
    if (!name.trim()) newErrors.name = "O nome é obrigatório.";
    if (!email.trim()) newErrors.email = "O e-mail é obrigatório.";
    if (!password) newErrors.password = "A senha é obrigatória.";
    if (!confirmPassword)
      newErrors.confirmPassword = "A confirmação de senha é obrigatória.";

    // 2. Validação de senha
    if (password && password.length < 6)
      newErrors.password = "A senha deve ter pelo menos 6 caracteres.";

    // 3. Validação de confirmação de senha
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem.";
    }

    // 4. Validação de e-mail (Regex simples)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) newErrors.email = "E-mail inválido.";

    setErrors(newErrors);

    // Se houver erros, impede o cadastro
    if (Object.keys(newErrors).length > 0) {
      Alert.alert(
        "Erro no Cadastro",
        "Por favor, corrija os campos destacados."
      );
      return;
    }

    // --- Lógica de Cadastro Real Aqui ---
    addUsers();
    setRegister({ name: "", email: "", password: "", confirmPassword: "" });
  };

  const addUsers = async () => {
    try {
      const response = await apiUsers.post("/users", {
        nome: register.name,
        email: register.email,
        senha: register.password,
      });

      navigation.navigate("Login", {});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie sua Conta</Text>

      {/* Campo Nome */}
      <TextInput
        style={[styles.input, errors.name && styles.inputError]}
        placeholder="Nome Completo"
        value={register.name}
        onChangeText={(text) => handleChange("name", text)}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

      {/* Campo Email */}
      <TextInput
        style={[styles.input, errors.email && styles.inputError]}
        placeholder="E-mail"
        value={register.email}
        onChangeText={(text) => handleChange("email", text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      {/* Campo Senha */}
      <TextInput
        style={[styles.input, errors.password && styles.inputError]}
        placeholder="Senha (mínimo 6 caracteres)"
        value={register.password}
        onChangeText={(text) => handleChange("password", text)}
        secureTextEntry
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password}</Text>
      )}

      {/* Campo Confirmação de Senha */}
      <TextInput
        style={[styles.input, errors.confirmPassword && styles.inputError]}
        placeholder="Confirmar Senha"
        value={register.confirmPassword}
        onChangeText={(text) => handleChange("confirmPassword", text)}
        secureTextEntry
      />
      {errors.confirmPassword && (
        <Text style={styles.errorText}>{errors.confirmPassword}</Text>
      )}

      {/* Botão de Cadastro */}
      <TouchableOpacity style={styles.button} onPress={() => handleCadastro()}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7} onPress={() => handleLogin()}>
        <Text style={styles.login}> Já possui uma conta ? Acesse</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
