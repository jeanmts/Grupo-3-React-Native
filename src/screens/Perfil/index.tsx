import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { styles } from "./perfil.styles";
import { RootStackParamList } from "../../Routes/navigations/Stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { BottomTabNav } from "../../Routes/navigations/BottomTabNavigator";

type PerfilScreenProps = BottomTabNavigationProp<BottomTabNav, "Perfil">;


const Perfil:React.FC<{ navigation: PerfilScreenProps }> = ({ navigation, }) =>  {

    const { user, logout } = useContext(AuthContext);


if (!user) return null;


return (
<View style={styles.container}>
<Text style={styles.title}>Meu Perfil</Text>


<View style={styles.card}>
<Image source={{ uri: user.foto }} style={styles.avatar} />


<Text style={styles.label}>Nome:</Text>
<Text style={styles.value}>{user.nome}</Text>


<Text style={styles.label}>Email:</Text>
<Text style={styles.value}>{user.email}</Text>
</View>


<TouchableOpacity
style={styles.button}
onPress={() => navigation.navigate("EditProfile")}
>
<Text style={styles.buttonText}>Editar Perfil</Text>
</TouchableOpacity>


<TouchableOpacity style={[styles.button, styles.logout]} onPress={logout}>
<Text style={styles.buttonText}>Sair</Text>
</TouchableOpacity>
</View>
);
}
export default Perfil;