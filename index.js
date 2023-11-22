const searchBtn = document.getElementById("search-btn");
const input = document.getElementById("city-name");
const temprature = document.getElementById("temp");
const cityName = document.getElementById("city");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind");
const weatherIcon = document.getElementById("weather-icon");
const api = `http://api.weatherapi.com/v1/current.json?key=800582bfe6ab4bc8ae293208230811&q=London&aqi=yes`;

async function getWeather(cityname) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=800582bfe6ab4bc8ae293208230811&q=${cityname}&aqi=yes`
  );
  return await promise.json();
}

searchBtn.addEventListener("click", async () => {
  const value = input.value;
  const result = await getWeather(value);
  console.log(result);
  temprature.textContent = `${result.current.temp_c}`;
  cityName.textContent = `${result.location.name}`;
  humidity.textContent = `${result.current.humidity} %`;
  windSpeed.textContent = `${result.current.wind_kph} Km/h`;

  if (result.current.temp_c <= 10) {
    weatherIcon.src = "images/cold.png";
  } else if (result.current.temp_c <= 30) {
    weatherIcon.src = "images/cloud.png";
  } else {
    weatherIcon.src = "images/hot.png";
  }
});
