import { View } from "react-native";
import { Text } from "@/components/ui/text";

export default function TermosCadastro() {
  return (
    <View className="flex-row items-center mb-6">
      
      <View className="w-5 h-5 border border-gray-500 rounded-sm mr-3 items-center justify-center">
        <Text className="text-red-600 font-bold">
          ✓
        </Text>
      </View>

      <Text className="text-gray-400 text-sm flex-1">
        Aceito os termos de uso e a política de privacidade.
      </Text>

    </View>
  );
}