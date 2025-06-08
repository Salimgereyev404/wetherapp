// let title = document.getElementById('title');
// let body = document.getElementById('body');
// let id = document.getElementById('id');
// let userId = document.getElementById('userId');

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         title.textContent = data[87].title;
//         body.textContent = data[87].body;
//         id.textContent = data[87].id;
//         userId.textContent = data[87].userId;
//     })
//     .catch(error => {
//         console.error(error);
//     });

   
let city = ''

let cities = document.getElementById('cities')
let find = document.getElementById('find')
let img = document.getElementById('img')
let temp = document.getElementById('temp')
let kph = document.getElementById('kph')
let humidity = document.getElementById('humidity')
let cloud = document.getElementById('cloud')
let name = document.getElementById('name')
let container = document.getElementById('container')
container.style
find.addEventListener('click', function() {
    container.style.display = 'block'
    city = cities.value
    console.log(city)
    fetch(`https://api.weatherapi.com/v1/current.json?key=0a447dc803d64e249b192310252903&q=${city}&aqi=no`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            temp.textContent ='Температура: ' + data.current.temp_c + ' °C'
            img.src = 'https:' + data.current.condition.icon
            kph.textContent = 'Жел: ' + data.current.wind_kph + ' км/сағат'
            humidity.textContent = 'Ылғалдылық: ' + data.current.humidity + ' %'
            cloud.textContent = 'Бұлттылық: ' + data.current.cloud + '%'
            name.textContent = 'Қала: ' + data.location.name
            console.log(data)



})
        .catch(error => {
            console.error(error)
        })
}
)

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         title.textContent = data[87].title;
//         body.textContent = data[87].body;
//         id.textContent = data[87].id;
//         userId.textContent = data[87].userId;
//     })
//     .catch(error => {
//         console.error(error);
//     });


           
