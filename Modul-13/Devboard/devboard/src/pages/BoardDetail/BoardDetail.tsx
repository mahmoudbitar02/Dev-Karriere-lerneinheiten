import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Check, Pencil, X } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import BoardColumn from "./components/BoardColumn";
import type { Board } from "@/types/board.type";

function BoardDetail() {
  const { id } = useParams();
  const [isEditBoardName, setIsEditBoardName] = useState(false);
  const [boardName, setBoardName] = useState("name des Boards");

  const [board, setBoard] = useState<Board>({
    id: "board-1",
    title: "test",
    tasks: [{ id: "task-1", title: "abc", column: "InProgress", description: "def" }],
  });

  function renderBoardDetailHeader() {
    if (isEditBoardName) {
      return (
        <>
          <Input value={boardName} onChange={(event) => setBoardName(event.target.value)} className="w-96" />
          <Button variant="ghost" size="icon-lg" onClick={() => setIsEditBoardName(false)}>
            <Check />
          </Button>
          <Button variant="ghost" size="icon-lg" onClick={() => setIsEditBoardName(false)}>
            <X />
          </Button>
        </>
      );
    } else {
      return (
        <>
          <h1 className="text-2xl font-bold">{boardName}</h1>
          <Button variant="ghost" size="icon-lg" onClick={() => setIsEditBoardName(true)}>
            <Pencil />
          </Button>
        </>
      );
    }
  }
  return (
    <div className="container">
      <div className="flex flex-row gap-2 items-center">
        <Link to={"/boards"}>
          <Button variant="ghost" size="icon-lg">
            <ArrowLeft />
          </Button>
        </Link>
        {renderBoardDetailHeader()}
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <BoardColumn title="ToDo" tasks={board.tasks.filter((task) => task.column === "ToDo")} />
        <BoardColumn title="Progress" tasks={board.tasks.filter((task) => task.column === "InProgress")} />
        <BoardColumn title="Done" tasks={board.tasks.filter((task) => task.column === "Done")} />
      </div>
    </div>
  );
}

export default BoardDetail;
