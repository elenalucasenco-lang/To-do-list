"use client";

import { Dialog, DialogContent } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import TaskList from "../../stores/useListStore";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
interface AddTaskDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AddTaskDialog({
  open,
  onOpenChange,
}: AddTaskDialogProps) {
  const taskSchema = z
    .object({
      startTime: z.number().min(0, "Ora de start este obligatorie"),
      endTime: z.number().min(0, "Ora de sfârșit este obligatorie"),
      title: z.string().min(1, "Titlul e obligatoriu"),
      description: z.string().optional(),
    })
    .refine((data) => data.endTime > data.startTime, {
      message: "Ora de sfârșit trebuie să fie după ora de start",
      path: ["endTime"],
    });

  type TaskFormValues = z.infer<typeof taskSchema>;

  const { addTask } = TaskList();

  const hadleCreateMutation = useMutation({
    mutationFn: async (data: TaskFormValues) => {
      return addTask({
        id: crypto.randomUUID(),
        startTime: data.startTime,
        endTime: data.endTime,
        title: data.title,
        description: data.description ?? "",
        completed: false,
      });
    },
    onSuccess: () => {
      reset();
      onOpenChange(false);
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
    formState: { errors, isValid },
  } = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    mode: "onChange",
    defaultValues: {
      startTime: 0,
      endTime: 0,
      title: "",
      description: "",
    },
  });

  

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <form onSubmit={handleSubmit(handleCreat)}>
          <div className="flex  justify-center flex-col gap-5">
            <p className="text-2xl self-center flex ">Create a task</p>

            <div>
              <p className="text-[20px]">Start time :</p>
              <Input
                type="number"
                {...register("startTime", { valueAsNumber: true })}
              />

              {errors.startTime && (
                <p className="text-red-500 text-sm">
                  {errors.startTime.message}
                </p>
              )}
            </div>

            <div>
              <p className="text-[20px]">End time :</p>
              <Input
                type="number"
                {...register("endTime", { valueAsNumber: true })}
              />

              {errors.endTime && (
                <p className="text-red-500 text-sm">{errors.endTime.message}</p>
              )}
            </div>

            <div>
              <p className="text-[20px]">Title :</p>
              <Input {...register("title")} />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            <div>
              <p className="text-[20px]">Description :</p>
              <Input {...register("description")} />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>

            <Button type="submit" disabled={!isValid} className="text-[20px]">
              {hadleCreateMutation.isPending
                ? "Se creează..."
                : "Create the task"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
