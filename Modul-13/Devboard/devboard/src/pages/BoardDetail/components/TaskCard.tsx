import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Task } from "@/types/board.type";
import { Calendar, CircleUser, Trash2 } from "lucide-react";

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
        <CardDescription className="flex flex-col">
          {task.description && <span>{task.description}</span>}
          {task.assignedTo && (
            <span className="flex items-center gap-1">
              <CircleUser className="size-3" />
              {task.assignedTo}
            </span>
          )}

          {task.deadLine && (
            <span className="flex items-center gap-1">
              <Calendar className="size-3" />
              {new Date(task.deadLine).toLocaleDateString("de-DE")}
            </span>
          )}
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
