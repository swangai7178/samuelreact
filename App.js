/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SigninScreen from "./src/screens/signin/signinscreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SigninScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  },
});
