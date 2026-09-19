import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function LandingCta() {
  return (
    <div className="flex px-50">
    <div className="flex flex-row justify-between w-full shadow-2xl rounded-xl p-4 border-2 items-center ">
      <div className="flex flex-row gap-2 items-center">
        <ShieldCheck className="text-purple-600 size-10 bg-purple-100 p-2 rounded-lg  "/>

        <div className="flex flex-col">
          <span className="font-semibold text-sm">Ready to find your flow?</span>
          <span className="text-gray-800">Join thousands of users who plan their day with Flowly.</span>
        </div>
      </div>

      <div className="flex flex-row gap-2">
        <Button
          className=" bg-purple-600 p-4 text-sm font-semibold text-white  transition-all duration-300
              hover:-translate-y-1
              hover:scale-105              
              active:scale-95
              
              hover:bg-purple-600"
        >
          Get Started
        </Button>
        <Button
          className=" p-4 text-sm font-semibold text-black border-purple-500  transition-all duration-300
              hover:-translate-y-1
              hover:scale-105              
              active:scale-95
              hover:text-white
              hover:bg-purple-600
               bg-white
              "
        >
          Learn more
        </Button>
      </div>
    </div>
    </div>
  );
}
