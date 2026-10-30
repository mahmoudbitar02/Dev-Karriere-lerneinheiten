import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Task } from "@/types/board.type";
import { Trash2 } from "lucide-react";

function TaskCard({ task }: { task: Task }) {
  return (
    <Card>
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
