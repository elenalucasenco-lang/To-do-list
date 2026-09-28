// "use client";

// import { Sparkles, Tag } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import useListStore from "@/stores/useListStore";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useMutation } from "@tanstack/react-query";
// import { toast } from "sonner";
// import TaskCard from "./TaskCard";

// export default function List() {
//   const { addTask, tasks } = useListStore();
//   const completedTasks = tasks.filter((t) => t.completed).length;
//   const percent =
//     tasks.length === 0 ? 0 : Math.round((completedTasks / tasks.length) * 100);
//   const taskSchema = z.object({
//     title: z.string().min(1, "Titlul e obligatoriu"),
//     category: z.enum(["Work", "Focus", "Personal"]),
//     priority: z.enum(["High-Priority", "Medium", "Low"]),
//   });

//   type TaskFormValues = z.infer<typeof taskSchema>;

//   const hadleCreateMutation = useMutation({
//     mutationFn: async (data: TaskFormValues) => {
//       return addTask({
//         id: crypto.randomUUID(),
//         title: data.title,
//         category: data.category,
//         priority: data.priority,
//         completed: false,
//       });
//     },
//     onSuccess: () => {
//       reset();
//     },
//     onError: (error) => {
//       toast.error(error.message);
//     },
//   });

//   const handleCreat = (data: TaskFormValues) => {
//     hadleCreateMutation.mutate(data);
//   };

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { isValid },
//   } = useForm<TaskFormValues>({
//     resolver: zodResolver(taskSchema),
//     mode: "onChange",
//     defaultValues: {
//       title: "",
//       category: "Work",
//       priority: "Medium",
//     },
//   });

//   return (
//     <form onSubmit={handleSubmit(handleCreat)}>
//       <div className="mx-auto mt-20 flex w-full max-w-7xl flex-col items-start justify-center px-6">
//         <div className="flex w-full items-start justify-between gap-10">
//           {/* Left side */}
//           <div className="flex flex-col gap-2">
//             <div className="flex w-fit items-center gap-2 rounded-xl bg-purple-100 px-3 py-1 text-sm text-purple-600">
//               <Sparkles className="size-4" />
//               Daily Task Workspace
//             </div>

//             <span className="text-4xl font-bold">My Tasks</span>

//             <span className="text-gray-500">
//               Plan, organize, and check off your priorities for today.
//             </span>

//             <div className="mt-2 flex items-center gap-1 text-lg font-medium">
//               <Tag className="size-4" />
//               Filter
//             </div>
//           </div>

//           {/* Progress card */}
//           <div className="flex w-80 flex-col gap-3 rounded-xl border border-gray-200 p-4 shadow-sm">
//             <div className="flex items-center justify-between">
//               <span className="font-semibold">Daily Progress</span>

//               <span className="text-sm text-gray-500">
//                 {completedTasks} of {tasks.length} tasks completed
//               </span>
//             </div>

//             <div className="h-2 w-full rounded-full bg-gray-200">

//               <div
//                 style={{ width: `${percent}%` }}
//                 className="h-2 rounded-full bg-purple-600"
//               />
//             </div>

//             <div className="flex items-center justify-between text-sm">
//               <span className="font-medium text-purple-600">
//                 {percent}% achieved
//               </span>

//               <span className="text-gray-500">Keep going!</span>
//             </div>
//           </div>
//         </div>

//         <div className="mt-2 h-0.5 w-full bg-gray-200"></div>

//         <div className="mt-5 flex w-full flex-row justify-between gap-10 rounded-xl border-2 border-gray-200 bg-gray-50 p-4">
//           <Input
//             {...register("title")}
//             className="w-200 bg-white text-black hover:border-purple-600"
//             placeholder="What would you like to accomplish next?"
//           />

//           <select id="category" {...register("category")}>
//             <option value="Work">Work</option>
//             <option value="Focus">Focus</option>
//             <option value="Personal">Personal</option>
//           </select>

//           <select id="priority" {...register("priority")}>
//             <option value="High-Priority">High-Priority</option>
//             <option value="Medium">Medium</option>
//             <option value="Low">Low</option>
//           </select>

//           <button
//             className="rounded-lg bg-purple-600 p-2 text-white"
//             disabled={!isValid}
//             type="submit"
//           >
//             + Add new
//           </button>
//         </div>

