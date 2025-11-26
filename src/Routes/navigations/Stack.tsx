import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detalhes from "../../screens/Detalhes";
import Profile from "../../screens/profile";
import Login from "../../screens/Login";
import { BottomTabNavigator } from "./BottomTabNavigator";
import Home from "../../screens/Home";

export type RootStackParamList = {
  Tabs: {};
  Home:{};
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
      />
    </Stack.Navigator>
  );
}

