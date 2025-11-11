import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  const { toggleDarkMode } = useTheme()

  return (
    <View style={styles.container}>
      <Text style={styles.content}>`Welcome to Hamilton&apos;s mobile expo app`</Text>
      <Text style={styles.wip}>Hi</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Click to switch modes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    flexDirection: "column"
  }, 
  content: {
    fontSize: 18,
    fontWeight: "bold"
  },
  wip: {
    fontSize: 20,
    fontWeight: "bold"
  }
})