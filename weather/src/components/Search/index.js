import React, {useState, useEffect} from "react";
import API from "../../utils/API";
import "./style.css";

function Search() {
    const  [locationType, setLocationType] = useState("");
    const  [location, setLocation] = useState("");
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        setInitialLocalStorageArray();
    }, []);

    function onLocationTypeChange(e) {
        setLocationType(e.target.id);
    }

    function onLocationChange(e) {
        setLocation(e.target.value);
    }

    function loadWeather() {
        setErrorMessage();
        API.getCurrentWeather(locationType, location)
            .then(res => {
                console.log(res);
                document.getElementById('location').value = "";
                setLocation("");
            });
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
            let searchArray = searchHistory;
            searchArray.push(document.getElementById('location').value);
            localStorage.setItem('search', JSON.stringify(searchArray));
            setSearchHistory(JSON.parse(localStorage.getItem('search')));
        }
    }

    function createErrorMessage() {
        const newSpan = document.createElement("span");
        const newIcon = document.createElement("i");
        newIcon.className = "fas fa-exclamation-triangle";
        newSpan.append(newIcon);
        document.getElementById('error').prepend(newSpan);
    }

    return (
        <div className="searchArea">
            <h1>Search for a City:</h1>
            <form>
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
                <p id="error"></p>
            </form>
            <br/>
            <div>
                {searchHistory.map((location) => (
                    <li className="list-group-item" id="searches" key={location}>{location}</li>
                ))}
            </div>
        </div>
    );
}

export default Search;