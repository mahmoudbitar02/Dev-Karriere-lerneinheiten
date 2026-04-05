import "../styles/main.scss";
import { fetchJoke } from "./fetching";
import { saveJoke, getSavedJokes, removeJoke } from "./storing";

const currentJokeEl = document.querySelector(".current-joke__text");
const loadNewJokebtn = document.querySelector(".current-joke__generate");
const saveJokebtn = document.querySelector(".current-joke__save");
const savedJokesListEl = document.querySelector(".saved-jokes__list");

let currentJoke = null;

async function loadNewJoke() {
  const joke = await fetchJoke();

  if (!currentJoke) {
    saveJokebtn.classList.remove("current-joke__save--disabled");
  }

  currentJoke = joke;
  currentJokeEl.innerText = joke;
}

function saveCurrentJoke() {
  if (currentJoke) {
    saveJoke(currentJoke);
    renderSaveJokes();
  }
}

function removeSavedJoke(index) {
  removeJoke(index);
  renderSaveJokes();
}

window.removeSavedJoke = removeSavedJoke;

function renderSaveJokes() {
  const savedJokes = getSavedJokes();
  let html = "";

  savedJokes.forEach((joke, index) => {
    html += `
        <div class="saved-joke">
            <div class="saved-joke__text">
              ${joke}
            </div>
            <button class="saved-joke__remove" onclick="removeSavedJoke(${index})">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="saved-joke__remove-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5"
                />
              </svg>
            </button>
        </div>
    `;
  });

  if (!html) html = "<em>Noch keine Witze gespeichert</em>";

  savedJokesListEl.innerHTML = html;
}

loadNewJokebtn.addEventListener("click", loadNewJoke);
saveJokebtn.addEventListener("click", saveCurrentJoke);

renderSaveJokes();
