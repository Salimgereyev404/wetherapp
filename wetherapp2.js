let cityInput = document.getElementById('cities');
let find = document.getElementById('find');
let container = document.getElementById('container');
let weatherChartInstance = null;
document.getElementById('languageSelector').addEventListener('change', function () {
  const lang = this.value;
  localStorage.setItem('lang', lang);
  // Кейін тілдік контент өзгерту логикасы осында болу керек
});
  window.addEventListener('DOMContentLoaded', () => {
   const userEmail = localStorage.getItem('userEmail')
   const userPassword = localStorage.getItem('userPassword')
   document.getElementById('userEmail').textContent  = userEmail
   document.getElementById('userPassword').textContent =  userPassword
    });
  

// Негізгі API кілті
const apiKey = "0a447dc803d64e249b192310252903";

find.addEventListener('click', function () {
  const city = cityInput.value.trim();
  if (!city) {
    alert("Қаланы енгізіңіз");
    return;
  }

  container.style.display = 'block';

  fetchCurrentWeather(city);
  fetchWeeklyForecast(city);
  fetchCityImage(city);
  fetchSunriseSunset(city);
  fetchUVIndex(city);
});

function fetchCurrentWeather(city) {

  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
    .then(res => res.json())
    .then(data => {
      
      console.log(data)
      document.getElementById('temp').textContent = `${data.current.temp_c} °C`;
      document.getElementById('temp1').textContent = `${data.current.temp_f} °F`;
      document.getElementById('img').src = 'https:' + data.current.condition.icon;
      document.getElementById('kph').textContent = data.current.wind_kph + ' км/сағ';
      document.getElementById('humidity').textContent = data.current.humidity + ' %';
      document.getElementById('cloud').textContent = data.current.condition.text;
      document.getElementById('cloudPercent').textContent = data.current.cloud + ' %';
      document.getElementById('name').textContent = data.location.name;
      document.getElementById('jana').textContent = data.current.last_updated + ' Жаңартылған уақыт';
      document.getElementById('winddegree').textContent = data.current.wind_degree + ' °' 
      document.getElementById('winddir').textContent = data.current.wind_dir;

      // Карта
      let mapQuery = `${data.location.name}, ${data.location.country}`;
      document.getElementById('map').src = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
     if(data.current.condition.text.toLowerCase().includes('sun')){
            document.body.style.backgroundImage = 'url(https://avatars.mds.yandex.net/i?id=6a2ba7bc136bdf4cf8b37fb8b6735b6e_l-10715741-images-thumbs&n=13)'
      }
      else if(data.current.condition.text.toLowerCase().includes('light rain')
      ) {
         document.body.style.backgroundImage = 'url(https://avatars.mds.yandex.net/i?id=771897460645c57a848b9f3b13cd501db63a1c69-5194807-images-thumbs&n=13)'
 
      }
      else if(data.current.condition.text.toLowerCase().includes('partly cloudy'))
      {document.body.style.backgroundImage = 'url(https://atvmedia.ru/uploads/news/202205/165260991445-1.jpg)'}
      else if(data.current.condition.text.toLowerCase().includes('thundery outbreaks in nearby'))
      {document.body.style.backgroundImage = 'url(https://i.pinimg.com/736x/d9/ca/ec/d9caec45245e8105b12c35f59c0ef8a8.jpg)'}
      else if(data.current.condition.text.toLowerCase().includes('patchy light rain with thunder'))
      {document.body.style.backgroundImage = 'url(https://78.mchs.gov.ru/uploads/resize_cache/news/2023-06-25/v-sankt-peterburge-ozhidaetsya-uhudshenie-pogodnyh-usloviy_1687685187705636300__2000x2000.jpg)'}
      else if(data.current.condition.text.toLowerCase().includes('light rain shower'))
      {document.body.style.backgroundImage = 'url(https://avatars.mds.yandex.net/get-entity_search/46786/952376217/S600xU_2x)'}
      else if(data.current.condition.text.toLowerCase().includes('moderate or heavy rain with thunder'))
      {document.body.style.backgroundImage = 'url(https://i.ytimg.com/vi/OFCsJoIo-u0/maxresdefault.jpg)'}
      else if(data.current.condition.text.toLowerCase().includes('mist'))
      {document.body.style.backgroundImage = 'url(https://avatars.mds.yandex.net/get-mpic/4887676/img_id4389538978086718988.jpeg/orig)'}
      else if(data.current.condition.text.toLowerCase().includes('overcast'))
      {document.body.style.backgroundImage = 'url(https://c0.wallpaperflare.com/preview/337/420/1023/canada-manitoba-fields-storm.jpg)'}
      else if(data.current.condition.text.toLowerCase().includes('clear'))
      {document.body.style.backgroundImage = 'url(https://i.pinimg.com/originals/c4/b6/82/c4b6829b569ad0a1e1bb2faed4f6a156.png)'}
      else if(data.current.condition.text.toLowerCase().includes('light drizzle'))
      {document.body.style.backgroundImage = 'url(https://s1.fotokto.ru/photo/full/413/4135897.jpg)'}
      
    })
    .catch(err => {
      console.error("Ауа райын алу қатесі:", err);
      alert("Қала табылмады немесе API қателігі.");
    });
}


