import React, { createContext, useState } from "react";

export const WeatherContext = createContext();

export default ({ children }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [forecastDailyWeatherData, setForecastDailyWeatherData] = useState([]);
  const [forecastHourlyWeatherData, setForecastHourlyWeatherData] = useState([]);
  const [uvi, setUvi] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [currentLocationType, setCurrentLocationType] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  let APIKey = process.env.REACT_APP_APIKey;

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