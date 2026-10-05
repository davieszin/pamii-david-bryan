import {
  Input,
  InputField,
} from "@/components/ui/input";

export default function CampoSenha() {
  return (
    <Input className="bg-zinc-800 border-zinc-700 h-14 mb-4 rounded-md">
      <InputField
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        className="text-white"
      />
    </Input>
  );
}