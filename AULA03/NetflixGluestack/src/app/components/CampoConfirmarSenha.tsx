import {
  Input,
  InputField,
} from "@/components/ui/input";

export default function CampoConfirmarSenha() {
  return (
    <Input className="bg-zinc-800 border-zinc-700 h-14 mb-5 rounded-md">
      <InputField
        placeholder="Confirmar senha"
        placeholderTextColor="#999"
        secureTextEntry
        className="text-white"
      />
    </Input>
  );
}