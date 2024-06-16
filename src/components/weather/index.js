//import { Search } from "@mui/icons-material";
import React from "react";
//import SearchIcon from '@mui/icons-material/Search';
//import { Search,  StyledInputBase } from "@mui/icons-material";
//import Backdrop from '@mui/material/Backdrop';
//import CircularProgress from '@mui/material/CircularProgress';
import "./index.css";
import { convertForenheitToCelsius } from "../../utils/constants";

export default function WeatherCard({ data }) {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

    return (
      <div className="weather-section card">
       
        <div> Location: {data.name}</div>
        <div className="weather-temp-section">
          Temperature: {convertForenheitToCelsius(data.main.temp)} 
        </div>

        <div className="weather-Feels-section">
          Feels like: {convertForenheitToCelsius(data.main.feels_like)}
        </div>
        
         <div className="date-section">Date: {currentDate}</div>
        <div className="time-section">Time: {currentTime}</div> 
        {data.weather.map((item) => (
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
              alt=""
              class="icon-img"
            ></img>
            <div>{item.main}</div>
        
          </div>
        ))}
      </div>
    );
  
}

