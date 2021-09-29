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

    return (
        <div>
            {weatherContext.isLoaded ? (
                <div className = "weather-info shadow">
                    <div>
                        <h1 id="city-name">{weatherContext.weatherData.name}, {weatherContext.weatherData.sys.country} ({getCurrentDate()})
                        <img id="icon" src={`https://openweathermap.org/img/wn/${weatherContext.weatherData.weather[0].icon}@2x.png`}></img>
                        </h1>
                    </div>
                    <p>Temperature: {convertToFahrenheit(weatherContext.weatherData.main.temp)}°F</p>
                    <p>Humidity: {weatherContext.weatherData.main.humidity}%</p>
                    <p>Wind Speed: {weatherContext.weatherData.wind.speed} mph</p>
                </div>
            )
            : null}
        </div>
    );
}

export default Weather;
