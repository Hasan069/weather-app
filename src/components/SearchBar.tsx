"use client"


import React,{useState} from "react";
import { Input } from "@/components/ui/input";
import { TbCloudSearch } from "react-icons/tb";

const SearchBar = () => {
  const [city, setCity] = useState<string>(''); // State to store the city name input
  
  
  return (

    
    <div>
      <div className="flex items-center gap-4 -translate-y-10">
        <Input
          type="city"
          placeholder="Search for your city"
          className="h-12 text-lg rounded-2xl"
          value={city}
          onChange={(e) => setCity(e.target.value)} // Update city state as user types
          
        />
        <TbCloudSearch className="h-10 w-10 cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchBar;
