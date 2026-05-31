import { Stack } from "expo-router";

export default function RootLayout() {
  // Sagal Mohamed 
  // Date: May 28
  // basic stack layout for the app

  return (
    <Stack
      screenOptions={{
        headerShown: false, // hiding the header for now
      }}
    />
  );
}