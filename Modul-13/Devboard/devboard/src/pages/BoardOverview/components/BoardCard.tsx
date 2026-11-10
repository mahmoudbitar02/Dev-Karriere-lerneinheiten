import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Board } from "@/types/board.type";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

function BoardCard({ board, onDelete }: { board: Board; onDelete: (id: string) => void }) {
  return (
    <Link to={`/boards/${board.id}`}>
      <Card className="hover:shadow-md transition-shadow ">
        <CardHeader>
          <CardTitle>{board.title}</CardTitle>
          <CardDescription>3 Spalten - {board.tasks.length} Tasks</CardDescription>
          <CardAction>
            <Button
              onClick={(e) => {
                e.preventDefault();
                onDelete(board.id);
              }}
              className="hover:text-destructive text-muted-foreground"
              size="icon"
              variant="ghost"
            >
              <Trash2 />
            </Button>
          </CardAction>
        </CardHeader>
      </Card>
    </Link>
  );
}

export default BoardCard;
