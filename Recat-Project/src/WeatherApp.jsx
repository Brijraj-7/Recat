import "./SearchBox.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [WeatherInfo, setWeatherInfo] = useState({
    city: "Bhavnagar",
    feelsLike: 24.25,
    humidity: 73,
    temp: 23.9,
    tempMax: 23.9,
    tempMin: 23.9,
    weather: "haze",
  });

  let updateInfo = (newinfo) => {
    setWeatherInfo(newinfo);
  };
  return (
    <div className="Search">
      <h2>Weather App By Brjraj</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={WeatherInfo} />
    </div>
  );
}
