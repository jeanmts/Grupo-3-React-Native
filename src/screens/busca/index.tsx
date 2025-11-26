import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { searchFoods } from "../../services/apiFoodData"; 

import { FoodResult } from "../../types/search"; 

interface ResultItem extends FoodResult {
    description: string | null; 
}

export default function SearchScreen({ navigation }: any) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


   const handleSearch = async () => {
    if (!query.trim()) {
      setResults([]);
      setError(null);
      return;
    }
setLoading(true);
    setError(null);

    try {
      
      const response = await searchFoods(query);
    
      const apiResults: ResultItem[] = response.data.foods.map((food: any) => ({
          id: String(food.fdcId), 
          name: food.description,  
          description: `Tipo: ${food.dataType}`,
      }));

      setResults(apiResults);
      
    } catch (err: any) { 
      console.error("Erro na busca da API:", err);
      
      
      if (err.response) {
         
          const status = err.response.status;
          if (status === 401 || status === 403) {
              setError(`Erro ${status}: Chave API inválida ou não autorizada. Verifique seu .env.`);
          } else {
              setError(`Erro na API (Status: ${status}). Tente novamente.`);
          }
      } else if (err.message && err.message.includes("API_KEY_FOOD_DATA")) {
      
           setError(err.message);
      } else {
          
          setError("Falha na conexão de rede. Verifique sua internet.");
      }
      setResults([]);
    } finally {
      setLoading(false); 
    }
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
            <Text style={styles.itemName}>{item.description}</Text>
            <Text style={styles.itemCalories}>{item.calories} kcal</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}