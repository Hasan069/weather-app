import React from "react";
import Image from "next/image";
import cloud from "@/assets/cloud.png";
import { IoWaterOutline } from "react-icons/io5";

const WeatherBody = () => {
  return (
    <div className="-translate-y-7">
      <div className="container w-[50vw] md:min-w-[450px] mx-auto flex justify-center items-center">
        <Image src={cloud} alt="cloud" className="h-40 w-52"></Image>
      </div>
      <div className="text-center">
        <p className="font-bold text-5xl">24 C°</p>
        <p className="font-semiboldbold text-2xl">cloudy</p>
      </div>

      <div className="weather-details mt-3 flex justify-around">
        <div className="flex gap-2">
          <IoWaterOutline className="h-16 w-16" />
          <div className="mt-1">
            <span className="text-xl">0%</span>
            <p>Humidity</p>
          </div>
        </div>

        <div className="flex gap-2">
          <IoWaterOutline className="h-16 w-16" />
          <div className="mt-1">
            <span className="text-xl">0%</span>
            <p>Humidity</p>
          </div>
        </div>

        <div className="flex gap-2">
          <IoWaterOutline className="h-16 w-16" />
          <div className="mt-1">
            <span className="text-xl">0%</span>
            <p>Humidity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherBody;
