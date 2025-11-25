import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#F5F6FA',
padding: 20,
},
title: {
fontSize: 26,
fontWeight: 'bold',
color: '#2D3748',
marginTop: 40,
marginBottom: 20,
},
input: {
backgroundColor: '#FFF',
height: 50,
borderRadius: 14,
paddingHorizontal: 15,
fontSize: 16,
color: '#2D3748',
marginBottom: 15,
shadowColor: '#000',
shadowOpacity: 0.07,
shadowOffset: { width: 0, height: 3 },
shadowRadius: 6,
elevation: 3,
},
button: {
backgroundColor: '#4C6EF5',
paddingVertical: 14,
borderRadius: 14,
marginTop: 10,
shadowColor: '#000',
shadowOpacity: 0.08,
shadowOffset: { width: 0, height: 3 },
shadowRadius: 6,
elevation: 3,
},
buttonText: {
textAlign: 'center',
color: '#FFF',
fontSize: 18,
fontWeight: '600',
},
});