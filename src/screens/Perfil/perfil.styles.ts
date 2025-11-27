import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    padding: 30,
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
    marginTop: 20,
  },

  errorText: {
    fontSize: 20,
    color: "red",
  },

  userCard: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderRadius: 16,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#EAEAEA",
  },

  userName: {
    fontSize: 18,
    fontWeight: "600",
  },

  userPlan: {
    marginTop: 2,
    color: "#7B7B7B",
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 10,
    color: "#7B7B7B",
    marginTop: -10,
  },

  goalsCard: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  goalLabel: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },

  calorieBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F5FB",
    padding: 12,
    borderRadius: 10,
    justifyContent: "space-between",
    marginBottom: 20,
  },

  calorieNumber: {
    fontSize: 22,
    fontWeight: "bold",
  },

  kcalText: {
    color: "#777",
  },

  macroRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  macroLabel: {
    fontSize: 15,
  },

  macroBox: {
    width: 80,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F1F5FB",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  saveButton: {
    backgroundColor: "#27AE60",
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 10,
  },

  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
  },

  preferenceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    marginBottom: 35,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  preferenceLabel: {
    fontSize: 16,
  },

  // LOGOUT
  logoutBtn: {
    marginTop: -13,
    alignSelf: "center",
    padding: 15,
  },

  logoutText: {
    color: "#FF3B30",
    fontSize: 18,
    fontWeight: "600",
  },

  
  grafico:{
    marginLeft: 90,
    width: 200,
    height: 150,
    marginTop: 0,
  },
  grafCard:{
    backgroundColor: "#fff",
      borderRadius: 16,
      marginBottom: 15,
      shadowColor: "#000",
      shadowOpacity: 0.05,
      shadowRadius: 4,
      height: 150,
  }

});
