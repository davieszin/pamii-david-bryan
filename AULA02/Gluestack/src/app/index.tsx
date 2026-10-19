import { useState } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Text } from "@/components/ui/text";
import Logo from "./components/Logo";
import CampoEmail from "./components/CampoEmail";
import BotaoContinuar from "./components/BotaoContinuar";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function continuar() {
    if (!email.trim()) { setMensagem("Digite seu e-mail para continuar."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) { setMensagem("Digite um e-mail válido."); return; }
    setMensagem("E-mail validado! Esta é uma demonstração de cadastro.");
  }

  return (
    <View className="flex-1 bg-black justify-center p-8" style={styles.mobileFrame}>
      <Logo />
      <Text size="2xl" bold className="text-white mb-3">Criar sua conta</Text>
      <Text className="text-gray-400 mb-6">Digite seu e-mail para começar.</Text>
      <CampoEmail value={email} onChangeText={(value) => { setEmail(value); setMensagem(""); }} />
      <BotaoContinuar onPress={continuar} />
      {!!mensagem && <Text className="text-white mt-4 text-center">{mensagem}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  mobileFrame: { ...(Platform.OS === "web" ? { width: 390, height: 844, alignSelf: "center", marginVertical: 20, overflow: "hidden" as const } : {}) },
});