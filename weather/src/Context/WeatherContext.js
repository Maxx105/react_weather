import React, { createContext, useState, useEffect } from "react";

export const WeatherContext = createContext();

export default ({ children }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [forecastDailyWeatherData, setForecastDailyWeatherData] = useState([]);
  const [forecastHourlyWeatherData, setForecastHourlyWeatherData] = useState([]);
  const [uvi, setUvi] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [currentLocationType, setCurrentLocationType] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  let APIKey = "3e198aed3ed933b951a2da906f5d01db";

  return (
    <div>
        <WeatherContext.Provider value={{
            weatherData,
            setWeatherData,
            uvi,
            setUvi,
            forecastDailyWeatherData,
            setForecastDailyWeatherData,
            forecastHourlyWeatherData,
            setForecastHourlyWeatherData,
            currentCity, 
            setCurrentCity,
            currentLocationType, 
            setCurrentLocationType,
            isLoaded,
            setIsLoaded,
            APIKey
        }}>
          {children}
        </WeatherContext.Provider>

  </div>
  );
};