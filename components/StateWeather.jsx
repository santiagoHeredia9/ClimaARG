import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { image } from "../lib/weather";

export const StateWeather = ({ data }) => {
  const StyledPressable = styled(Pressable);
  console.log(data);
  return (
    <Link href={`/${data.id}`} asChild>
      <StyledPressable className="active:opacity-50 ">
        <View
          className="bg-slate-400/30 border"
          style={styles.container}
          key={data.id}
        >
          <Text className="text-xl">{data.city}</Text>
          <Image source={{ uri: image(data.image) }} style={styles.image} />
          <Text className="text-xl absolute right-16">{data.grade} º</Text>
        </View>
      </StyledPressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10, // add margin or padding as needed
    alignItems: "center", // center content if needed
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: 300,
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
});
