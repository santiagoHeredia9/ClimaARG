import { View, FlatList, Image, ActivityIndicator, StyleSheet } from "react-native";
import { getWeather } from "../lib/weather";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StateWeather } from "./StateWeather";

export default function Main() {
  const [weather, setWeather] = useState([]);
  
  useEffect(() => {
    getWeather().then((data) => {
      setWeather(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      {!weather.length ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={weather}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <StateWeather data={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
  },
});
