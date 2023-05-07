import React, { useEffect, useState } from 'react';
import './index.css';

//const location = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}`
//const weather = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
// API Key : aaac69c78032819a31c253af7f27d55a

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [feels_like, setFeels_like] = useState('');
  const [humidity, setHumidity] = useState('');
  const [pressure, setPressure] = useState('');
  const [temp, setTemp] = useState('');
  const [temp_max, setTempmax] = useState('');
  const [temp_min, setTempMin] = useState('');

  useEffect(() => {
    fetchLocationData();
  }, []);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchLocationData = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=kathmandu&limit=1&appid=aaac69c78032819a31c253af7f27d55a`
    );
    const data = await response.json();
    //console.log(data);
    const { lat, lon } = data[0];
    setLatitude(lat);
    setLongitude(lon);
  };

  const fetchWeatherData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=aaac69c78032819a31c253af7f27d55a`
    );
    const maindata = await response.json();
    const {
      main: { feels_like, humidity, pressure, temp, temp_max, temp_min },
    } = maindata;
    setTempMin(temp_min);
    setTempmax(temp_max);
    setTemp(temp);
    setPressure(pressure);
    setHumidity(humidity);
    setFeels_like(feels_like);
  };

  return (
    <div>
      {/* <p>This is sakar pudasaini</p>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
      <p>temp min: {temp_min}</p>
      <p>tempmax: {temp_max}</p>
      <p>temp: {temp}</p>
      <p>pressure: {pressure}</p>
      <p>humadity: {humidity}</p>
      <p>feelslike: {feels_like}</p> */}

      <div className="container">
        <div className="top">
          <div className="location">
            <p> Kathmandu</p>
          </div>
          <div className="temp">
            <h1>30°F</h1>
          </div>
          <div className="description">
            <p>Coulds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="fleels">
            <p>35°F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>12 MPH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
