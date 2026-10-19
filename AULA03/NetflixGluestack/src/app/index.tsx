import { useState } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Text } from "@/components/ui/text";
import Logo from "./components/Logo";
import TituloCadastro from "./components/TituloCadastro";
import CampoEmail from "./components/CampoEmail";
import CampoSenha from "./components/CampoSenha";
import CampoConfirmarSenha from "./components/CampoConfirmarSenha";
import TermosCadastro from "./components/TermosCadastro";
import BotaoCriarConta from "./components/BotaoCriarConta";
import LinkLogin from "./components/LinkLogin";

export default function Index() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [aceitaTermos, setAceitaTermos] = useState(false);
  const [mensagem, setMensagem] = useState("");

  function criarConta() {
    if (!email.trim() || !senha || !confirmarSenha) { setMensagem("Preencha todos os campos."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) { setMensagem("Digite um e-mail válido."); return; }
    if (senha.length < 6) { setMensagem("A senha precisa ter pelo menos 6 caracteres."); return; }
    if (senha !== confirmarSenha) { setMensagem("As senhas não coincidem."); return; }
    if (!aceitaTermos) { setMensagem("Marque a opção de aceite dos termos."); return; }
    setMensagem("Cadastro validado com sucesso! Esta é uma demonstração, sem criação de conta real.");
  }

  return (
    <View className="flex-1 bg-black justify-center px-6" style={styles.mobileFrame}>
      <View className="w-full max-w-[430px] self-center">
        <Logo />
        <TituloCadastro />
        <CampoEmail value={email} onChangeText={(v) => { setEmail(v); setMensagem(""); }} />
        <CampoSenha value={senha} onChangeText={(v) => { setSenha(v); setMensagem(""); }} />
        <CampoConfirmarSenha value={confirmarSenha} onChangeText={(v) => { setConfirmarSenha(v); setMensagem(""); }} />
        <TermosCadastro checked={aceitaTermos} onToggle={() => { setAceitaTermos(!aceitaTermos); setMensagem(""); }} />
        <BotaoCriarConta onPress={criarConta} />
        <LinkLogin onPress={() => setMensagem("A tela de login ainda não faz parte desta atividade.")} />
        {!!mensagem && <Text className="text-white text-center mt-4">{mensagem}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mobileFrame: { ...(Platform.OS === "web" ? { width: 390, height: 844, alignSelf: "center", marginVertical: 20, overflow: "hidden" as const } : {}) },
});