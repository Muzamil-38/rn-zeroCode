import { Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack className="flex-1 justify-center items-center">
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
