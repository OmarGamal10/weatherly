const parentEl = document.querySelector(".text-container");
const searchCont = document.querySelector(".container");
import nightImg from "./sunny-night-svgrepo-com.svg";
import dayImg from "./sunny-svgrepo-com.svg";

export function render(data) {
  const markup = generateMarkup(data);
  console.log(data.time);

  parentEl.innerHTML = "";
  searchCont.classList.remove("initial-margin");
  parentEl.insertAdjacentHTML("afterbegin", markup);
}

function generateMarkup(data) {
  return `<div style="text-align: center; margin-bottom: 6rem">
              <img src="${
                data.time > 7 && data.time < 19 ? dayImg : nightImg
              }" class="svg" />
            </div>
            <span class="temp">${data.temp}&deg;c</span>
            <h1 class="main-header">${data.query}</h1>
            <div class="weather-info-box">
              <div class="weather-info">
                <h2 class="subheading">${data.humidity}%</h2>
                <span class="weather-attribute">Humidity</span>
              </div>
              <div class="weather-info">
                <h2 class="subheading">${data.humidity} km/h</h2>
                <span class="weather-attribute">Wind Speed</span>
              </div>
            </div>`;
}

export function addQueryHandler(handler) {
  document.querySelector(".search").addEventListener("submit", (e) => {
    e.preventDefault();
    const query = document.querySelector(".input").value;
    document.querySelector(".input").value = "";
    handler(query);
  });
}
