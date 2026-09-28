export interface Task {
  id: string;
  title: string;
  category: "Work" | "Focus" | "Personal";
  priority: "High-Priority" | "Medium" | "Low";
  completed: boolean;
}