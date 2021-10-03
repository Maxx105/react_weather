import React, { useState, useContext, useEffect } from "react";
import Search from "../Search";
import { WeatherContext } from "../../Context/WeatherContext";
import API from "../../utils/API";
import "./style.css";

function Weather() {
    const weatherContext = useContext(WeatherContext);
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    function getCurrentDate() {
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        return (`${month+1}/${day}/${year}`);
    }

    function convertToFahrenheit(temp) {
        return ((((temp - 273.15)*9)/5)+32).toFixed(1)
    }

    function getTempIcon(temp) {
        if (temp <= 30) {
            return "thermometer-empty";
        } else if (temp > 30 && temp <= 55) {
            return "thermometer-quarter";
        } else if (temp > 55 && temp <= 70) {
            return "thermometer-half";
        } else if (temp > 70 && temp <= 85) {
            return "thermometer-three-quarters";
        } else if (temp > 85 ) {
            return "thermometer-full";
        }
    }

    function setUVColor(uvIndex) {
        if (uvIndex <= 2) {
            return 'success';
        } else if (uvIndex > 2 && uvIndex <=5) {
            return 'warning';
        } else if (uvIndex > 5 && uvIndex <=8) {
            return 'danger';
        } else if (uvIndex > 8) {
            return 'purple';
        }
    }

    function convertDTtoDate(dt) {
        return (new Date(dt*1000).getMonth() + 1) + "/" + (new Date(dt*1000).getDate()) + "/" + (new Date(dt*1000).getFullYear())
    }

    function convertDTtoDay(dt) {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[new Date(dt*1000).getDay()];
    }

    function convertDTtoTime(dt) {
        return new Date(dt*1000).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true });
    }

    return (
        <div>
            {weatherContext.isLoaded ? (
                <div className = "weather-info shadow">
                    <div>
                        <h1 id="city-name">{weatherContext.weatherData.name}, {weatherContext.weatherData.sys.country} ({getCurrentDate()})
                        <img id="icon" src={`https://openweathermap.org/img/wn/${weatherContext.weatherData.weather[0].icon}@2x.png`} alt = {weatherContext.weatherData.weather[0].description}></img>
                        </h1>
                    </div>
                    <h4><strong>Temperature <i className={`fas fa-${getTempIcon(convertToFahrenheit(weatherContext.weatherData.main.temp))}`}></i></strong> {convertToFahrenheit(weatherContext.weatherData.main.temp)}°F</h4>
                    <h4><strong>Humidity <i className="fas fa-humidity"></i></strong> {weatherContext.weatherData.main.humidity}%</h4>
                    <h4><strong>Wind Speed <i className="fas fa-wind"></i></strong> {weatherContext.weatherData.wind.speed} mph</h4>
                    <h4><strong>UV Index <i className="fas fa-sun"></i></strong><span id="uv-index" className={`badge rounded-pill bg-${setUVColor(weatherContext.uvi)}`}>{weatherContext.uvi}</span></h4>
                    <hr/>
                    <div className = "scrolling-wrapper">
                        {weatherContext.forecastHourlyWeatherData.map((hour, index) => (
                            <div className = "card" key={index}>
                                <div className = "card-body">
                                    <div><h5 className = "card-text"><strong>{convertDTtoTime(hour.dt)}</strong></h5></div>
                                    {/* <div><h6 className = "card-text">{convertDTtoDate(day.dt)}</h6></div> */}
                                    <div><img className="card-img-top" id="icon" src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} alt = {hour.weather[0].description}></img></div>
                                    <div><p className = "card-text">Temperature: {convertToFahrenheit(hour.temp)} °F</p></div>
                                    <div><p className = "card-text">Feels Like: {convertToFahrenheit(hour.feels_like)} °F</p></div>
                                    <div><p className = "card-text">Humidity: {hour.humidity}%</p></div>
                                    <div><p className = "card-text">Chance of Precipitation: {hour.pop*100}%</p></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr/>
                    <div className = "scrolling-wrapper">
                        {weatherContext.forecastDailyWeatherData.map((day, index) => (
                            <div className = "card" key={index}>
                                <div className = "card-body">
                                    <div><h5 className = "card-text"><strong>{convertDTtoDay(day.dt)}</strong></h5></div>
                                    <div><h6 className = "card-text">{convertDTtoDate(day.dt)}</h6></div>
                                    <div><img className="card-img-top" id="icon" src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt = {day.weather[0].description}></img></div>
                                    <div><p className = "card-text">Temperature: {convertToFahrenheit(day.temp.day)} °F</p></div>
                                    <div><p className = "card-text">Humidity: {day.humidity}%</p></div>
                                    <div><p className = "card-text">Chance of Precipitation: {(day.pop*100).toFixed(0)}%</p></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
            : null}
        </div>
    );
}

export default Weather;
