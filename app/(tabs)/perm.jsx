import { SafeAreaProvider } from "react-native-safe-area-context";
import ProductsScreen from "../../components/ProductScreen";

const Perm = () => {
  return (
    <SafeAreaProvider>
      <ProductsScreen />
    </SafeAreaProvider>
  );
};

export default Perm;
