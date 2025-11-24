import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Search } from "../screens/busca/index";
import { Details } from "../screens/detalhes/index";

export type RootStackParamList = {
  Search: {};
  Details: { id: string };
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
