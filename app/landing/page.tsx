"use client"

import LandingHearder from "@/components/landing/LandingHeader"; 
import LandingTutorial from "@/components/landing/LandingTutorial";
export default function Home() {
  return (
    <div className="min-h-screen w-full  flex flex-col gap-10 ">
   <LandingHearder/>
   <LandingTutorial />
    </div>
  );
}