export const state = {
  query: "",
  temp: "",
  wind: "",
  humidity: "",
  time: "",
};
async function getJson(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("a problem happened");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
}
export async function loadWeather(query) {
  try {
    const data = await getJson(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=ad21eaf28b0bf9bc2fb0199a47632ba1`
    );
    setState(data);
  } catch (err) {
    throw err;
  }
}
function setState(data) {
  state.query = data.name;
  state.temp = (data.main.temp - 273.15).toFixed(2);
  state.wind = data.wind.speed.toFixed(2);
  state.humidity = data.main.humidity;
  const UTCdate = new Date(Date.now());
  const localDate = new Date(UTCdate.getTime() + data.timezone * 1000);
  const localHours = localDate.getHours();
  state.time = localHours;
  console.log(state.time);
}
