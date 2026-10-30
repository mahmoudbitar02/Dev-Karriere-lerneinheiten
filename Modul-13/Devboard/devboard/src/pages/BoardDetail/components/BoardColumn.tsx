import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import TaskCard from "./TaskCard";
import type { Task } from "@/types/board.type";

function BoardColumn({ title, tasks }: { title: string; tasks: Task[] }) {
  return (
    <div className="border border-black rounded-lg bg-gray-50">
      <div className="flex items-center justify-between border-b border-black p-4">
        <h3 className="font-bold">{title}</h3>

        <Button variant={"ghost"} size={"icon-lg"}>
          <Plus />
        </Button>
      </div>
      <div className="p-4 ">
        {tasks.map((task) => {
          return <TaskCard task={task} />;
        })}
      </div>
    </div>
  );
}

export default BoardColumn;
