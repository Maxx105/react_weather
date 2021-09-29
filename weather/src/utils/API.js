import axios from "axios";

export default {
  getCurrentWeather: function(locationType, location, APIKey) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?${locationType}=${location}&appid=${APIKey}`)
    .then(res => res.data)
    // .catch(err => console.log(err));
  },

  getCurrentWeatherWithURL: function(url) {
    return axios.get(url)
    .then(res => res.data)
  }
};