import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Busca from "../../screens/busca";
import Detalhes from "../../screens/detalhes";
import Profile from "../../screens/profile"; 
import Login from "../../screens/login";
import { BottomTabNavigator } from "./BottomTabNavigator";
import Home from "../../screens/Home";

export type RootStackParamList = {
  Tabs: {};
  Home:{};
  Busca: {};
  Login: {};
   Profile: undefined;
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
      <Stack.Screen name="Login" component={Login}  options={{headerShown: true}}/>
      <Stack.Screen
        name="Tabs"
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
}

