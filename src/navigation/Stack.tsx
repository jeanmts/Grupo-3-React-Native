import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  Busca  from "../screens/Busca/index";
import  Detalhes  from "../screens/Detalhes/index";

export type RootStackParamList = {
  Busca: {};              
  Detalhes: { id: string }; 
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Busca" component={Busca} /> 
      <Stack.Screen name="Detalhes" component={Detalhes} /> 
    </Stack.Navigator>
  );
}