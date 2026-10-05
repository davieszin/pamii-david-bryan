import { View } from "react-native";
import { Text } from "@/components/ui/text";

import Logo from "./components/Logo";
import CampoEmail from "./components/CampoEmail";
import BotaoContinuar from "./components/BotaoContinuar";

export default function Cadastro() {
  return (
    <View className="flex-1 bg-black justify-center p-8">

      <Logo />

      <Text
        size="2xl"
        bold
        className="text-white mb-3"
      >
        Criar sua conta
      </Text>

      <Text className="text-gray-400 mb-6">
        Digite seu e-mail para começar.
      </Text>

      <CampoEmail />

      <BotaoContinuar />

    </View>
  );
}