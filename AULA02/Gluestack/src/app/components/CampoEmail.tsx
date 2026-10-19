import { Input, InputField } from "@/components/ui/input";

type Props = { value: string; onChangeText: (value: string) => void };

export default function CampoEmail({ value, onChangeText }: Props) {
  return (
    <Input className="bg-gray-800 mb-4">
      <InputField
        placeholder="E-mail"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        className="text-white"
        value={value}
        onChangeText={onChangeText}
      />
    </Input>
  );
}