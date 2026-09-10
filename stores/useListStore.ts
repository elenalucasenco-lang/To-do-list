import { create } from "zustand";
import { Task } from "../app/types";

interface TaskState {
  tasks: Task[];
  addTask: (task: Task) => void;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
}

const TaskList = create<TaskState>((set) => ({
  tasks: [],
  addTask: (task) => {
    return set((state) => ({
      tasks: [...state.tasks, task],
    }));
  },
  toggleTask: (id) => {
    return set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t,
      ),
    }));
  },
  removeTask: (id) => {
    return set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },
}));

export default TaskList