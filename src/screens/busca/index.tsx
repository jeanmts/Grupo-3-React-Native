import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { searchFoods } from "../../services/apiFoodData";
import translate from "google-translate-api-x";

interface FoodItem {
  id: string | number;
  name: string;
  ingredients?: string;
  calories?: number | null;
}

export default function SearchScreen({ navigation }: any) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // --- FUNÇÃO DE SEGURANÇA ---
  // Tenta traduzir. Se demorar mais de 5 segundos ou der erro, devolve o original.
  const safeTranslate = async (text: string): Promise<string> => {
    if (!text || !text.trim()) return text;

    try {
      console.log(`Tentando traduzir: "${text}"`);

      // Cria uma promessa que rejeita após 5 segundos (Timeout)
      const timeout = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 5000)
      );

      // Tenta a tradução oficial
      // A biblioteca pode retornar de diferentes formas, então tentamos sem 'from' primeiro
      let translation: any;
      try {
        translation = await Promise.race([
          translate(text, { to: "pt" }),
          timeout,
        ]);
      } catch (e) {
        // Se falhar, tenta com 'from' especificado
        translation = await Promise.race([
          translate(text, { to: "pt", from: "en" }),
          timeout,
        ]);
      }

      console.log(`Resposta da tradução:`, JSON.stringify(translation));

      // A biblioteca retorna um objeto com a propriedade 'text'
      // Verifica diferentes possíveis estruturas de resposta
      if (translation) {
        if (typeof translation === "object") {
          // Tenta diferentes propriedades possíveis
          const translatedText =
            translation.text ||
            translation.translatedText ||
            translation[0]?.text ||
            (Array.isArray(translation) && translation[0]) ||
            text;

          if (translatedText && translatedText !== text) {
            console.log(`Texto traduzido: "${translatedText}"`);
            return String(translatedText);
          }
        }

        // Se for string direto, retorna
        if (typeof translation === "string" && translation !== text) {
          console.log(`Texto traduzido (string): "${translation}"`);
          return translation;
        }
      }

      console.log(`Não foi possível extrair tradução, retornando original`);
      return text;
    } catch (err: any) {
      console.log(`Falha ao traduzir "${text}":`, err?.message || err);
      return text; // Devolve o texto original em caso de erro
    }
  };

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
      const foods = response.data.foods || [];
      console.log(
        `2. Encontrados ${foods.length} itens. Iniciando tradução...`
      );

      // Mapeia e traduz com segurança
      const promises = foods.map(async (food: any) => {
        // Pega o nome/descrição do alimento (pode estar em description ou brandName)
        const foodName =
          food.description || food.brandName || food.brandOwner || "Alimento";
        const dataType = food.dataType || "Unknown";

        // Usamos a função segura criada acima para traduzir
        const nomeTraduzido = await safeTranslate(foodName);
        const tipoTraduzido = await safeTranslate(dataType);

        return {
          id: String(food.fdcId),
          name: nomeTraduzido,
          description: `Tipo: ${tipoTraduzido}`,
          calories:
            food.foodNutrients?.find((n: any) => n.nutrientName === "Energy")
              ?.value || null,
        };
      });

      const produtoTraduzido = await Promise.all(promises);

      console.log(
        "3. Processo finalizado! Itens traduzidos:",
        produtoTraduzido.length
      );
      setResults(produtoTraduzido);
    } catch (err: any) {
      console.error("Erro na busca da API:", err);

      if (err.response) {
        const status = err.response.status;
        if (status === 401 || status === 403) {
          setError(
            `Erro ${status}: Chave API inválida ou não autorizada. Verifique seu .env.`
          );
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

      {error && <Text style={styles.error}>{error}</Text>}

      {loading && <ActivityIndicator style={styles.loading} size="large" />}

      <FlatList
        style={styles.list}
        data={results}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          !loading && !error ? (
            <Text style={styles.emptyText}>Nenhum resultado encontrado.</Text>
          ) : null
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Detalhes", { item })}
          >
            <Text style={styles.itemName}>{item.name}</Text>

            {item.ingredients && (
              <Text style={styles.itemDescription}>{item.ingredients}</Text>
            )}

            {item.calories != null && (
              <Text style={styles.itemCalories}>{item.calories} kcal</Text>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
