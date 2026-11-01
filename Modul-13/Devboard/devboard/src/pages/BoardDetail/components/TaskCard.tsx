import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Task } from "@/types/board.type";
import { Trash2 } from "lucide-react";

function TaskCard({ task, setDraggedColumn }: { task: Task; setDraggedColumn: (column: string | null) => void }) {
  return (
    <Card
      size="sm"
      draggable={true}
      onDragStart={(e) => {
        e.dataTransfer.setData("column", task.column);
        setDraggedColumn(task.column);
      }}
    >
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>{task.description}</CardDescription>
        <CardAction>
          <Button className="text-muted-foreground hover:text-destructive" variant={"ghost"} size={"icon-lg"}>
            <Trash2 />
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  );
}

export default TaskCard;
