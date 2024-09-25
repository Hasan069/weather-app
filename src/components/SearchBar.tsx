import React from "react";
import { Input } from "@/components/ui/input";
import { FaSearchLocation } from "react-icons/fa";


const SearchBar = () => {
  return (
    <div>
      <div className="flex items-center gap-4 h-32 ">\
        
        <Input type="city" placeholder="Enter the name of your city" className="h-12 text-lg"/>
        <FaSearchLocation className="h-10 w-10"/>
      </div>
    </div>
  );
};

export default SearchBar;
