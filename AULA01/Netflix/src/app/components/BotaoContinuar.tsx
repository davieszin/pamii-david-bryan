import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function BotaoContinuar() {
  return (
    <TouchableOpacity style={styles.botao}>
      <Text style={styles.texto}>Continuar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#E50914",
    height: 55,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  texto: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});