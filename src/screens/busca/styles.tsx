import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121315",
    padding: 20,
  },

  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    backgroundColor: "#1E1E1E",
    padding: 12,
    borderRadius: 8,
    color: "#fff",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#333",
    marginBottom: 15,
  },

  list: {
    marginTop: 10,
  },

  item: {
    backgroundColor: "#1E1E1E",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#333",
  },

  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
  },

  itemDescription: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 6,
  },

  itemCalories: {
    fontSize: 14,
    color: "#a370f7",
    fontWeight: "bold",
  },

  emptyText: {
    color: "#888",
    marginTop: 20,
    textAlign: "center",
  },

  error: {
    color: "#ff6b6b",
    backgroundColor: "#3a0000",
    padding: 10,
    borderRadius: 8,
    textAlign: "center",
    marginBottom: 10,
  },

  loading: {
    marginVertical: 15,
  },
});
