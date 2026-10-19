import { TextInput, StyleSheet } from "react-native";

type Props = { value: string; onChangeText: (value: string) => void };

export default function CampoEmail({ value, onChangeText }: Props) {
  return (
    <TextInput
      style={styles.input}
      placeholder="E-mail"
      placeholderTextColor="#999"
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
      value={value}
      onChangeText={onChangeText}
      accessibilityLabel="E-mail"
    />
  );
}

const styles = StyleSheet.create({
  input: { backgroundColor: "#333", color: "#fff", height: 55, borderRadius: 4, paddingHorizontal: 15, marginBottom: 15 },
});