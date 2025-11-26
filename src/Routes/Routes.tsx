import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./navigations/Stack";
import { UserProvider } from "../context/UserContext";
import { AuthProvider } from "../context/AuthContext";

function Routes() {
  return (
    <AuthProvider>
      <UserProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </UserProvider>
    </AuthProvider>
  );
}

export default Routes;
