import { Input, InputField } from "@/components/ui/input";

type Props = { value: string; onChangeText: (value: string) => void };

export default function CampoSenha({ value, onChangeText }: Props) {
  return (
    <Input className="bg-zinc-800 border-zinc-700 h-14 mb-4 rounded-md">
      <InputField placeholder="Senha" placeholderTextColor="#999" secureTextEntry className="text-white" value={value} onChangeText={onChangeText} />
    </Input>
  );
}