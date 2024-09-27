import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import WeatherBody from "@/components/WeatherBody";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container w-[50vw] md:min-w-[450px] mx-auto flex justify-center items-center ">
        <SearchBar />
      </div>
      <WeatherBody />
    </div>
  );
}
