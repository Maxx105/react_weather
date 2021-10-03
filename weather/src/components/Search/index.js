import React, {useState, useEffect, useContext} from "react";
import API from "../../utils/API";
import { WeatherContext } from "../../Context/WeatherContext";
import "./style.css";

function Search() {
    const [locationType, setLocationType] = useState("");
    const [location, setLocation] = useState("");
    const [searchHistory, setSearchHistory] = useState([]);
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    // const [weatherData, setWeatherData] = useState("");

    const weatherContext = useContext(WeatherContext);

    let APIKey = "3e198aed3ed933b951a2da906f5d01db";

    useEffect(() => {
        setInitialLocalStorageArray();
    }, []);

    function onLocationTypeChange(e) {
        setLocationType(e.target.id);
    }

    function onLocationChange(e) {
        setLocation(e.target.value);
    }

    function getWeather(locationType, location, APIKey) {
        API.getCurrentWeather(locationType, location, APIKey)
            .then(res => {
                document.getElementById('location').value = "";
                setLocation("");
                weatherContext.setWeatherData(res);
                weatherContext.setIsLoaded(true);
                API.getOneCallData(res.coord.lat, res.coord.lon, weatherContext.APIKey)
                    .then(res => {
                        console.log(res.daily)
                        weatherContext.setUvi(res.current.uvi);
                        weatherContext.setForecastWeatherData(res.daily);
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                console.log(err)
            })
    }

    function loadWeather() {
        setErrorMessage();
        createSearchHistory(`https://api.openweathermap.org/data/2.5/weather?${locationType}=${location}&appid=${weatherContext.APIKey}`, document.getElementById('location').value, locationType);
        getWeather(locationType, location, weatherContext.APIKey);
    }

    function setInitialLocalStorageArray() {
        if (JSON.parse(localStorage.getItem('search')) === null) {
            setSearchHistory([]);
        } else {
            setSearchHistory(JSON.parse(localStorage.getItem('search')));
        };
    }

    function setErrorMessage() {
        if (document.getElementById('zip').checked === false && document.getElementById('q').checked === false) {
            document.getElementById('error').innerText = " Please select a location type";
            createErrorMessage()
        } else if (document.getElementById('location').value === "") {
            document.getElementById('error').innerText = " Please enter a location";
            createErrorMessage()
        } else {
            document.getElementById('error').innerText = "";
        }
    }

    function createSearchHistory(APICallURL, location, locationType) {
        document.getElementById('error').innerText = "";
        let searchArray = searchHistory;
        searchArray.push({location: location, locationType: locationType, APICall: APICallURL});
        localStorage.setItem('currentCity', location);
        localStorage.setItem('search', JSON.stringify(searchArray));
        setLocalStorageLocationType();
        setSearchHistory(JSON.parse(localStorage.getItem('search')));
        weatherContext.setCurrentCity(localStorage.getItem('currentCity'));
        weatherContext.setCurrentLocationType(localStorage.getItem('currentLocationType'));
    }

    function setLocalStorageLocationType() {
        if (document.getElementById('zip').checked === true) {
            localStorage.setItem('currentLocationType', 'zip');
        } else localStorage.setItem('currentLocationType', 'q');
    }

    function createErrorMessage() {
        const newSpan = document.createElement("span");
        const newIcon = document.createElement("i");
        newIcon.className = "fas fa-exclamation-triangle";
        newSpan.append(newIcon);
        document.getElementById('error').prepend(newSpan);
    }

    function clearSearchHistory(e) {
        localStorage.clear();
        setSearchHistory([]);
    }

    function deleteSearchItem(e) {
        let splicedArray = searchHistory;
        splicedArray.splice(e.target.id, 1);
        localStorage.setItem('search', JSON.stringify(splicedArray));
        setSearchHistory(JSON.parse(localStorage.getItem('search')));
    }

    function getWeatherForMyLocation(e) {
        e.preventDefault();
        API.getMyIP()
        .then(res => {
            API.getZipbyLocation(res.ip)
                .then (res => {
                    createSearchHistory(`https://api.openweathermap.org/data/2.5/weather?q=${res.city}&appid=${weatherContext.APIKey}`, res.city, 'q');
                    getWeather('q', res.city, weatherContext.APIKey);
            })

        })
    }

    return (
        <div className="searchArea shadow">
            {/* <h1>Search for a City:</h1> */}
            <form id="search-form">
                <div className="form-check">
                    <input onClick={e => onLocationTypeChange(e)} className="form-check-input" type="radio" name="flexRadioDefault" id="zip" />
                    <label className="form-check-label" htmlFor="zip">
                        Zip
                    </label>
                </div>
                <div className="form-check">
                    <input onClick={e => onLocationTypeChange(e)} className="form-check-input" type="radio" name="flexRadioDefault" id="q"/>
                    <label className="form-check-label" htmlFor="city">
                        City Name
                    </label>
                </div>
                <div className="input-group mb-3">
                    <input onChange={e => onLocationChange(e)} type="text" className="form-control" placeholder="Enter City Here" id="location"/>
                    <button onClick = {loadWeather} className="btn btn-primary" type="button">Search</button>
                </div>
                <div className="d-grid gap-2">
                    <button onClick={getWeatherForMyLocation} className="btn btn-dark">Search My Location</button>
                </div>
                <p id="error"></p>
            </form>
            <br/>
            <ul className="list-group">
                {searchHistory.map((location, index) => (
                    <li onClick = {() => getWeather(location.locationType, location.location, weatherContext.APIKey)} className="list-group-item d-flex justify-content-between align-items-center" id="searches" key={index}>
                        {location.location}
                        <span onClick = {deleteSearchItem} className="badge bg-dark rounded-pill" id={index}>X</span>
                    </li>
                ))}
            </ul>
            {searchHistory.length != 0 ? (
                <div className="d-grid gap-2">
                    <button onClick={clearSearchHistory} className="btn btn-danger" type="button" id="delete-history">Clear History</button>
                </div>
            ) : null}
        </div>
    );
}

export default Search;