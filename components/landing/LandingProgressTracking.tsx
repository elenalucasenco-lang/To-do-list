"use client";

import { Users, Shirt, CircleCheck } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import TasksImg from "@/public/landingImg/TasksImg.png";
import ProgressImg from "@/public/landingImg/ProgressImg.png";
import { Button } from "@/components/ui/button";
export default function LandingProgressTracking() {
  const [activeBtn, setActiveBtn] = useState<"tasks" | "progress">("tasks");
  const tasks = ["Smart Sorting", "Focus Mode", "Habit Tracking"];
  const progress = ["Streak Counter", "Weekly Insights", "Goal Completion"];
  return (
    <div className="flex flex-col gap-3 items-center text-center mt-20">
      <span className="font-bold text-4xl">Plan. Focus. Flow.</span>
      <span>
        Flowly helps you organize your day with simple, effective tools designed
        to keep you moving
        <br /> forward.
      </span>

      <div className="rounded-full relative border p-2  shadow-sm border-gray-300 mt-5 h-auto flex flex-row gap-4">
        <div
          className={`absolute top-1.5 bottom-1.5 w-1/2  rounded-full transition-transform duration-300 ease-out ${
            activeBtn === "progress" ? "translate-x-full" : "translate-x-0"
          }`}
        />
        <button
          onClick={() => setActiveBtn("tasks")}
          className={`flex flex-row items-center gap-2 transition-colors ${activeBtn === "tasks" ? "bg-purple-400 text-white rounded-full p-1" : "bg-white"} `}
        >
          <Users className="font-bold w-5 h-5" />
          <span className="font-bold">My Tasks</span>
        </button>
        <button
          onClick={() => setActiveBtn("progress")}
          className={`flex flex-row items-center gap-2 ${activeBtn === "progress" ? "bg-purple-400 text-white rounded-full p-1" : "bg-white"} `}
        >
          <Shirt className=" w-5 h-5 font-bold" />
          <span className="font-bold">Progress</span>
        </button>
      </div>

      {activeBtn === "tasks" && (
        <div className="mt-10 flex flex-row items-center gap-12">
          <Image
            src={TasksImg}
            alt="Tasks overview"
            className="w-150 rounded-xl border-2 border-gray-300 shadow-2xl shadow-gray-300"
          />

          <div className="flex max-w-md flex-col items-start gap-3">
            <span className="flex items-center gap-2 font-bold text-purple-500">
              <Users className="h-5 w-5" />
              Focus Engine
            </span>

            <span className="text-3xl font-bold">
              Smart Task Prioritization
            </span>

            <span className="text-left leading-7 text-gray-600">
              Flowly analyzes your daily habits to suggest the most impactful
              tasks first. Keep your momentum high and your focus sharp all day
              long.
            </span>

            <div className="flex flex-col gap-2 w-full">
              {tasks.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-2  border-2 rounded-xl border-purple-200 p-4 w-full"
                >
                  <CircleCheck className="h-5 text-purple-500" />
                  {item}
                </div>
              ))}
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
              <Button className=" p-4 text-sm font-semibold text-black border-purple-500  transition-all duration-300
              hover:-translate-y-1
              hover:scale-105              
              active:scale-95
              hover:text-white
              hover:bg-purple-600
               bg-white
              ">
                View Tasks
              </Button>
            </div>
          </div>
        </div>
      )}

      {activeBtn === "progress" && (
        <div className="mt-10 flex flex-row items-center gap-12">
          <Image
            src={ProgressImg}
            alt="progress img"
            className="w-150 rounded-xl border-2 border-gray-300 shadow-2xl shadow-gray-300"
          />
          <div className="flex max-w-md flex-col items-start gap-3">
            <span className="flex items-center gap-2 font-bold text-purple-500">
              <Shirt className="h-5 w-5" />
              Growth Analytics
            </span>

            <span className="text-3xl font-bold">Visual Progress Tracking</span>
            <span className="text-left leading-7 text-gray-600">
              Flowly analyzes your daily habits to suggest the most impactful
              tasks first. Keep your momentum high and your focus sharp all day
              long.
            </span>

            <div className="flex flex-col gap-2 w-full">
              {progress.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-2  border-2 rounded-xl border-purple-200 p-4 w-full"
                >
                  <CircleCheck className="h-5 text-purple-500" />
                  {item}
                </div>
              ))}
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
              <Button className=" p-4 text-sm font-semibold text-black border-purple-500  transition-all duration-300
              hover:-translate-y-1
              hover:scale-105              
              active:scale-95
              hover:text-white
              hover:bg-purple-600
               bg-white
              ">
                View Tasks
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
