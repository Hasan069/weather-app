"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import cloud from "@/assets/cloud.png";
import { IoWaterOutline } from "react-icons/io5";
import { FaWind } from "react-icons/fa";
import { GiBottleVapors } from "react-icons/gi";
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from "react-icons/fa6";
import { FaCloudRain } from "react-icons/fa";
import { MdOutlineVisibility } from "react-icons/md";
import { FaCloud } from "react-icons/fa";

const WeatherBody = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [weatherData, setWeatherData] = useState<any>("");
  const [sunrise, setSunrise] = useState<string | null>(null);
  const [sunset, setSunset] = useState<string | null>(null);
  const API_KEY = "967f5832c40b86b12c421754abf2608a";
  const city = "Dhaka";

  const convertUnixToTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    return date.toLocaleTimeString(); // Returns the time in a readable format (HH:MM:SS AM/PM)
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        setWeatherData(data);

        setSunrise(convertUnixToTime(data.sys.sunrise));
        setSunset(convertUnixToTime(data.sys.sunset));
      } catch (error) {
        console.log("error fetcing weather data", error);
      }
    };
    fetchWeatherData();
  }, []);

  return (
    <div className="-translate-y-7">
      {weatherData ? (
        <div>
          <div className="container w-[50vw] md:min-w-[450px] mx-auto flex justify-center items-center">
            <Image src={cloud} alt="cloud" className="h-40 w-52"></Image>
          </div>
          <div className="text-center ">
            
            <p className="font-bold text-4xl mt-4">
              {weatherData.main?.temp}C° {/* this line shows temparature*/}
            </p>
            <p className="font-bold text-xl mt-5">
              feels like {weatherData.main?.feels_like}C°
            </p>
          </div>

          <div className="weather-details flex justify-around overflow-x-scroll mt-10 gap-1 translate-y-16">
            <div className="flex p-3 h-24 w-52  border border-slate-700 rounded-xl gap-2">
              <IoWaterOutline className="h-16 w-16" />
              <div>
                <p>Humidity</p>
                <span>{weatherData.main?.humidity}%</span>{" "}
                {/* this line shows humidity*/}
              </div>
            </div>

            <div className="flex p-3 h-24 w-52  border border-slate-700 rounded-xl gap-2">
              <FaWind className="h-16 w-16" />
              <div>
                <p>Wind Speed</p>
                <span> {weatherData.wind?.speed}m</span>{" "}
                {/* this line shows wind speed*/}
              </div>
            </div>

            <div className="flex p-3 h-24 w-52  border border-slate-700 rounded-xl gap-2">
              <GiBottleVapors className="h-16 w-16" />
              <div>
                <p>Precipitation</p>
                <span> {weatherData.weather?.[0]?.description}</span>{" "}
                {/* this line shows Precipitation*/}
              </div>
            </div>

            <div className="flex p-3 h-24 w-52  border border-slate-700 rounded-xl gap-2">
              <FaTemperatureArrowDown className="h-16 w-16" />
              <div>
                <span>Minimum Temparature</span>
                <p> {weatherData.main?.temp_min} </p>{" "}
                {/* this line shows minimum Temparature*/}
              </div>
            </div>

            <div className="flex p-3 h-24 w-52  border border-slate-700 rounded-xl gap-2">
              <FaTemperatureArrowUp className="h-16 w-16" />
              <div>
                <span>Maximum Temparature</span>
                <p> {weatherData.main?.temp_max} </p>{" "}
                {/* this line shows maximum temparature*/}
              </div>
            </div>

            <div className="flex p-3 h-24 w-52  border border-slate-700 rounded-xl gap-2">
              <FaCloudRain className="h-16 w-16" />
              <div>
                <span>Rain</span> {/* this line shows will it rain or not*/}
                <p>
                  {weatherData.rain?.["1h"]
                    ? `${weatherData.rain?.["1h"]} mm in the last 1 hour`
                    : "No rain data available"}
                </p>
              </div>
            </div>

            <div className="flex p-3 h-24 w-52  border border-slate-700 rounded-xl gap-2">
              <FaCloud  className="h-16 w-16" />
              <div>
                <span>cloud</span> {/* this line shows cloud*/}
                <p >{weatherData.clouds?.all}</p>
              </div>
            </div>


            <div className="flex p-3 h-24 w-52  border border-slate-700 rounded-xl gap-2">
              <MdOutlineVisibility className="h-16 w-16" />
              <div>
                <span>Visibility</span>
                <p> {weatherData.visibility} </p>
              </div>
            </div>

            <div className="flex p-3 h-24 w-52  border border-slate-700 rounded-xl gap-2">
              <MdOutlineVisibility className="h-16 w-16" />
              <div>
                <span>sunrise</span>
                <p> {sunrise} </p>
              </div>
            </div>

            <div className="flex p-3 h-24 w-52  border border-slate-700 rounded-xl gap-2">
              <MdOutlineVisibility className="h-16 w-16" />
              <div>
                <span>sunset</span>
                <p> {sunset} </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading weather data....</p>
      )}
    </div>
  );
};

export default WeatherBody;
