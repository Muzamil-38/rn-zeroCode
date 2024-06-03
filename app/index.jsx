import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="h-full">
      <Text>Hello</Text>
      <StatusBar style="auto" />
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Link href="/perm">Go to Permission</Link>
    </SafeAreaView>
  );
}
