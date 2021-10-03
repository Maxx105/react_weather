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
        <div className="col-lg-4 col-md-12">
          <Search/>
        </div>
        <br/>
        <div className="col-lg-8 col-md-12">
          <Weather/>
        </div>
      </div>
    </div>
  );
}

export default App;
