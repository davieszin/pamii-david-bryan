import { View, Text, StyleSheet, Platform } from "react-native";

import Logo from "./components/Logo";
import CampoEmail from "./components/CampoEmail";
import BotaoContinuar from "./components/BotaoContinuar";

export default function Cadastro() {
  return (
    <View style={styles.container}>

      <Logo />

      <Text style={styles.titulo}>
        Criar sua conta
      </Text>

      <Text style={styles.texto}>
        Digite seu e-mail para começar.
      </Text>

      <CampoEmail />

      <BotaoContinuar />

      <Text style={styles.rodape}>
        Já tem uma conta?{" "}
        <Text style={styles.entrar}>Entrar</Text>
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 30,
    justifyContent: "center",
    ...(Platform.OS === "web"
      ? {
          width: 390,
          height: 844,
          alignSelf: "center",
          marginVertical: 20,
          overflow: "hidden",
        }
      : {}),
  },

  titulo: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },

  texto: {
    color: "#aaa",
    fontSize: 16,
    marginBottom: 25,
  },

  rodape: {
    color: "#777",
    textAlign: "center",
    marginTop: 25,
  },

  entrar: {
    color: "#fff",
  },
});