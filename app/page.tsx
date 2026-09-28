"use client";
import TaskList from "@/components/Core/TasksList";
import LandingProject from "@/components/landing/LandingProject";
export default function Home() {
  return (
    <div className="min-h-screen w-full rounded-l-[50px] ">
      <LandingProject />
      <TaskList />
    </div>
  );
}
