import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

export function Input({ ...rest }: TextInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor="#888"
        {...rest}
      />
    </View>
  );
}