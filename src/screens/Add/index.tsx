import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function AddScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');

  const handleAdd = () => {
    if (!name.trim() || !calories.trim()) {
      alert("Preencha todos os campos!");
      return;
    }

    const item = {
      id: Date.now(),
      name: name.trim(),
      description: "Alimento adicionado manualmente",
      calories: Number(calories),
    };

    navigation.navigate('Detalhes', { item });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Alimento</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do alimento"
        placeholderTextColor="#777"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Calorias (kcal)"
        placeholderTextColor="#777"
        keyboardType="numeric"
        value={calories}
        onChangeText={setCalories}
      />

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
