import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WeatherProvider from "./Context/WeatherContext";
import './index.css';

ReactDOM.render(
  <WeatherProvider>
    <App/>
  </WeatherProvider>, 
  document.getElementById('root')
);

