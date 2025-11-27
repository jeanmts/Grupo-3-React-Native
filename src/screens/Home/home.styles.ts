import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F7FAFC",
  },
header: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 25,
  paddingTop: 20, // ajuste o valor como preferir
},

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2D3748",
  },

  subtitle: {
    fontSize: 14,
    color: "#4A5568",
  },

  profileButton: {
    padding: 5,
  },

  section: {
    marginTop: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2D3748",
    marginBottom: 15,
  },

  recoContainer: {
    paddingBottom: 20,
  },

  recoCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },

  diamond: {
    width: 55,
    height: 55,
    backgroundColor: "#EDF2F7",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "45deg" }],
    borderRadius: 12,
    marginRight: 20,
  },

  // Endireita o ícone dentro do diamante
  diamondInner: {
    transform: [{ rotate: "-45deg" }],
    alignItems: "center",
    justifyContent: "center",
  },

  // Quando está marcado (verde/azul/etc)
  diamondActive: {
    backgroundColor: "#2ECC71",
  },

  recoText: {
    fontSize: 16,
    color: "#2D3748",
    fontWeight: "500",
  },
});
