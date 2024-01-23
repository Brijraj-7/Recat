import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCtiy] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "1dd2e451062bd519ead10f637b4da3e9";

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    // console.log(jsonResponse);
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    return result;
    console.log(result);
  };

  let handleChange = (evt) => {
    setCtiy(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(city);
    setCtiy("");
    let newinfo = await getWeatherInfo();
    updateInfo(newinfo);
  };
  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="standard"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="outlined" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
