import React, { useEffect, useState } from 'react';
import './index.css';
import axios from 'axios';

//const location = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}`
//const weather = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
// API Key : aaac69c78032819a31c253af7f27d55a
// https://api.openweathermap.org/data/2.5/weather?q=london&units=imperial&appid=aaac69c78032819a31c253af7f27d55a

function App() {
  const [data, setData] = useState('');
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=aaac69c78032819a31c253af7f27d55a`;

  const searchLocation = event => {
    if (event.key === 'Enter') {
      axios.get(url).then(response => {
        setData(response.data);
      });
      setLocation('');
    }
  };

  return (
    <div className="app">
      <div className="searchbar">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          className="search"
          type="text"
          onKeyPress={searchLocation}
          placeholder="Enter Your Location"
        />
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <p> {data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1> {data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name != undefined && (
          <div className="bottom">
            <div className="fleels">
              {data.main ? (
                <p className="bold"> {data.main.feels_like.toFixed()}°F</p>
              ) : null}
              <p>Feels like</p>
            </div>
            <div className="humidity">
              {data.main ? (
                <p className="bold"> {data.main.humidity} %</p>
              ) : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold"> {data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
            {/* <div className="pressure">
            <p className="bold">12 MPH</p>
            <p>Pressure</p>
          </div> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

// useEffect(() => {
//   fetchLocationData();
// }, [0]);

// useEffect(() => {
//   fetchWeatherData();
// }, [0]);

// const fetchLocationData = async () => {
//   const response = await fetch(
//     `http://api.openweathermap.org/geo/1.0/direct?q=kathmandu&limit=1&appid=aaac69c78032819a31c253af7f27d55a`
//   );
//   const data = await response.json();
//   //console.log(data);
//   const { lat, lon } = data[0];
//   setLatitude(lat);
//   setLongitude(lon);
// };

// const fetchWeatherData = async () => {
//   const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=27.708317&lon=85.3205817&appid=aaac69c78032819a31c253af7f27d55a`
//   );
//   const maindata = await response.json();
//   const {
//     main: { feels_like, humidity, pressure, temp, temp_max, temp_min },
//   } = maindata;
//   setTempMin(temp_min);
//   setTempmax(temp_max);
//   setTemp(temp);
//   setPressure(pressure);
//   setHumidity(humidity);
//   setFeels_like(feels_like);
// };

// const finaldone = event => {
//   setLocation(event.target.value);
//   console.log(setLocation);
// };

{
  /* <p>This is sakar pudasaini</p>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
      <p>temp min: {temp_min}</p>
      <p>tempmax: {temp_max}</p>
      <p>temp: {temp}</p>
      <p>pressure: {pressure}</p>
      <p>humadity: {humidity}</p>
      <p>feelslike: {feels_like}</p> */
}
