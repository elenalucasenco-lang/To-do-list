import FlowlyLogo from "../../public/landingImg/FlowlyLogo.png";
import Image from "next/image";
import { Button } from "../ui/button";
export default function LandingHearder() {
  return (
    <div className="flex justify-center pt-10 relative">
      <div className="flex items-center  w-full max-w-7xl px-10 justify-between border-2 border-gray-100 shadow-xl rounded-3xl">
        <div className="transition-transform duration-300 hover:scale-105 flex flex-row items-center">
          <Image src={FlowlyLogo} alt="logoImg" className="h-15 w-auto  " />
        </div>

        <div className="flex flex-row gap-8">
          <button
            className="text-sm font-semibold transition-all duration-300
              hover:-translate-y-1 hover:text-purple-600"
          >
            How it works
          </button>
          <button
            className="text-sm font-semibold transition-all duration-300
              hover:-translate-y-1 hover:text-purple-600"
          >
            Features
          </button>
          <button
            className="text-sm font-semibold transition-all duration-300
              hover:-translate-y-1 hover:text-purple-600"
          >
            Home
          </button>
        </div>

        <div className="flex gap-4">
          <Button
            className=" bg-purple-600 p-1 text-sm font-semibold text-white  transition-all duration-300
              hover:-translate-y-1
              hover:scale-105              
              active:scale-95"
          >
            Login
          </Button>

          <Button
            className=" bg-purple-600 p-1 text-sm font-semibold text-white  transition-all duration-300
              hover:-translate-y-1
              hover:scale-105              
              active:scale-95"
          >
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}
