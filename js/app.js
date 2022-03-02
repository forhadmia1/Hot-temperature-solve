const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const loadData= () =>{
    const searchText = document.getElementById('input-field').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
}
const setInnerText = (id,value) =>{
    const element= document.getElementById(id);
    element.innerText= value;
}

const displayData= data =>{
    setInnerText('city-name',data.name)
    setInnerText('weather',data.weather[0].main)
    setInnerText('temp',data.main.temp)
    const icon = document.getElementById('weather-icon');
    icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
}