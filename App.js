import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./components/Main";
const image = require("./assets/logo.png");
export default function App() {
  return (
    <SafeAreaProvider>
      <View className="bg-white-200" style={styles.container}>
        <StatusBar style="light" />
        <Image
          className="w-full rounded-xl self-start"
          source={image}
          style={{ width: 200, height: 200 }}
        />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
