import { ActivityIndicator, Image, Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { getWeatherById, image } from "../lib/weather";
export default function Detail() {
  const [detail, setDetail] = useState(null);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    if (id) {
      getWeatherById(id)
        .then((data) => {
          console.log(data);
          setDetail(data);
        })
        .catch((error) => {
          console.error("Error fetching detail:", error);
        });
    }
  }, [id]);
  return (
    <View className="flex-1 justify-center items-center">
      <View>
        {!detail ? (
          <ActivityIndicator />
        ) : (
          <View>
            <Image
              source={{ uri: image(detail.image) }}
              style={{ width: 200, height: 200 }}
            />
            <Text>
              {detail.city} {detail.grade} º
            </Text>
            <View>
              <Text>Humedad: {detail.humidity}</Text>
            </View>
            <View>
              <Text>Viento: {detail.wind} </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
