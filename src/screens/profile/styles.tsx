import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#333",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  inputError: {
    borderColor: "#FF0000", // Borda vermelha para erro
  },
  errorText: {
    color: "#FF0000",
    marginBottom: 10,
    fontSize: 12,
    marginLeft: 5,
  },
  button: {
    backgroundColor: "#16A34A", // Azul padrão
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  login: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginLeft: 80,
  },
});
