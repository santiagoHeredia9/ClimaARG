// app/_layout.js
import { Stack } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, View } from "react-native";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },
        headerTitle: "",
        headerLeft: () => (
          <View className="flex-row items-end justify-center">
            <MaterialCommunityIcons
              name="weather-partly-cloudy"
              size={35}
              color="#C23373"
            />
            <Text className="text-lg text-black">Weather</Text>
          </View>
        ),
      }}
    />
  );
}
