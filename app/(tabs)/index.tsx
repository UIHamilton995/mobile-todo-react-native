import { createHomeStyles } from "@/assets/styles/home.styles";
import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient"

export default function Index() {

  const { toggleDarkMode, colors } = useTheme()
  const homeStyles = createHomeStyles(colors)

  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
      <SafeAreaView style={homeStyles.safeArea}>
        <Text>Hi</Text>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>Click to switch modes</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
