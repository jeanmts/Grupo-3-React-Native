import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { styles } from './detalhes.styles';

type FoodItem = {
  id: string | number;
  name: string;
  ingredients?: string;
  calories?: number | null;
};

export default function Detalhes() {
  const route = useRoute<any>();
  const navigation = useNavigation();
  const { item } = route.params as { item: FoodItem };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Alimento</Text>

      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.info}>{item.name}</Text>

      {/* 🔄 TROCA DE DESCRIPTION PARA INGREDIENTS */}
      {item.ingredients && (
        <>
          <Text style={styles.label}>Ingredientes:</Text>
          <Text style={styles.info}>{item.ingredients}</Text>
        </>
      )}

      {item.calories != null && (
        <>
          <Text style={styles.label}>Calorias:</Text>
          <Text style={styles.info}>{item.calories} kcal</Text>
        </>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
