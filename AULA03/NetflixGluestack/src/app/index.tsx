import { useState } from "react";
import { View, StyleSheet, Platform, ScrollView, TextInput, Pressable } from "react-native";
import { Text } from "@/components/ui/text";
import Logo from "./components/Logo";
import TituloCadastro from "./components/TituloCadastro";
import CampoEmail from "./components/CampoEmail";
import CampoSenha from "./components/CampoSenha";
import CampoConfirmarSenha from "./components/CampoConfirmarSenha";
import TermosCadastro from "./components/TermosCadastro";
import BotaoCriarConta from "./components/BotaoCriarConta";
import LinkLogin from "./components/LinkLogin";

type Tela = "cadastro" | "login" | "inicio";
export default function Index() {
  const [tela,setTela]=useState<Tela>("cadastro");
  const [email,setEmail]=useState(""); const [senha,setSenha]=useState(""); const [confirmarSenha,setConfirmarSenha]=useState(""); const [aceitaTermos,setAceitaTermos]=useState(false);
  const [emailLogin,setEmailLogin]=useState(""); const [senhaLogin,setSenhaLogin]=useState(""); const [emailCadastrado,setEmailCadastrado]=useState(""); const [senhaCadastrada,setSenhaCadastrada]=useState(""); const [mensagem,setMensagem]=useState("");
  function criarConta(){
    if(!email.trim()||!senha||!confirmarSenha){setMensagem("Preencha todos os campos.");return;}
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())){setMensagem("Digite um e-mail válido.");return;}
    if(senha.length<6){setMensagem("A senha precisa ter pelo menos 6 caracteres.");return;}
    if(senha!==confirmarSenha){setMensagem("As senhas não coincidem.");return;}
    if(!aceitaTermos){setMensagem("Marque a opção de aceite dos termos.");return;}
    setEmailCadastrado(email.trim().toLowerCase());setSenhaCadastrada(senha);setEmailLogin(email.trim());setSenhaLogin("");setMensagem("Cadastro demonstrativo criado! Entre com seus dados.");setTela("login");
  }
  function entrar(){if(emailLogin.trim().toLowerCase()===emailCadastrado&&senhaLogin===senhaCadastrada&&emailCadastrado){setMensagem("");setTela("inicio");}else setMensagem("E-mail ou senha incorretos. Crie uma conta primeiro.");}
  const link=(label:string,action:()=>void)=><Pressable onPress={action}><Text className="text-white text-center mt-5 underline">{label}</Text></Pressable>;
  return <ScrollView contentContainerStyle={styles.fundo}><View className="flex-1 bg-black justify-center px-6 py-8" style={styles.mobileFrame}><View className="w-full max-w-[430px] self-center">
    <Logo/>
    {tela==="cadastro"&&<><TituloCadastro/><CampoEmail value={email} onChangeText={v=>{setEmail(v);setMensagem("");}}/><CampoSenha value={senha} onChangeText={v=>{setSenha(v);setMensagem("");}}/><CampoConfirmarSenha value={confirmarSenha} onChangeText={v=>{setConfirmarSenha(v);setMensagem("");}}/><TermosCadastro checked={aceitaTermos} onToggle={()=>{setAceitaTermos(!aceitaTermos);setMensagem("");}}/><BotaoCriarConta onPress={criarConta}/><LinkLogin onPress={()=>{setMensagem("");setTela("login");}}/></>}
    {tela==="login"&&<><Text size="2xl" bold className="text-white mb-3">Entrar</Text><Text className="text-gray-400 mb-5">Use a conta criada nesta demonstração.</Text><CampoEmail value={emailLogin} onChangeText={v=>{setEmailLogin(v);setMensagem("");}}/><TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#999" secureTextEntry value={senhaLogin} onChangeText={v=>{setSenhaLogin(v);setMensagem("");}}/><Pressable onPress={entrar} className="bg-red-600 rounded-md h-14 items-center justify-center"><Text className="text-white font-bold">Entrar</Text></Pressable>{link("Voltar para cadastro",()=>{setMensagem("");setTela("cadastro");})}</>}
    {tela==="inicio"&&<><Text size="2xl" bold className="text-white mb-3">Login realizado!</Text><Text className="text-gray-300 mb-5">Bem-vindo(a), {emailCadastrado}. Esta é a tela inicial demonstrativa.</Text>{link("Sair",()=>{setMensagem("");setTela("login");})}</>}
    {!!mensagem&&<Text className="text-white text-center mt-4">{mensagem}</Text>}
    <Text className="text-gray-500 text-xs text-center mt-7">Projeto acadêmico demonstrativo. Os dados existem apenas nesta sessão.</Text>
  </View></View></ScrollView>;
}
const styles=StyleSheet.create({fundo:{flexGrow:1,backgroundColor:"#000",justifyContent:"center"},mobileFrame:{...(Platform.OS==="web"?{width:390,minHeight:700,alignSelf:"center",marginVertical:20,overflow:"hidden" as const}:{})},input:{backgroundColor:"#27272a",color:"#fff",height:55,borderRadius:5,paddingHorizontal:15,marginBottom:15}});