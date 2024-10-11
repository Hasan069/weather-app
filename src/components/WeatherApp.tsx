"use client"
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherBody from "./WeatherBody";

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState<string>(""); // State to hold the city name

  const handleCityChange = (newCity: string) => {
    console.log("City updated:", newCity);
    setCity(newCity); // Update city when search input changes
  };

  return (
    <div>
      {/* Pass the city change handler to SearchInput */}
      <SearchBar onCityChange={handleCityChange} />
      {/* Pass the city to WeatherBody */}
      <WeatherBody city={city} />
    </div>
  );
};

export default WeatherApp;
