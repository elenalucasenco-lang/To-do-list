"use client";

import TaskList from "@/stores/useListStore";
import { Trash } from "lucide-react";
export default function List() {
  const { tasks, toggleTask , removeTask } = TaskList();
  console.log(tasks);

  return (
    <div>
      <p className="p-4 text-4xl font-bold">My tasks</p>
      <div className="p-10  flex flex-col gap-4">
        {tasks.map((item) => (
          <div
            key={item.id}
            className="flex items-row items-center justify-between purpleish max-w-3xl p-8 rounded-2xl"
          >
            <div className="flex items-row items-center gap-30">
              <p className="text-xl">
                {item.startTime} - {item.endTime}
              </p>
              <div className="flex flex-col">
                <p className="font-bold text-2xl">{item.title}</p>
                <p>{item.description}</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <button onClick={() => toggleTask(item.id)} 
              className={`flex size-6 shrink-0 items-center justify-center rounded-lg border-2 `}
                ></button>
              <div onClick={() => removeTask(item.id)}>
                <Trash className="size-6" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
