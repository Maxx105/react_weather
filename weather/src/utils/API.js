import axios from "axios";
let APIKey = "3e198aed3ed933b951a2da906f5d01db";

export default {
  getCurrentWeather: function(locationType, location) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?${locationType}=${location}&appid=${APIKey}`)
    .then(res => res.data)
    .catch(err => console.log(err));
  }
};