import useListStore from "@/stores/useListStore";
import { Trash } from "lucide-react";
import DeleteDialog from "../dialogs/DeleteDialog";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";



export default function TaskCard() {
  const { tasks, toggleTask } = useListStore();
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-5 w-full">
      <div className="flex w-full flex-col gap-3">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex w-full items-center justify-between rounded-xl border-2 border-gray-200 p-4"
          >
            <div className="flex flex-row items-center gap-10">
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => toggleTask(task.id) }
              />
              <span
                className={task.completed ? "line-through text-gray-400" : ""}
              >
                {task.title}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-sm text-purple-600 bg-purple-100 flex items-center rounded-xl  px-2">
                {task.category}
              </span>
              <span
                className={`text-sm  flex items-center rounded-xl  px-2 ${task.priority === "Medium" ? "text-orange-300 bg-orange-100" : task.priority === "Low" ? "text-yellow-400 bg-yellow-100" : "text-green-400 bg-green-100"}`}
              >
                {task.priority}
              </span>
              <button onClick={() => setOpen(true)}>
                <Trash className="size-8 hover:bg-red-100 hover:text-red-400 rounded-lg p-2 " />
              </button>

              <DeleteDialog open={open} onOpenChange={setOpen} id={task.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
