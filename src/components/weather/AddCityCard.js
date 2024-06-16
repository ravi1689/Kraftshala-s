import { useState } from "react";

export function AddCityCard({onSearch}) {

    const [city, setCity] = useState("");
  const handleSearch = () => {
    if(!city) return
    onSearch(city);

    //console.log("Clicked")
  };
  

  return <div className="card add-city-card">
    <div>

      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="form-control"
        id="city-input"
        placeholder="Enter City Name" />
        </div>
        <div>

      <button class="get-button" onClick={handleSearch}>
        Get Weather
      </button>
    
        </div>
    </div>
}
