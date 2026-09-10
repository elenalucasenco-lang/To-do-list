"use client";

import { CalendarDays, Timer } from "lucide-react";
import useListStore from "../../stores/useListStore";
import AddTaskDialog from "../dialogs/AddTaskDialog";
import { useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);

  const date = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
 const {tasks} = useListStore()
  return (
    <div className="flex h-auto w-full violetBg flex-col  ">
      <div className="items-center justify-between flex flex-row">
        <div className="p-7">
          <button type="button">
            <CalendarDays className="text-white size-7" />
          </button>
        </div>
        <div className="text-white text-3xl font-bold">{date}</div>
        <div className="flex p-7 gap-10 flex-row">
          <button type="button">
            <Timer className="text-white size-7" />
          </button>
        </div>
      </div>

      <div className="items-center justify-between flex flex-row p-2">
        <div className="text-white text-2xl">
          {tasks.length === 1 ? "1 task" : `${tasks.length} tasks`}
        </div>
        <button
          className="bg-white  p-2 rounded-lg border-2"
          onClick={() => setOpen(true)}
        >
          Add new
        </button>
      </div>
      <AddTaskDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}

