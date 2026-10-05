import { View } from "react-native";

import Logo from "./components/Logo";
import TituloCadastro from "./components/TituloCadastro";
import CampoEmail from "./components/CampoEmail";
import CampoSenha from "./components/CampoSenha";
import CampoConfirmarSenha from "./components/CampoConfirmarSenha";
import TermosCadastro from "./components/TermosCadastro";
import BotaoCriarConta from "./components/BotaoCriarConta";
import LinkLogin from "./components/LinkLogin";

export default function Index() {
  return (
    <View className="flex-1 bg-black justify-center px-6">

      <View className="w-full max-w-[430px] self-center">

        <Logo />

        <TituloCadastro />

        <CampoEmail />

        <CampoSenha />

        <CampoConfirmarSenha />

        <TermosCadastro />

        <BotaoCriarConta />

        <LinkLogin />

      </View>

    </View>
  );
}