"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { TbCloudSearch } from "react-icons/tb";

interface SearchBarProps {
  onCityChange: (city: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onCityChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // Update local input value
  };

  const handleSearch = () => {
    onCityChange(inputValue); // Pass the city name back to parent
  };

  return (
    <div>
      <div className="flex items-center gap-4">
        <Input
          type="city"
          placeholder="Search for your city"
          className=" h-12 text-lg rounded-2xl w-72"
          value={inputValue}
          onChange={handleInputChange} // Update city state as user types
        />
        <TbCloudSearch
          className="h-10 w-10 cursor-pointer"
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
