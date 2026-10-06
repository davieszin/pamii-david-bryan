import { View, StyleSheet, Platform } from "react-native";

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
    <View
      className="flex-1 bg-black justify-center px-6"
      style={styles.mobileFrame}
    >

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

const styles = StyleSheet.create({
  mobileFrame: {
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
});