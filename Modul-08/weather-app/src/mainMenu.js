import { loadDetailView } from "./detailView";
import { renderLoadingScreen } from "./loading";
import { rootElement } from "./main";

export function loadMainMenu() {
  rootElement.classList.remove("show-background");
  renderLoadingScreen("Lade Übersicht...");
  renderMainMenu();
}
function renderMainMenu() {
  rootElement.innerHTML = `
        <div class=main-menu">
        ${getMenuHeaderHtml()}
        ${getCityListHtml()}

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

function getCityListHtml() {
  const favoriteCities = ["Mannheim", "London", "Peking"];

  const favoriteCityElement = [];

  for (let city of favoriteCities) {
    const cityHtml = `
        <div class="city-wrapper">
            <div class="city" data-city-name="${city}" style="--condition-image: url(/weather-app/conditionImages/day/sunny.jpg)">
              <div class="city__left-column">
                <h2 class="city__name">${city}</h2>
                <div class="city__country">Germany</div>
                <div class="city__condition">Sonnig</div>
              </div>
              <div class="city__right-column">
                <div class="city__temperature">20°</div>
                <div class="city__min-max-temperature">H:21° T:11°</div>
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
      const cityName = city.getAttribute("data.city-name");
      loadDetailView(cityName);
    });
  });
}
