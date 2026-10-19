import { useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import Logo from "./components/Logo";
import CampoEmail from "./components/CampoEmail";
import BotaoContinuar from "./components/BotaoContinuar";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function continuar() {
    if (!email.trim()) {
      setMensagem("Digite seu e-mail para continuar.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setMensagem("Digite um e-mail válido.");
      return;
    }
    setMensagem("E-mail validado! Esta é uma demonstração de cadastro.");
  }

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.titulo}>Criar sua conta</Text>
      <Text style={styles.texto}>Digite seu e-mail para começar.</Text>
      <CampoEmail value={email} onChangeText={(value) => { setEmail(value); setMensagem(""); }} />
      <BotaoContinuar onPress={continuar} />
      {!!mensagem && <Text accessibilityRole="alert" style={styles.mensagem}>{mensagem}</Text>}
      <Text style={styles.rodape}>
        Já tem uma conta?{" "}
        <Text style={styles.entrar} onPress={() => setMensagem("A tela de login ainda não faz parte desta atividade.")}>Entrar</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: "#000", padding: 30, justifyContent: "center",
    ...(Platform.OS === "web" ? { width: 390, height: 844, alignSelf: "center", marginVertical: 20, overflow: "hidden" as const } : {}),
  },
  titulo: { color: "#fff", fontSize: 28, fontWeight: "bold", marginBottom: 12 },
  texto: { color: "#aaa", fontSize: 16, marginBottom: 25 },
  mensagem: { color: "#fff", marginTop: 14, textAlign: "center" },
  rodape: { color: "#777", textAlign: "center", marginTop: 25 },
  entrar: { color: "#fff", textDecorationLine: "underline" },
});