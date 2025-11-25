import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2D3748",
    marginTop: 40,
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",

    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },

  list: {
    marginTop: 20,
  },

  emptyText: {
    textAlign: "center",
    marginTop: 30,
    color: "#888",
    fontSize: 15,
  },

  item: {
    backgroundColor: "#FFF",
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 2,
  },

  itemName: {
    fontSize: 17,
    fontWeight: "600",
    color: "#2D3748",
  },

  itemCalories: {
    fontSize: 14,
    color: "#718096",
    marginTop: 4,
  },
});