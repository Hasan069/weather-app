import React from "react";
import { Input } from "@/components/ui/input";
import { TbCloudSearch } from "react-icons/tb";

const SearchBar = () => {
  return (
    <div>
      <div className="flex items-center gap-4 -translate-y-10">
        <Input
          type="city"
          placeholder="Search for your city"
          className="h-12 text-lg rounded-2xl"
        />
        <TbCloudSearch className="h-10 w-10 cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchBar;
