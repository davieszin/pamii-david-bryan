import { Pressable } from "react-native";
import { Text } from "@/components/ui/text";

type Props = { onPress: () => void };

export default function LinkLogin({ onPress }: Props) {
  return (
    <Pressable onPress={onPress} accessibilityRole="button" className="flex-row justify-center">
      <Text className="text-gray-400">Já possui uma conta?</Text>
      <Text className="text-white font-bold ml-1 underline">Entrar</Text>
    </Pressable>
  );
}