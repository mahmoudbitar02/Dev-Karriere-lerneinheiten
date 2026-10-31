import { Button } from "@/components/ui/button";
import BoardCard from "./components/BoardCard";
import { useState } from "react";
import type { Board } from "@/types/board.type";

function BoardOverview() {
  const [board, setBoard] = useState<Board[]>([
    { id: "board-1", title: "test", tasks: [{ id: "task-1", title: "abc", column: "ToDo", description: "def" }] },
  ]);
  return (
    <>
      <div className="flex flex-row place-content-between">
        <h1 className="text-xl font-bold">Meine Boards</h1>
        <Button>Neuer Board</Button>
      </div>
      <div className=" grid grid-cols-3 gap-4 pt-4">
        {board.map((board) => {
          return <BoardCard board={board} />;
        })}
      </div>
    </>
  );
}

export default BoardOverview;
