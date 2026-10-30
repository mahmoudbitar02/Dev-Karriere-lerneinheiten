import { Button } from "@/components/ui/button";
import BoardCard from "./components/BoardCard";
import { useState } from "react";
import type { Board } from "@/types/board.type";

function BoardOverview() {
  const [board, setBoard] = useState<Board[]>([
    { id: "board-1", title: "test", tasks: [{ id: "task-1", title: "abc", column: "ToDo", description: "def" }] },
  ]);
  return (
    <div className="container">
      <div className="flex flex-row place-content-between bg-red-50 py-4">
        <h1 className="text-xl font-bold">Meine Boards</h1>
        <Button>Neuer Board</Button>
      </div>
      <div className="bg-red-300 grid grid-cols-3 gap-4 pt-4">
        {board.map((board) => {
          return <BoardCard board={board} />;
        })}
      </div>
    </div>
  );
}

export default BoardOverview;
