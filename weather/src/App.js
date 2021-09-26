import React from 'react';
import './App.css';
import bg from "./Assets/bg.jpg";
import Header from "./components/Header";
import Search from "./components/Search";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="row">
        <div className="col-md-4">
          <Search/>
        </div>
        <br/>
        <div className="col-md-8">
          <Weather/>
        </div>
      </div>
    </div>
  );
}

export default App;
