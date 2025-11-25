import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./navigations/Stack";

function Routes() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default Routes;
