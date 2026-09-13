import Image from "next/image";
import TutorialExemple from "../../public/landingImg/TutorialExemple.png";
import { Button } from "../ui/button";

export default function LandingTutorial() {
  const hour = new Date().getHours();

  let eventText = "";

  if (hour >= 5 && hour < 12) {
    eventText = "Good morning!";
  } else if (hour >= 12 && hour < 18) {
    eventText = "Good afternoon!";
  } else if (hour >= 18 && hour < 22) {
    eventText = "Good evening!";
  } else {
    eventText = "Good night!";
  }

  return (
    <div className="flex flex-row items-center justify-center gap-20">
      <div className="flex flex-col items-start gap-4">
        <div className="animate-[pulse_2s_ease-in-out_infinite] flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 shadow-sm">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-purple-600"></span>

          <span>{eventText}</span>
        </div>

        <span className="animate-[fadeIn_0.8s_ease-out] text-6xl font-bold">
          Plan. Focus. Flow.
        </span>

        <span className="animate-[fadeIn_1s_ease-out_0.2s_both]">
          Flowly helps you organize your daily tasks with ease. Stay
          <br />
          productive, track your progress, and find your flow state every
          <br />
          single day.
        </span>

        <div className="animate-[fadeIn_1s_ease-out_0.4s_both]">
          <Button
            className="
              bg-purple-600
              font-bold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-purple-700
              hover:shadow-lg
              active:translate-y-0
            "
          >
            Get started
          </Button>
        </div>
      </div>

      <div className="animate-[slideInRight_1s_ease-out]">
        <Image
          src={TutorialExemple}
          alt="tutorial exemple"
          className="
            h-100
            w-auto
            rounded-lg
            shadow-2xl
            shadow-gray-300
            transition-all
            duration-500
            hover:-translate-y-2
            hover:shadow-purple-200
          "
        />
      </div>
    </div>
  );
}
