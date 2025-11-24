// import { StatusBar } from "expo-status-bar";
// import Login from "./src/screens/Login";
// import { View } from "react-native";

// export default function App() {
//   return (
//     <View>
//       <Login />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

/*teste do login*/

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

/*conteudo antigo*/ 

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// }); 