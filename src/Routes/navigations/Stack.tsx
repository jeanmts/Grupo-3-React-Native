import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Busca from "../../screens/Busca";
import Detalhes from "../../screens/Detalhes";
import Profile from "../../screens/Profile";
import Login from "../../screens/Login";
import { BottomTabNavigator } from "./BottomTabNavigator";

export type RootStackParamList = {
  Tabs: undefined;
  Busca: {};
  Login: {};
  Profile: {};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Tabs"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
