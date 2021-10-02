import React, { useState } from "react";
import './App.css';
import Card from './Card';
import Carousel from 'react-elastic-carousel'

function App() {

  document.ontouchmove = function(event){
    event.preventDefault();
}

  const [city, newCity] = useState([]);

  function Clicked() {
    if (input === ""){
      return false;
    } else {
      newCity(prevCity => {
        return [
          ...prevCity, input
        ]
      })
      newInput("");
     }
    }

  const [input, newInput] = useState("");
  function handleChange(event) {
    const inputCity = event.target.value;
    newInput(inputCity);
    }
  
  function addCity(cityName, index){
    return <div>
    <Card 
    id={index}
    city={cityName} 
    delete={deleteIt}
    />
    </div>
  }

  function deleteIt(id) {
    newCity(prevItems => {
      return prevItems.filter((cityName, index) => {
        return index !== id;
      });
    })
  }

  return (
    <div className="App">
    <div className="topField">
    <input class="form-control form-control-lg inputField" type="text" placeholder="L.A., Tokyo, Stockholm?" name="city" value={input} onChange={handleChange}/>
    <lord-icon
        src="https://cdn.lordicon.com/mecwbjnp.json"
        trigger="loop"
        delay="4000"
        colors="primary:#000000,secondary:#ffffff"
        onClick={Clicked}>
    </lord-icon>
    </div>
      {city.length === 0 ? <p>Dodaj jakies miasto - wpisz powyzej jego nazwe</p> : <Carousel itemsToShow={1}>{city.map(addCity)}</Carousel>}
    </div>
  );
}

export default App;
