
let city = '';

let cities = document.getElementById('cities');
let find = document.getElementById('find');
let img = document.getElementById('img');
let temp = document.getElementById('temp');
let kph = document.getElementById('kph');
let humidity = document.getElementById('humidity');
let cloud = document.getElementById('cloud');
let cloudPercent = document.getElementById('cloudPercent');
let name = document.getElementById('name');
let container = document.getElementById('container');
let jana = document.getElementById('jana');
let map = document.getElementById('map');

find.addEventListener('click', function () {
  container.style.display = 'block';
  city = cities.value;

  fetch(`https://api.weatherapi.com/v1/current.json?key=0a447dc803d64e249b192310252903&q=${city}&aqi=no`)
    .then(response => response.json())
    .then(data => {
      temp.textContent = data.current.temp_c + ' °C';
      img.src = 'https:' + data.current.condition.icon;
      kph.textContent = data.current.wind_kph + ' км/сағ';
      humidity.textContent = data.current.humidity + ' %';
      cloud.textContent = data.current.condition.text;
      cloudPercent.textContent = data.current.cloud + ' %';
      name.textContent = data.location.name;
      jana.textContent = data.current.last_updated + ' Жаңартылған уақыт';
      temp.textContent = data.current.temp_c + ' °C';
   

    
    let mapQuery = data.location.name + ',' + data.location.country;
    map.src = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
})
 
    .catch(error => {
      console.error(error);
      alert("Қала табылмады. Қайта енгізіп көріңіз.");
    });

  })



  

  const wikiApi = `(https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=original&generator=search&gsrsearch=${city})`;
  const corsProxy = `(https://api.allorigins.win/get?url=${encodeURIComponent(wikiApi)})`;
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


   
const translations = {
  kz: {
    search: "Іздеу",
    wind: "Жел",
    humidity: "Ылғалдылық",
    cloud: "Бұлттылық"
  },
  ru: {
    search: "Поиск",
    wind: "Ветер",
    humidity: "Влажность",
    cloud: "Облачность"
  },
  en: {
    search: "Search",
    wind: "Wind",
    humidity: "Humidity",
    cloud: "Cloudiness"
  }
};

document.getElementById('languageSelector').addEventListener('click', function () {
  const lang = this.value;
  document.getElementById('find').textContent = translations[lang].search;
  document.getElementById('windLabel').textContent = translations[lang].wind;
  document.getElementById('humidityLabel').textContent = translations[lang].humidity;
  document.getElementById('cloudLabel').textContent = translations[lang].cloud;
});

function showSection(section) {
  document.getElementById('today').style.display = section === 'today' ? 'block' : 'none';
  document.getElementById('week').style.display = section === 'week' ? 'block' : 'none';
}