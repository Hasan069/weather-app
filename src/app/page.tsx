import SearchBar from "@/components/SearchBar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="container w-[50vw] md:min-w-[450px] mx-auto flex justify-center items-center ">
        <SearchBar />
      </div>
      <div className="relative">report will be here</div>
    </div>
  );
}
