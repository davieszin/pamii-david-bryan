import { Button, ButtonText } from "@/components/ui/button";

type Props = { onPress: () => void };

export default function BotaoContinuar({ onPress }: Props) {
  return (
    <Button className="bg-red-600" onPress={onPress}>
      <ButtonText>Continuar</ButtonText>
    </Button>
  );
}