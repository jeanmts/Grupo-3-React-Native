import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";

type Props = {
  size?: number | "small" | "large";
  color?: string;
};

export function LoadingSpinner({ size = "large", color = "#fff" }: Props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}
