"use client"

import LandingTutorial from "@/components/landing/LandingTutorial";
import LandingDailyTracks from "@/components/landing/LandingDailyTracks";
import LandingMetrics from "@/components/landing/LandingMetrics";
import LandingProgressTracking from "@/components/landing/LandingProgressTracking";
import LandingCta from "@/components/landing/LandingCta";

export default function LandingProject() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-10">
      <section id="home">
        <LandingTutorial />
      </section>

      <section id="workspace">
        <LandingDailyTracks />
      </section>

      <section id="how-it-works">
        <LandingMetrics />
      </section>

      <section id="features">
        <LandingProgressTracking />
      </section>

      <LandingCta />
    </div>
  );
}