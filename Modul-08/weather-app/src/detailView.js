import { getForcastWeather } from "./api";
import { renderLoadingScreen } from "./loading";
import { rootElement } from "./main";
import { formatTemperature } from "./utils";

export async function loadDetailView(cityName) {
  renderLoadingScreen("Lade Wetterdaten für " + cityName + "...");
  const weatherData = await getForcastWeather(cityName);
  renderDetailView(weatherData);
  // eventlistener registrieren
}

function renderDetailView(weatherData) {
  const { location, current, forecast } = weatherData;
  const currentDay = forecast.forecastday[0];
  rootElement.innerHTML = getHeaderHtml(
    location.name,
    formatTemperature(current.temp_c),
    current.condition.text,
    formatTemperature(currentDay.day.maxtemp_c),
    formatTemperature(currentDay.day.mintemp_c),
  );
}

function getHeaderHtml(location, currentTemp, condition, maxTemp, minTemp) {
  return `
        <div class="current-weather">
            <h2 class="current-weather__location">${location}</h2>
            <h1 class="current-weather__current-temperature">${currentTemp}°</h1>
            <p class="current-weather__condition">${condition}</p>
            <div class="current-weather__day-temperatures">
            <span class="current-weather__max-temperature">H:${maxTemp}°C</span>
            <span class="current-weather__min-temperature">T:${minTemp}°C</span>
            </div>
      </div>
    `;
}
