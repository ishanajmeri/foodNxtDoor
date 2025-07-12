import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type WelcomeBannerProps = {
  message: string;
  subMessage?: string;
};

export const WelcomeBanner = ({ message, subMessage }: WelcomeBannerProps) => {
  const backgroundColor = useThemeColor({}, "background");
  return (
    <View style={{ ...styles.container, backgroundColor }}>
      <Text style={styles.message}>{message}</Text>
      {subMessage && <Text style={styles.subMessage}>{subMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    margin: 8,
  },
  message: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  subMessage: {
    color: "rgba(255, 255, 255, 0.8)",
    marginTop: 4,
  },
});
