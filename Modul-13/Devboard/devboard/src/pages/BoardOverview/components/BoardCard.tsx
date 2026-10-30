import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Board } from "@/types/board.type";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

function BoardCard({ board }: { board: Board }) {
  return (
    <Link to={`/boards/${board.id}`}>
      <Card className="hover:shadow-md transition-shadow border border-black">
        <CardHeader>
          <CardTitle>{board.title}</CardTitle>
          <CardDescription>3 Spalten - {board.tasks.length} Tasks</CardDescription>
          <CardAction>
            <Button className="hover:text-destructive text-muted-foreground" size="icon" variant="ghost">
              <Trash2 />
            </Button>
          </CardAction>
        </CardHeader>
      </Card>
    </Link>
  );
}

export default BoardCard;
