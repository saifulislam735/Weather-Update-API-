const API_KEY = '4a5cc5146fb90b4e7064449d22f4c391';
const loadDataAPI = (CityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => showData(data));
}
const cityName = document.getElementById('cityName');
const skyCondition = document.getElementById('skyCondition');
const temperature = document.getElementById('temperature');

const showData = (data) => {
    console.log(data);
    cityName.innerText = data.name;
    skyCondition.innerText = data.weather[0].description ;
    temperature.innerText = data.main.temp;

}
loadDataAPI('Rajshahi');