function fetchCityImage(city) {
  const localImages = {
    "almaty": "images/almaty.jpg",
    "astana": "images/astana.jpg",
    "shymkent": "images/shymkent.jpg"
    // Қалалар қосуға болады
  };

  const cleanedCity = city.trim().toLowerCase();
  const localImage = localImages[cleanedCity];
  const img1 = document.getElementById("img1");

  if (localImage) {
    img1.src = localImage;
    return;
  }

  const wikiApi = `https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=original&generator=search&gsrsearch=${city}`;
  const corsProxy = `https://api.allorigins.win/get?url=${encodeURIComponent(wikiApi)}`;

  fetch(corsProxy)
    .then(res => res.json())
    .then(result => {
      const data = JSON.parse(result.contents);
      const pages = data.query.pages;
      for (const pageId in pages) {
        const page = pages[pageId];
        if (page.original && page.original.source) {
          img1.src = page.original.source;
          break;
        }
      }
    })
    .catch(err => {
      console.error("Wiki суреті қатесі:", err);
    });
}

function fetchSunriseSunset(city) {
  // Геокод арқылы координат алу керек — бірақ қазір city арқылы тікелей жібере алмайсыз
  // Бұл жерде WeatherAPI нәтижесінен координат алған дұрыс

  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    .then(res => res.json())
    .then(data => {
      const lat = data.location.lat;
      const lon = data.location.lon;
      return fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&formatted=0`);
    })
    .then(res => res.json())
    .then(data => {
      document.getElementById("sunrise").innerText = ` ${new Date(data.results.sunrise).toLocaleTimeString()}`;
      document.getElementById("sunset").innerText = ` ${new Date(data.results.sunset).toLocaleTimeString()}`;
    })
    .catch(err => {
      console.error("Күн шығу/бату қатесі:", err);
    });
}

function fetchUVIndex(city) {
  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
    .then(res => res.json())
    .then(data => {
      const uvIndex = data.current.uv;
      document.getElementById("uv-description").innerText = `UV деңгейі: ${uvIndex}`;
      document.getElementById("uv-level").style.left = `${(uvIndex / 12) * 100}%`;
    })
    .catch(err => {
      console.error("UV индекс қатесі:", err);
    });
}
function applyLanguage(lang) {
  const t = translations[lang];
  document.getElementById("find").textContent = t.search;
  document.getElementById("labelToday").textContent = t.today;
  document.getElementById("wind_kph").textContent = t.wind;
  document.getElementById("humidityLabel").textContent = t.humidity;
  document.getElementById("cloudLabel").textContent = t.cloud;
  document.getElementById("sunriseLabel").textContent = t.sunrise;
  document.getElementById("sunsetLabel").textContent = t.sunset;
  document.getElementById("temperatureLabel").textContent = t.temperature;
  document.getElementById("windDirLabel").textContent = t.windDir;
  document.getElementById("uv-description").textContent = t.uv;
  document.getElementById("labelWeek").textContent = t.week;
  document.getElementById("linkToday").textContent = t.todayTab;
  document.getElementById("linkWeek").textContent = t.weekTab;
}
document.getElementById('languageSelector').addEventListener('change', function () {
  const lang = this.value;
  localStorage.setItem('lang', lang);
  applyLanguage(lang);
});
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'kz';
  document.getElementById('languageSelector').value = savedLang;
  applyLanguage(savedLang);
});

const translations = {
  kz: {
    search: "Іздеу",
    today: "Бүгінгі ауа райы",
    week: "Апталық ауа райы болжамы",
    wind: "Жел",
    humidity: "Ылғалдылық",
    cloud: "Бұлттылық",
    sunrise: "Күн шығу",
    sunset: "Күн бату",
    temperature: "Температура",
    windDir: "Жел бағыты",
    uv: "UV деңгейі:",
    todayTab: "Бүгін",
    weekTab: "Апта"
  },
  ru: {
    search: "Поиск",
    today: "Погода сегодня",
    week: "Прогноз на неделю",
    wind: "Ветер",
    humidity: "Влажность",
    cloud: "Облачность",
    sunrise: "Восход",
    sunset: "Закат",
    temperature: "Температура",
    windDir: "Направление ветра",
    uv: "Уровень UV:",
    todayTab: "Сегодня",
    weekTab: "Неделя"
  },
  en: {
    search: "Search",
    today: "Today's Weather",
    week: "Weekly Forecast",
    wind: "Wind",
    humidity: "Humidity",
    cloud: "Cloudiness",
    sunrise: "Sunrise",
    sunset: "Sunset",
    temperature: "Temperature",
    windDir: "Wind Direction",
    uv: "UV Level:",
    todayTab: "Today",
    weekTab: "Week"
  }
};
const temp = ''

document.getElementById('languageSelector').addEventListener('click', function () {
  const lang = this.value;
  document.getElementById('find').textContent = translations[lang].search;
  document.getElementById('windLabel').textContent = translations[lang].wind;
  document.getElementById('humidityLabel').textContent = translations[lang].humidity;
  document.getElementById('cloudLabel').textContent = translations[lang].cloud;
  temp = translations[lang].temperature
});

function showSection(section) {
  document.getElementById('today').style.display = section === 'today' ? 'block' : 'none';
  document.getElementById('week').style.display = section === 'week' ? 'block' : 'none';
}
function renderWeekForecast(lang) {
  const weekData = [
    { day: "Дүйсенбі", temp: "22°C" },
    { day: "Сейсенбі", temp: "24°C" },
    // т.б.
  ];

  const dayNames = {
    kz: ["Дүйсенбі", "Сейсенбі", "Сәрсенбі", "Бейсенбі", "Жұма", "Сенбі", "Жексенбі"],
    ru: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  };

  const weekForecastDiv = document.getElementById("weekForecast");
  weekForecastDiv.innerHTML = "";

  for (let i = 0; i < 7; i++) {
    const card = document.createElement("div");
    card.className = "forecast-card";
    card.innerHTML = `
      <h4>${dayNames[lang][i]}</h4>
      <p>Температура: 20°C</p>
    `;
    weekForecastDiv.appendChild(card);
  }
}
const lang = localStorage.getItem('language') || 'kz';
const url = `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=7&lang=${lang}&key=${apikey}`;
applyLanguage(lang);
renderWeekForecast(lang);


function fetchWeeklyForecast(city) {
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`)
    .then(res => res.json())
    .then(data => {
      // 📅 Апталық ауа райы
      let weekForecast = "";
      data.forecast.forecastday.forEach(day => {
        weekForecast += `
          <div class="card">
            <h4>${day.date}</h4>
            <p>Температура: ${day.day.mintemp_c}°C - ${day.day.maxtemp_c}°C</p>
            <p>Ауа райы: ${day.day.condition.text}</p>
            <p>Жел: ${day.day.maxwind_kph} км/сағ</p>
            <p>Ылғалдылық: ${day.day.avghumidity}%</p>
            <p>Күн шығу: ${day.astro.sunrise}</p>
            <p>Күн бату: ${day.astro.sunset}</p>
          </div>`;
      });
      document.getElementById("weekForecast").innerHTML = weekForecast;

      // 📊 24 сағаттық график
      const hours = [];
      const temps = [];
      data.forecast.forecastday[0].hour.forEach(hourData => {
        hours.push(hourData.time.split(" ")[1]);
        temps.push(hourData.temp_c);
      });
      
      const ctx = document.getElementById("weatherChart").getContext("2d");
      if (weatherChartInstance) {
        weatherChartInstance.destroy();
      }
      weatherChartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: hours,
          datasets: [{
            label: "Температура (°C)",
            data: temps,
            borderColor: "blue",
            backgroundColor: "lightblue",
            fill: true
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: { title: { display: true, text: "Уақыт" } },
            y: { title: { display: true, text: "Температура (°C)" } }
          }
        }
      });
    })
    .catch(err => {
      console.error("Апталық болжам қатесі:", err);
    });
}

    // Logout (Шығу)
    function logout() {
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('user');
      window.location.href = 'wetherapp.html';
    }