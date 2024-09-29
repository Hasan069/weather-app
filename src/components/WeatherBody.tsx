"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import cloud from "@/assets/cloud.png";
import { IoWaterOutline } from "react-icons/io5";

const WeatherBody = () => {
  const [weatherData, setWeatherData] = useState<any>("");
  const API_KEY = "967f5832c40b86b12c421754abf2608a";
  const city = "Dhaka";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.log("error fetcing weather data", error);
      }
    };
    fetchWeatherData();
  }, []);

  return (
    <>
      <div className="-translate-y-7">
        <div className="container w-[50vw] md:min-w-[450px] mx-auto flex justify-center items-center">
          <Image src={cloud} alt="cloud" className="h-40 w-52"></Image>
        </div>
        <div className="text-center">
          <p className="font-bold text-5xl">{weatherData.main?.temp}C°</p>
          <p className="font-semiboldbold text-2xl">cloudy</p>
        </div>

        <div className="weather-details mt-3 flex justify-around">
          <div className="flex gap-2">
            <IoWaterOutline className="h-16 w-16" />
            <div className="mt-1">
              <p>Humidity: </p>
              <span className="text-xl">{weatherData.main?.humidity}%</span>
            </div>
          </div>

          <div className="flex gap-2">
            <IoWaterOutline className="h-16 w-16" />
            <div className="mt-1">
              <span className="text-xl">{weatherData.wind?.speed} m</span>
              <p>Wind Speed</p>
            </div>
          </div>

          <div className="flex gap-2">
            <IoWaterOutline className="h-16 w-16" />
            <div className="mt-1">
              <span className="text-xl"> Precipitation:</span>
              <p> {weatherData.weather?.[0]?.description} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherBody;