//         <TaskCard />
//       </div>
//     </form>
//   );
// }


"use client";

import { Sparkles, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import useListStore from "@/stores/useListStore";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import TaskCard from "./TaskCard";

export default function List() {
  const { addTask, tasks } = useListStore();
  const completedTasks = tasks.filter((t) => t.completed).length;
  const percent =
    tasks.length === 0 ? 0 : Math.round((completedTasks / tasks.length) * 100);
  const taskSchema = z.object({
    title: z.string().min(1, "Titlul e obligatoriu"),
    category: z.enum(["Work", "Focus", "Personal"]),
    priority: z.enum(["High-Priority", "Medium", "Low"]),
  });

  type TaskFormValues = z.infer<typeof taskSchema>;

  const hadleCreateMutation = useMutation({
    mutationFn: async (data: TaskFormValues) => {
      return addTask({
        id: crypto.randomUUID(),
        title: data.title,
        category: data.category,
        priority: data.priority,
        completed: false,
      });
    },
    onSuccess: () => {
      reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleCreat = (data: TaskFormValues) => {
    hadleCreateMutation.mutate(data);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      category: "Work",
      priority: "Medium",
    },
  });

  return (
    <form onSubmit={handleSubmit(handleCreat)}>
      <div className="mx-auto mt-8 flex w-full max-w-7xl flex-col items-start justify-center px-4 sm:px-6 md:mt-20">
        {/* Header: stacked on phone, side by side from md up */}
        <div className="flex w-full flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-10">
          {/* Left side */}
          <div className="flex flex-col gap-2">
            <div className="flex w-fit items-center gap-2 rounded-xl bg-purple-100 px-3 py-1 text-sm text-purple-600">
              <Sparkles className="size-4" />
              Daily Task Workspace
            </div>

            <span className="text-3xl font-bold sm:text-4xl">My Tasks</span>

            <span className="text-gray-500">
              Plan, organize, and check off your priorities for today.
            </span>

            <div className="mt-2 flex items-center gap-1 text-lg font-medium">
              <Tag className="size-4" />
              Filter
            </div>
          </div>

          {/* Progress card */}
          <div className="flex w-full flex-col gap-3 rounded-xl border border-gray-200 p-4 shadow-sm md:w-80">
            <div className="flex flex-wrap items-center justify-between gap-x-2">
              <span className="font-semibold">Daily Progress</span>

              <span className="text-sm text-gray-500">
                {completedTasks} of {tasks.length} tasks completed
              </span>
            </div>

            <div className="h-2 w-full rounded-full bg-gray-200">
              <div
                style={{ width: `${percent}%` }}
                className="h-2 rounded-full bg-purple-600 transition-all"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-purple-600">
                {percent}% achieved
              </span>

              <span className="text-gray-500">Keep going!</span>
            </div>
          </div>
        </div>

        <div className="mt-4 h-0.5 w-full bg-gray-200 md:mt-2"></div>

        {/* Add-task form: column on phone, row from md up */}
        <div className="mt-5 flex w-full flex-col gap-3 rounded-xl border-2 border-gray-200 bg-gray-50 p-4 md:flex-row md:justify-between md:gap-10">
          <Input
            {...register("title")}
            className="w-full bg-white text-black hover:border-purple-600 md:w-200"
            placeholder="What would you like to accomplish next?"
          />

          {/* On phone the two selects share a row; on md+ the wrapper disappears */}
          <div className="grid grid-cols-2 gap-3 md:contents">
            <select
              id="category"
              className="w-full rounded-md border border-gray-300 bg-white p-2 md:w-auto"
              {...register("category")}
            >
              <option value="Work">Work</option>
              <option value="Focus">Focus</option>
              <option value="Personal">Personal</option>
            </select>

            <select
              id="priority"
              className="w-full rounded-md border border-gray-300 bg-white p-2 md:w-auto"
              {...register("priority")}
            >
              <option value="High-Priority">High-Priority</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <button
            className="w-full rounded-lg bg-purple-600 px-4 py-2 text-white disabled:opacity-50 md:w-auto"
            disabled={!isValid}
            type="submit"
          >
            + Add new
          </button>
        </div>

        <TaskCard />
      </div>
    </form>
  );
}