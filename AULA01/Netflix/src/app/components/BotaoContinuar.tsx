import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = { onPress: () => void };

export default function BotaoContinuar({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress} accessibilityRole="button">
      <Text style={styles.texto}>Continuar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: { backgroundColor: "#E50914", height: 55, borderRadius: 4, justifyContent: "center", alignItems: "center" },
  texto: { color: "#fff", fontSize: 17, fontWeight: "bold" },
});