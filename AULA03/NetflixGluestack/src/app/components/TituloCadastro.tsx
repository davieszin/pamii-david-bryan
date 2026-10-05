import { Text } from "@/components/ui/text";
import { View } from "react-native";

export default function TituloCadastro() {
  return (
    <View className="mb-7">
      <Text
        size="3xl"
        bold
        className="text-white text-center"
      >
        Criar sua conta
      </Text>

      <Text className="text-gray-400 text-center mt-2">
        Comece sua experiência na Netflix.
      </Text>
    </View>
  );
}