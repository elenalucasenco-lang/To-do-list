"use client"

import LandingHearder from "@/components/landing/LandingHeader"; 
import LandingTutorial from "@/components/landing/LandingTutorial";
import LandingDailyTracks from "@/components/landing/LandingDailyTracks"
import LandingMetrics from "@/components/landing/LandingMetrics"
import LandingProgressTracking from "@/components/landing/LandingProgressTracking";
import LandingCta from "@/components/landing/LandingCta";
import LandingFooter from "@/components/landing/LandingFooter";
export default function Home() {
  return (
    <div className="min-h-screen w-full  flex flex-col gap-10 ">
   <LandingHearder/>
   <LandingTutorial />
   <LandingDailyTracks/>
   <LandingMetrics/>
   <LandingProgressTracking/>
   <LandingCta/>
   <LandingFooter/>
    </div>
  );
}