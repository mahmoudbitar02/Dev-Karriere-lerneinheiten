const API_BASE_URL = "http://api.weatherapi.com/v1";
const API_KEY = "0abd99540d1a49c8a81185605260904";
const FAVORITE_CITIES_KEY = "favorite-cities";

export async function getForcastWeather(location, days = 3) {
  const response = await fetch(`${API_BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=${days}&lang=de`);

  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
}

export function getFavoriteCities() {
  return JSON.parse(localStorage.getItem(FAVORITE_CITIES_KEY)) || [];
}

export function saveCityAsFavorite(city) {
  const favorites = getFavoriteCities();
  if (favorites.find((favorite) => favorite === city)) {
    alert(city + " wurde bereits den Favoriten hinzugefügt");
    return;
  }

  favorites.push(city);

  localStorage.setItem(FAVORITE_CITIES_KEY, JSON.stringify(favorites));
}
