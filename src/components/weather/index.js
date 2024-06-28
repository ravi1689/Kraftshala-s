//import { Search } from "@mui/icons-material";
import React from "react";
import RefreshIcon from "@mui/icons-material/Refresh";

//import { Search,  StyledInputBase } from "@mui/icons-material";
//import Backdrop from '@mui/material/Backdrop';
//import CircularProgress from '@mui/material/CircularProgress';
import "./index.css";
import { convertForenheitToCelsius } from "../../utils/constants";

export default function WeatherCard({ data, onDelete, index, handleRefresh }) {
  const currentDate = data.updatedAt.toLocaleDateString();
  const currentTime = data.updatedAt.toLocaleTimeString();

  return (
    <div className="weather-section card">
      <div>
        {" "}
        Location: {data.name}
        <RefreshIcon
          className="button"
          inverted
          color="blue"
          circular
          icon="refresh"
          onClick={() => handleRefresh(index)}
        />
      </div>
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
      <button className="delete-button" onClick={() => onDelete(index)}>
        Delete
      </button>
    </div>
  );
}
