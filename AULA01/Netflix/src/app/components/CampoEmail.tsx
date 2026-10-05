import { TextInput, StyleSheet } from "react-native";

export default function CampoEmail() {
  return (
    <TextInput
      style={styles.input}
      placeholder="E-mail"
      placeholderTextColor="#999"
      keyboardType="email-address"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#333",
    color: "#fff",
    height: 55,
    borderRadius: 4,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
});