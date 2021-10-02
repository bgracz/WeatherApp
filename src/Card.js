import React, { useState } from "react";
import "./Card.css";

function Card(props) {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
        
    const city = props.city;
    const [description, setDescription] = useState();
    const [icon, setIcon] = useState();
    const [temp, setTemp]= useState();
    const [feelsLike, setFeelsLike] = useState();
    const [pressure, setPressure] = useState();
    const [wind, setWind] = useState();

    let imageSource = ("http://openweathermap.org/img/wn/"+icon+"@4x.png");
      
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=&lang=pl", requestOptions)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (data.cod === 200){
             setDescription(data.weather[0].description);
             setTemp(Math.round(data.main.temp));
             setFeelsLike(Math.round(data.main.feels_like));
             setPressure(data.main.pressure);
             setWind(data.wind.speed);
             setIcon(data.weather[0].icon);
            } else {
                alert("error, nie znaleziono takiego miejsca :(")
                {props.delete(props.id)}
            }
        })
        .catch(function (err) {
            console.log(err);
        });

    return (
        <div className="card">
        <h2 className="h3-weather">{city}</h2>
        <h1>{temp}<span>°C</span></h1>
        <img className='weatherIcon' src={imageSource} alt='weather icon'/>
        <h4><span>Odczuwalna: </span>{feelsLike}<span>°C</span></h4>
        <h4>{description}</h4>
        <h4><span>Prędkość wiatru: </span>{wind}</h4>
        <h4><span>Ciśnienie: </span>{pressure}</h4>
        <div className="deleteIcon">
        <lord-icon
            src="https://cdn.lordicon.com/rivoakkk.json"
            trigger="loop"
            delay="4000"
            colors="primary:#000000,secondary:#ffffff"
            stroke="70"
            onClick={() => {props.delete(props.id)}}>
        </lord-icon>
        </div>
        </div>
    )
}

export default Card;
