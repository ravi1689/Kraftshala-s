export const OPEN_WEATHER_API_KEY = "6b41869af0df0e90477098aa95fb1712"
export const OPEN_WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?appid=" + OPEN_WEATHER_API_KEY 

// zip={zip code},{country code}&appid={API key}


export function convertForenheitToCelsius(temp) {
    return (5*(temp-32)/9).toFixed(2) + "°C";
}