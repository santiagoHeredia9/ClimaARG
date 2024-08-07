import { ActivityIndicator, Image, Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { getWeatherById, image } from "../lib/weather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Stack } from "expo-router";
export default function Detail() {
  const [detail, setDetail] = useState(null);
  const { id } = useLocalSearchParams();
  useEffect(() => {
    if (id) {
      getWeatherById(id)
        .then((data) => {
          setDetail(data);
        })
        .catch((error) => {
          console.error("Error fetching detail:", error);
        });
    }
  }, [id]);

  const backgroundColor = () => {
    if (detail) {
      console.log(detail);
      if (detail.image === "/public/images/nublado.png") {
        return "bg-blue-300";
      } else if (detail.image === "/public/images/soleado.png") {
        return "bg-orange-300";
      } else if (detail.image === "/public/images/lluvia.png") {
        return "bg-zinc-400";
      }
    }
  };
  return (
    <View
      className={`flex-1 justify-start pt-20 items-center ${backgroundColor()}`}
    >
      <Stack.Screen options={{ headerLeft: () => {} }} />
      <View className="bg-white p-12 rounded-xl">
        {!detail ? (
          <ActivityIndicator />
        ) : (
          <>
            <Text className="text-xl self-center pb-5 font-semibold">
              {detail.city} {detail.grade} º
            </Text>
            <Image
              source={{ uri: image(detail.image) }}
              style={{ width: 200, height: 200 }}
            />
            <View className="flex-row justify-between pt-8">
              <View className="items-center justify-center">
                <MaterialIcons name="water" size={24} color="black" />
                <Text className="items-center justify-center">
                  Humedad: {detail.humidity}
                </Text>
              </View>
              <View className="items-center justify-center">
                <MaterialCommunityIcons
                  name="weather-windy"
                  size={24}
                  color="black"
                />

                <Text>Viento: {detail.wind} </Text>
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  );
}
