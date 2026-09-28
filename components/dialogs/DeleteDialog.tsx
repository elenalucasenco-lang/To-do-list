import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CircleAlert } from "lucide-react";
import useListStore from "@/stores/useListStore"
interface DeleteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  id:string
}
export default function DeleteDialog({
  open,
  onOpenChange,
  id
}: DeleteDialogProps) {

    const {removeTask} = useListStore()
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex flex-col ">
        <div className="flex items-start flex-col gap-2">
          <CircleAlert className="size-8 bg-red-100 text-red-400 rounded-full p-2 " />
          <span className="font-bold text-xl">Delete this task?</span>
          <span className="text-sm -mt-2">
            Are you sure you want to remove `Read 20 pages of design
            principles? This action cannot be undone.
          </span>
          <div className="flex justify-end flex-row w-full mt-2 gap-2">
            <button
            onClick={() => onOpenChange(false)}
            className="border-2 border-gray-200 p-1 px-2 hover:bg-gray-100 rounded-xl">Cancel</button>
            <button 
            onClick={() => (removeTask(id), onOpenChange(false))}
            className="border-2 border-red-400 p-1 px-2 text-white bg-red-400 hover:bg-red-300  hover:border-red-300 rounded-xl">Delete Task</button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
