
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./detalhes.styles";

export default function DetailScreen({ route, navigation }: any) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Item</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>{item.nome}</Text>

        <Text style={styles.label}>Descrição:</Text>
        <Text style={styles.value}>{item.descricao}</Text>

        <Text style={styles.label}>Peso:</Text>
        <Text style={styles.value}>{item.peso} kg</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}