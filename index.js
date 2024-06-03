const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&appid=db2c309969b283ea0777b660156826bf";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkweather(city) {
  const response = await fetch(`${apiurl}&q=${city}`);
  const data = await response.json();
  console.log(data)
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = `${data.main.temp}°C`;
  document.querySelector(".humididty").innerHTML = `${data.main.humidity}%`;
  document.querySelector(".wind").innerHTML = `${data.wind.speed}km/h`;
}
searchbtn.addEventListener("click", (e) => {
  checkweather(searchbox.value);
});