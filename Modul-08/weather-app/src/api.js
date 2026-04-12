const API_BASE_URL = "http://api.weatherapi.com/v1";
const API_KEY = "0abd99540d1a49c8a81185605260904";

export async function getForcastWeather(location, days = 3) {
  const response = await fetch(`${API_BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=${days}&lang=de`);

  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
}
