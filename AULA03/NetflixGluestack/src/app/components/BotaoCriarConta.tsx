import { Button, ButtonText } from "@/components/ui/button";

type Props = { onPress: () => void };

export default function BotaoCriarConta({ onPress }: Props) {
  return (
    <Button className="bg-red-600 h-14 rounded-md mb-6" onPress={onPress}>
      <ButtonText className="text-white font-bold">Criar conta</ButtonText>
    </Button>
  );
}