import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";


export default function RootLayout() {

  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  

  return (
<>
      <StatusBar value="auto" />
      <Stack screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        headerStyle: {backgroundColor: theme.navBackground},
        headerTintColor: theme.title,
        headerTitleStyle: {
          fontWeight: 'bold'}
      }}>
        <Stack.Screen name="index" options={{title: 'Home'}} />
        <Stack.Screen name="(auth)" options={{headerShown: false}} />
 
      </Stack>
</>
  );
}
