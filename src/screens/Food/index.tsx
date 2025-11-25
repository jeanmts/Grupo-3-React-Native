import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './food.styles';


export default function FoodScreen() {
return (
<View style={styles.container}>
<Text style={styles.title}>Lista de Alimentos</Text>
</View>
);
}