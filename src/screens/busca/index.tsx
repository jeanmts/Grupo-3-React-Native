import { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import { styles } from './stylesb';


export default function SearchScreen({ navigation }: any) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = () => {
    // ⛔ coloque sua lógica real de busca aqui
    const fakeData = [
      { id: 1, name: "Banana", calories: 89 },
      { id: 2, name: "Maçã", calories: 52 },
      { id: 3, name: "Frango Grelhado", calories: 239 },
    ];

    const filtered = fakeData.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Buscar Alimentos</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um alimento..."
        placeholderTextColor="#888"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />

      <FlatList
        style={styles.list}
        data={results}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum resultado encontrado.</Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Detalhes", { item })}
          >
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCalories}>{item.calories} kcal</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}