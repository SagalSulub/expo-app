import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Home() {
  // Sagal Mohamed
  // May 28 assignment

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#f2f2f2" }}>

      <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 20, color: "#0a6e3f", fontWeight: "bold" }}>
        TD Mobil Login
      </Text>

      <TextInput
        placeholder="Username or Access Card"
        style={{
          borderWidth: 1,
          borderColor: "#249835",
          padding: 10,
          marginBottom: 10,
          backgroundColor: "white",
          borderRadius: 6
        }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: "#249835",
          padding: 10,
          marginBottom: 20,
          backgroundColor: "white",
          borderRadius: 6
        }}
      />

      <TouchableOpacity
        onPress={() => Alert.alert("Login Button pressed")}
        style={{
          backgroundColor: "#0a6e3f",
          padding: 14,
          marginBottom: 10,
          borderRadius: 6
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Alert.alert("Alert Button pressed")}
        style={{
          backgroundColor: "#0a6e3f",
          padding: 12,
          borderRadius: 6
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Alert</Text>
      </TouchableOpacity>

    </View>
  );
}