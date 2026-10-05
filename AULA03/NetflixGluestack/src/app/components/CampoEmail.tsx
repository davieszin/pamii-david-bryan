import {
  Input,
  InputField,
} from "@/components/ui/input";

export default function CampoEmail() {
  return (
    <Input className="bg-zinc-800 border-zinc-700 h-14 mb-4 rounded-md">
      <InputField
        placeholder="E-mail"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        className="text-white"
      />
    </Input>
  );
}