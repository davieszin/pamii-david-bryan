import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, ScrollView } from "react-native";
import Logo from "./components/Logo";
import CampoEmail from "./components/CampoEmail";
import BotaoContinuar from "./components/BotaoContinuar";

type Tela = "email" | "senha" | "login" | "inicio";

export default function Cadastro() {
  const [tela, setTela] = useState<Tela>("email");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaLogin, setSenhaLogin] = useState("");
  const [emailCadastrado, setEmailCadastrado] = useState("");
  const [senhaCadastrada, setSenhaCadastrada] = useState("");
  const [mensagem, setMensagem] = useState("");

  function continuar() {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setMensagem("Digite um e-mail válido."); return;
    }
    setMensagem(""); setTela("senha");
  }
  function criarConta() {
    if (senha.length < 6) { setMensagem("A senha precisa ter pelo menos 6 caracteres."); return; }
    setEmailCadastrado(email.trim().toLowerCase()); setSenhaCadastrada(senha);
    setMensagem("Conta de demonstração criada! Agora você pode entrar.");
    setTela("login"); setSenhaLogin("");
  }
  function entrar() {
    if (email.trim().toLowerCase() === emailCadastrado && senhaLogin === senhaCadastrada && emailCadastrado) {
      setMensagem(""); setTela("inicio");
    } else setMensagem("E-mail ou senha incorretos. Crie uma conta de demonstração primeiro.");
  }
  const voltar = () => { setMensagem(""); setTela(tela === "senha" ? "email" : "email"); };

  return (
    <ScrollView contentContainerStyle={styles.fundo}>
      <View style={styles.container}>
        <Logo />
        {tela === "email" && <>
          <Text style={styles.titulo}>Criar sua conta</Text>
          <Text style={styles.texto}>Digite seu e-mail para começar.</Text>
          <CampoEmail value={email} onChangeText={v => { setEmail(v); setMensagem(""); }} />
          <BotaoContinuar onPress={continuar} />
          <Text style={styles.rodape}>Já tem uma conta? <Text style={styles.link} onPress={() => { setMensagem(""); setTela("login"); }}>Entrar</Text></Text>
        </>}
        {tela === "senha" && <>
          <Text style={styles.titulo}>Crie uma senha</Text>
          <Text style={styles.texto}>E-mail: {email}</Text>
          <TextInput style={styles.input} placeholder="Senha (mínimo 6 caracteres)" placeholderTextColor="#999" secureTextEntry value={senha} onChangeText={v => { setSenha(v); setMensagem(""); }} />
          <BotaoContinuar onPress={criarConta} />
          <Text style={styles.linkCentral} onPress={voltar}>Voltar</Text>
        </>}
        {tela === "login" && <>
          <Text style={styles.titulo}>Entrar</Text>
          <Text style={styles.texto}>Entre com a conta criada nesta demonstração.</Text>
          <CampoEmail value={email} onChangeText={v => { setEmail(v); setMensagem(""); }} />
          <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#999" secureTextEntry value={senhaLogin} onChangeText={v => { setSenhaLogin(v); setMensagem(""); }} />
          <BotaoContinuar onPress={entrar} />
          <Text style={styles.rodape}>Não tem conta? <Text style={styles.link} onPress={() => { setMensagem(""); setTela("email"); }}>Criar conta</Text></Text>
        </>}
        {tela === "inicio" && <>
          <Text style={styles.titulo}>Você entrou!</Text>
          <Text style={styles.texto}>Bem-vindo(a), {emailCadastrado}. Esta é a tela inicial demonstrativa.</Text>
          <TouchableOpacity style={styles.botaoSecundario} onPress={() => { setTela("login"); setMensagem(""); }}><Text style={styles.botaoSecundarioTexto}>Sair</Text></TouchableOpacity>
        </>}
        {!!mensagem && <Text accessibilityRole="alert" style={styles.mensagem}>{mensagem}</Text>}
        <Text style={styles.aviso}>Projeto acadêmico demonstrativo. A conta fica apenas nesta sessão.</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  fundo:{flexGrow:1,backgroundColor:"#000",justifyContent:"center",paddingVertical:20},
  container:{flex:1,backgroundColor:"#000",padding:30,justifyContent:"center",...(Platform.OS==="web"?{width:390,minHeight:650,alignSelf:"center",overflow:"hidden" as const}:{})},
  titulo:{color:"#fff",fontSize:28,fontWeight:"bold",marginBottom:12},
  texto:{color:"#aaa",fontSize:16,marginBottom:25,lineHeight:23},
  input:{backgroundColor:"#333",color:"#fff",height:55,borderRadius:4,paddingHorizontal:15,marginBottom:15},
  mensagem:{color:"#fff",marginTop:14,textAlign:"center"},
  rodape:{color:"#777",textAlign:"center",marginTop:25},
  link:{color:"#fff",textDecorationLine:"underline",fontWeight:"bold"},
  linkCentral:{color:"#fff",textAlign:"center",marginTop:20,textDecorationLine:"underline"},
  aviso:{color:"#666",fontSize:11,textAlign:"center",marginTop:28},
  botaoSecundario:{backgroundColor:"#333",padding:15,borderRadius:4,alignItems:"center"},
  botaoSecundarioTexto:{color:"#fff",fontWeight:"bold"}
});