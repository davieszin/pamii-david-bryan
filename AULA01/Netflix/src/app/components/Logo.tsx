import { Text, StyleSheet } from "react-native";

export default function Logo() {
  return <Text style={styles.logo}>NETFLIX</Text>;
}

const styles = StyleSheet.create({
  logo: {
    color: "#E50914",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
});