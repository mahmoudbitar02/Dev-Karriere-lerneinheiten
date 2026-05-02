import { getFavoriteCities, getForcastWeather } from "./api";
import { getConditionImagePath } from "./conditions";
import { loadDetailView } from "./detailView";
import { renderLoadingScreen } from "./loading";
import { rootElement } from "./main";
import { formatTemperature } from "./utils";

export async function loadMainMenu() {
  rootElement.classList.remove("show-background");
  renderLoadingScreen("Lade Übersicht...");
  await renderMainMenu();
}
async function renderMainMenu() {
  rootElement.innerHTML = `
        <div class=main-menu">
        ${getMenuHeaderHtml()}
        ${await getCityListHtml()}

        </div>
    `;

  registerEventListeners();
}

function getMenuHeaderHtml() {
  return `
        <div class="main-menu__heading">Wetter <button class="main-menu__edit">Bearbeiten</button></div>
        <div class="main-menu__search-bar">
          <input type="text" placeholder="Nach Stadt suchen" class="main-menu__search-input" />
        </div>
    `;
}

async function getCityListHtml() {
  const favoriteCities = getFavoriteCities();

  if (!favoriteCities || favoriteCities.length < 1) {
    return "Noch keine Favoriten gespeichert";
  }

  const favoriteCityElement = [];

  for (let city of favoriteCities) {
    const weatherData = await getForcastWeather(city, 1);
    const { location, current, forecast } = weatherData;
    const currentDay = forecast.forecastday[0];

    const conditionImage = getConditionImagePath(current.condition.code, current.is_day !== 1);

    const cityHtml = `
        <div class="city-wrapper">
            <div class="city" data-city-name="${location.name}" ${conditionImage ? `style="--condition-image: url(${conditionImage})"` : ""}>
              <div class="city__left-column">
                <h2 class="city__name">${location.name}</h2>
                <div class="city__country">${location.country}</div>
                <div class="city__condition">${current.condition.text}</div>
              </div>
              <div class="city__right-column">
                <div class="city__temperature">${formatTemperature(current.temp_c)}°</div>
                <div class="city__min-max-temperature">H:${formatTemperature(currentDay.day.maxtemp_c)}° T:${formatTemperature(currentDay.day.mintemp_c)}°</div>
              </div>
            </div>

            
        </div>
    `;

    favoriteCityElement.push(cityHtml);
  }

  const favoriteCitiesHtml = favoriteCityElement.join("");
  return `
        <div class="main-menu__cities-list">
          ${favoriteCitiesHtml}
        </div>
    `;
}

function registerEventListeners() {
  const cities = document.querySelectorAll(".city");
  cities.forEach((city) => {
    city.addEventListener("click", () => {
      const cityName = city.getAttribute("data-city-name");
      console.log(cityName);
      loadDetailView(cityName);
    });
  });
}
