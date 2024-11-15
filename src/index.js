function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  /*`${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;*/
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}m/s`;
  temperatureElement.innerHTML = Math.round(temperature);
  iconElement.innerHTML = `<img
                src="${response.data.condition.icon_url}"
                class="weather-app-icon" />`;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  // Seperation of content
  let apiKey = "t0fa0a4b6o62052bf581e37227b2ab41";
  //make api call and update interface
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(e) {
  e.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");

let forecast = document.querySelector("#forecast");
forecast.innerHTML = `
  <div class="weather-forecast-day">
            <div class="weather-forecast-date">Tue</div> 
            <div class="weather-forecast-icon">🌤️</div> 
            <div class="weather-forecast-temperatures">
              <div class="weather-forecast-temperature">
                  <strong>15&deg; </strong>
              </div>
              <div class="weather-forecast-temperature">
                  9&deg;
                </div>
              </div>
          </div>

          <div class="weather-forecast-day">
            <div class="weather-forecast-date">Wed</div> 
            <div class="weather-forecast-icon">🌤️</div> 
            <div class="weather-forecast-temperatures">
              <div class="weather-forecast-temperature">
                  <strong>15&deg; </strong>
              </div>
              <div class="weather-forecast-temperature">
                  9&deg;
                </div>
              </div>
          </div>

          <div class="weather-forecast-day">
            <div class="weather-forecast-date">Wed</div> 
            <div class="weather-forecast-icon">🌤️</div> 
            <div class="weather-forecast-temperatures">
              <div class="weather-forecast-temperature">
                  <strong>15&deg; </strong>
              </div>
              <div class="weather-forecast-temperature">
                  9&deg;
                </div>
              </div>
          </div>

          <div class="weather-forecast-day">
            <div class="weather-forecast-date">Wed</div> 
            <div class="weather-forecast-icon">🌤️</div> 
            <div class="weather-forecast-temperatures">
              <div class="weather-forecast-temperature">
                  <strong>15&deg; </strong>
              </div>
              <div class="weather-forecast-temperature">
                  9&deg;
                </div>
              </div>
          </div>

          <div class="weather-forecast-day">
            <div class="weather-forecast-date">Wed</div> 
            <div class="weather-forecast-icon">🌤️</div> 
            <div class="weather-forecast-temperatures">
              <div class="weather-forecast-temperature">
                  <strong>15&deg; </strong>
              </div>
              <div class="weather-forecast-temperature">
                  9&deg;
                </div>
              </div>
          </div>
        `;
