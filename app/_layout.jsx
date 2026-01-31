import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  StatusBar,
} from "react-native";
import React, { useCallback } from "react";
import { Slot, Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import { UserProvider } from "../contexts/UserContext";
import { BooksProvider } from "../contexts/BooksContext";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <UserProvider>
      <BooksProvider>
        <StatusBar value="auto" />
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title,
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ title: "Home" }} />
        </Stack>
      </BooksProvider>
    </UserProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
