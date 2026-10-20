import { useState } from "react";
import { View, StyleSheet, Platform, ScrollView, TextInput, Pressable } from "react-native";
import { Text } from "@/components/ui/text";
import Logo from "./components/Logo";
import CampoEmail from "./components/CampoEmail";
import BotaoContinuar from "./components/BotaoContinuar";

type Tela = "email" | "senha" | "login" | "inicio";
export default function Cadastro() {
  const [tela,setTela] = useState<Tela>("email");
  const [email,setEmail] = useState(""); const [senha,setSenha] = useState(""); const [senhaLogin,setSenhaLogin] = useState("");
  const [emailCadastrado,setEmailCadastrado] = useState(""); const [senhaCadastrada,setSenhaCadastrada] = useState(""); const [mensagem,setMensagem] = useState("");
  function continuar(){ if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())){setMensagem("Digite um e-mail válido.");return;} setMensagem("");setTela("senha");}
  function criarConta(){if(senha.length<6){setMensagem("A senha precisa ter pelo menos 6 caracteres.");return;}setEmailCadastrado(email.trim().toLowerCase());setSenhaCadastrada(senha);setMensagem("Conta de demonstração criada! Agora você pode entrar.");setSenhaLogin("");setTela("login");}
  function entrar(){if(email.trim().toLowerCase()===emailCadastrado&&senhaLogin===senhaCadastrada&&emailCadastrado){setMensagem("");setTela("inicio");}else setMensagem("E-mail ou senha incorretos. Crie uma conta de demonstração primeiro.");}
  const link = (label:string,action:()=>void) => <Pressable onPress={action}><Text className="text-white text-center mt-5 underline">{label}</Text></Pressable>;
  return <ScrollView contentContainerStyle={styles.fundo}><View className="flex-1 bg-black justify-center p-8" style={styles.mobileFrame}>
    <Logo />
    {tela==="email" && <><Text size="2xl" bold className="text-white mb-3">Criar sua conta</Text><Text className="text-gray-400 mb-6">Digite seu e-mail para começar.</Text><CampoEmail value={email} onChangeText={v=>{setEmail(v);setMensagem("");}}/><BotaoContinuar onPress={continuar}/>{link("Já tem uma conta? Entrar",()=>{setMensagem("");setTela("login");})}</>}
    {tela==="senha" && <><Text size="2xl" bold className="text-white mb-3">Crie uma senha</Text><Text className="text-gray-400 mb-5">{email}</Text><TextInput style={styles.input} placeholder="Senha (mínimo 6 caracteres)" placeholderTextColor="#999" secureTextEntry value={senha} onChangeText={v=>{setSenha(v);setMensagem("");}}/><BotaoContinuar onPress={criarConta}/>{link("Voltar",()=>{setMensagem("");setTela("email");})}</>}
    {tela==="login" && <><Text size="2xl" bold className="text-white mb-3">Entrar</Text><Text className="text-gray-400 mb-5">Entre com a conta criada nesta demonstração.</Text><CampoEmail value={email} onChangeText={v=>{setEmail(v);setMensagem("");}}/><TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#999" secureTextEntry value={senhaLogin} onChangeText={v=>{setSenhaLogin(v);setMensagem("");}}/><BotaoContinuar onPress={entrar}/>{link("Não tem conta? Criar conta",()=>{setMensagem("");setTela("email");})}</>}
    {tela==="inicio" && <><Text size="2xl" bold className="text-white mb-3">Você entrou!</Text><Text className="text-gray-300 mb-5">Bem-vindo(a), {emailCadastrado}. Tela inicial demonstrativa.</Text>{link("Sair",()=>{setMensagem("");setTela("login");})}</>}
    {!!mensagem && <Text className="text-white mt-4 text-center">{mensagem}</Text>}
    <Text className="text-gray-500 text-xs text-center mt-7">Projeto acadêmico demonstrativo. A conta fica apenas nesta sessão.</Text>
  </View></ScrollView>;
}
const styles=StyleSheet.create({fundo:{flexGrow:1,backgroundColor:"#000",justifyContent:"center"},mobileFrame:{...(Platform.OS==="web"?{width:390,minHeight:650,alignSelf:"center",marginVertical:20,overflow:"hidden" as const}:{})},input:{backgroundColor:"#27272a",color:"#fff",height:55,borderRadius:5,paddingHorizontal:15,marginBottom:15}});