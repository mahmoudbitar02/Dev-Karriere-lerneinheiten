import { getForcastWeather } from "./api";
import { renderLoadingScreen } from "./loading";
import { rootElement } from "./main";
import { formatHourlyTime, formatTemperature, get24HoursForecastFromNow } from "./utils";

export async function loadDetailView(cityName) {
  renderLoadingScreen("Lade Wetterdaten für " + cityName + "...");
  const weatherData = await getForcastWeather(cityName);
  renderDetailView(weatherData);
  // eventlistener registrieren
}

function renderDetailView(weatherData) {
  const { location, current, forecast } = weatherData;
  const currentDay = forecast.forecastday[0];
  rootElement.innerHTML =
    getHeaderHtml(
      location.name,
      formatTemperature(current.temp_c),
      current.condition.text,
      formatTemperature(currentDay.day.maxtemp_c),
      formatTemperature(currentDay.day.mintemp_c),
    ) + getTodayForecasthtml(currentDay.day.condition.text, currentDay.day.maxwind_kph, forecast.forecastday, current.last_updated_epoch);
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

function getTodayForecasthtml(condition, maxWind, forecastdays, lastUpdatedEpoch) {
  const horlyForecastElements = get24HoursForecastFromNow(forecastdays, lastUpdatedEpoch)
    .filter((el) => el !== undefined)
    .map(
      (hour, index) => `
      <div class="hourly-forecast">
        <div class="hourly-forecast__time">${index === 0 ? "Jetzt" : formatHourlyTime(hour.time) + "Uhr"}</div>
        <img src="https:${hour.condition.icon}" alt="" class="hourly-forecast__icon" />
        <div class="hourly-forecast__temerature">${formatTemperature(hour.temp_c)}°</div>
      </div>
  `,
    );

  const hourlyForecastHtml = horlyForecastElements.join("");
  return `
    <div class="today-forecast">
      <div class="today-forecast__conditions">Heute ${condition}. Wind bis zu ${maxWind} Km/h.</div>
      <div class="today-forecast__hours">
        ${hourlyForecastHtml}
      </div>
    </div>
  `;
}
