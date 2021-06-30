import React, { Component } from 'react'
import './App.css';
import Clock from 'react-live-clock';
import WeatherInfo from './weatherInfo';


class App extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    temp: null,
    locationName: null,
    country: null,
    humidity: null,
    visiblity: null,
    feelsLike: null,
    windSpeed: null,
    maxTemp: null,
    weatherName: null
  }
  componentDidMount() {
    if (navigator.geolocation) {
      this.getPosition()
        .then((position) => {
          console.log(position.coords.latitude);
          this.getWeather(position.coords.latitude, position.coords.longitude)
        })
    }
  }
  getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  getWeather = async (latitude, longitude) => {
    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=2ade02ed2490047c3819d5dd5ce44cb2`
    )

    const data = await api.json()
    console.log(data);
    this.setState(
      {
        temp: Math.round(data.main.temp),
        locationName: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        visiblity: data.visibility,
        windSpeed: data.wind.speed,
        maxTemp: data.main.temp_max,
        weatherName: data.weather[0].main
      }
    )
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <h1 className="text-center">Sunshine Weather App</h1>
          <p className="text-center">Please allow location permission to see weather of your current location</p>
        </div>
        <div className=" d-flex justify-content-center py-5 maindiv flexdirect">
          <div className="app-bg d-flex flex-child">
            <div className="col-12 topleft">
              <h2 className="text-white m-0">{this.state.locationName}</h2>
              <p className="text-white">{this.state.country}</p>
            </div>
            <div className="col-12 d-flex bottomleftrow">
              <div>
                <h2 className="text-white">
                  <Clock format={'HH:mm:ss'} ticking={true} /></h2>
                <h6 className="text-white date"><Clock format={'dddd, MMMM DD, YYYY'} date={''} /></h6>
              </div>
            </div>
            <div className="bottomrightrow">
              <h1 className="text-white">{this.state.temp}°C</h1>
            </div>

          </div>
          <div className="flex-child aa">
            <WeatherInfo humidity={this.state.humidity} visiblity={this.state.visiblity} feelsLike={this.state.feelsLike} windSpeed={this.state.windSpeed} maxTemp={this.state.maxTemp} weatherName={this.state.weatherName} />
          </div>
        </div>
        <footer>
          <p className="text-center">Created by <a href="https://www.linkedin.com/in/shivam-jain-b5102b17a/">SHIVAM JAIN</a> | All rights reserved</p>

        </footer>
      </React.Fragment>
    );
  }
}


export default App;
