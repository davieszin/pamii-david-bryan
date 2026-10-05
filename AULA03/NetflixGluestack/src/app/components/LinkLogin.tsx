import { View } from "react-native";
import { Text } from "@/components/ui/text";

export default function LinkLogin() {
  return (
    <View className="flex-row justify-center">
      
      <Text className="text-gray-400">
        Já possui uma conta?
      </Text>

      <Text className="text-white font-bold ml-1">
        Entrar
      </Text>

    </View>
  );
}