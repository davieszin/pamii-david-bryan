import {
  Input,
  InputField,
} from "@/components/ui/input";

export default function CampoEmail() {
  return (
    <Input className="bg-gray-800 mb-4">
      <InputField
        placeholder="E-mail"
        placeholderTextColor="#999"
        keyboardType="email-address"
        className="text-white"
      />
    </Input>
  );
}