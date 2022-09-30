/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import React from "react";
import { View, Text } from "react-native";
import { Image, StyleSheet } from "react-native";
import Logo from "../../../assets/images/spotify.png";

const SigninScreen = () => {
  return (
    <View>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <Text>Sign in Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: 100,
  },
});
export default SigninScreen;
