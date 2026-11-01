import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import TaskCard from "./TaskCard";
import type { Task } from "@/types/board.type";
import { useState } from "react";

function BoardColumn({
  title,
  tasks,
  draggedColumn,
  setDraggedColumn,
}: {
  title: string;
  tasks: Task[];
  draggedColumn: string | null;
  setDraggedColumn: (column: string | null) => void;
}) {
  const [isDragHover, setIsDragHover] = useState(false);

  function handleDragHover(event: React.DragEvent<HTMLDivElement>) {
    if (draggedColumn === title) {
      setIsDragHover(false);
    } else {
      setIsDragHover(true);
    }
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    if (draggedColumn === title) {
      setIsDragHover(false);
    } else {
      // call function to move task to this column
    }
  }

  return (
    <div
      className={`border border-black rounded-lg bg-gray-50 ${isDragHover && " border-primary border"}`}
      onDrop={handleDrop}
      onDragEnter={handleDragHover}
      onDragOver={handleDragHover}
      onDragLeave={() => setIsDragHover(false)}
    >
      <div className="flex items-center justify-between border-b border-black p-4">
        <h3 className="font-bold">{title}</h3>

        <Button variant={"ghost"} size={"icon-lg"}>
          <Plus />
        </Button>
      </div>
      <div className="p-4 ">
        <div className={`border-2 border-primary border-dashed text-primary text-center p-2 rounded-lg bg-primary/10 ${!isDragHover && "hidden"}`}>
          Hier ablegen
        </div>
        {tasks.map((task) => {
          return <TaskCard task={task} setDraggedColumn={setDraggedColumn} />;
        })}
      </div>
    </div>
  );
}

export default BoardColumn;
