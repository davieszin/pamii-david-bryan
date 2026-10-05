import {
  Button,
  ButtonText,
} from "@/components/ui/button";

export default function BotaoCriarConta() {
  return (
    <Button className="bg-red-600 h-14 rounded-md mb-6">
      <ButtonText className="text-white font-bold">
        Criar conta
      </ButtonText>
    </Button>
  );
}