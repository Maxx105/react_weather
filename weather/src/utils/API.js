import axios from "axios";

export default {
  getCurrentWeather: function(locationType, location, APIKey) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?${locationType}=${location}&appid=${APIKey}`)
    .then(res => res.data);
    // .catch(err => console.log(err));
  },
  getCurrentWeatherWithURL: function(url) {
    return axios.get(url)
    .then(res => res.data);
  },
  getOneCallData: function(lat, lon, APIKey) {
    return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${APIKey}`)
    .then(res => res.data);
  },
  getZipbyLocation: function (ip) {
    return axios.get("https://freegeoip.app/json/" + ip)
    .then(res => res.data);
  },
  getMyIP: function () {
    return axios.get("https://api.ipify.org/?format=json")
    .then(res => res.data);
  }
};