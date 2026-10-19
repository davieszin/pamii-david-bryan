import { Pressable, View } from "react-native";
import { Text } from "@/components/ui/text";

type Props = { checked: boolean; onToggle: () => void };

export default function TermosCadastro({ checked, onToggle }: Props) {
  return (
    <Pressable onPress={onToggle} accessibilityRole="checkbox" accessibilityState={{ checked }} className="flex-row items-center mb-6">
      <View className={checked ? "w-5 h-5 border border-red-600 bg-red-600 rounded-sm mr-3 items-center justify-center" : "w-5 h-5 border border-gray-500 rounded-sm mr-3 items-center justify-center"}>
        {checked && <Text className="text-white font-bold">✓</Text>}
      </View>
      <Text className="text-gray-400 text-sm flex-1">Aceito os termos de uso e a política de privacidade.</Text>
    </Pressable>
  );
}