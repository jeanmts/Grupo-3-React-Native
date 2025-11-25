import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './calculo.tyles';



export default function CalculoScreen() {
const [peso, setPeso] = useState('');
const [altura, setAltura] = useState('');
const [resultado, setResultado] = useState('');


const calcular = () => {
if (!peso || !altura) return;


const p = Number(peso);
const a = Number(altura) / 100;
const imc = p / (a * a);


let status = '';


if (imc < 18.5) status = 'Abaixo do peso';
else if (imc < 24.9) status = 'Peso normal';
else if (imc < 29.9) status = 'Sobrepeso';
else status = 'Obesidade';


setResultado(`IMC: ${imc.toFixed(1)} - ${status}`);
};


return (
<View style={styles.container}>
<Text style={styles.title}>Cálculo de Peso / IMC</Text>


<TextInput
style={styles.input}
placeholder="Peso (kg)"
placeholderTextColor="#777"
keyboardType="numeric"
value={peso}
onChangeText={setPeso}
/>


<TextInput
style={styles.input}
placeholder="Altura (cm)"
placeholderTextColor="#777"
keyboardType="numeric"
value={altura}
onChangeText={setAltura}
/>


<TouchableOpacity style={styles.button} onPress={calcular}>
<Text style={styles.buttonText}>Calcular</Text>
</TouchableOpacity>


{resultado ? (
<View style={styles.resultBox}>
<Text style={styles.resultText}>{resultado}</Text>
</View>
) : null}
</View>
);
}