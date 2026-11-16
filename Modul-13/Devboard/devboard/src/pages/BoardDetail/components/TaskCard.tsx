import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Task } from "@/types/board.type";
import { Trash2 } from "lucide-react";

function TaskCard({
  task,
  setDraggedColumn,
  onDeleteTask,
  handleEditTask,
}: {
  task: Task;
  setDraggedColumn: (column: string | null) => void;
  onDeleteTask: (task: Task) => void;
  handleEditTask: (task: Task) => void;
}) {
  return (
    <Card
      className=" cursor-pointer"
      size="sm"
      draggable={true}
      onDragStart={(e) => {
        e.dataTransfer.setData(`column-${task.column}`, "");
        e.dataTransfer.setData(`id-${task.id}`, "");

        setDraggedColumn(task.column);
      }}
      onClick={() => {
        handleEditTask(task);
      }}
    >
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>
          {task.description}
          {task.deadLine ? new Date(task.deadLine).toLocaleDateString("de-DE") : ""}
        </CardDescription>
        <CardAction>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onDeleteTask(task);
            }}
            className="text-muted-foreground hover:text-destructive"
            variant={"ghost"}
            size={"icon-lg"}
          >
            <Trash2 />
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  );
}

export default TaskCard;
