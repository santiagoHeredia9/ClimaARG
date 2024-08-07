export const getWeather = async () => {
  const endPoint = "https://weather-api-kfq4.onrender.com/api/weather";

  const response = await fetch(endPoint);
  const data = await response.json();
  return data.ArgentinaStateWeathers;
};

export const getWeatherById = async (id) => {
  const endPoint = `https://weather-api-kfq4.onrender.com/api/weather/${id}`;
  try {
    const response = await fetch(endPoint);
    if (!response.ok) {
      throw new Error(`City not found: ${id}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export const image = (image) => {
  if (image === "/public/images/soleado.png") {
    return "https://weather-api-kfq4.onrender.com/public/images/soleado.png";
  } else if (image === "/public/images/nublado.png") {
    return "https://weather-api-kfq4.onrender.com/public/images/nublado.png";
  } else if (image === "/public/images/lluvia.png") {
    return "https://weather-api-kfq4.onrender.com/public/images/lluvia.png";
  }
};
