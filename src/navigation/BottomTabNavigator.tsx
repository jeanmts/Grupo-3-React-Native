import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Search } from "../screens/busca";
import { Profile } from "../screens/profile";
import { Ionicons } from "@expo/vector-icons";

export type TabsParamList = {
  Search: undefined;
  Profile: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<TabsParamList>();

export function Tabs() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#000" },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#888",
      }}
    >
      <Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
