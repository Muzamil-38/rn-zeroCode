import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="h-full">
      <Text>Hello</Text>
      <StatusBar style="auto" />
      <Link href="/perm">Go to Permission</Link>
    </SafeAreaView>
  );
}
