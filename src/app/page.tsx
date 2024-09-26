import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="container w-[50vw] md:min-w-[450px] mx-auto flex justify-center items-center ">
        <SearchBar />
      </div>
      <div className="relative">report will be here</div>
    </div>
  );
}
