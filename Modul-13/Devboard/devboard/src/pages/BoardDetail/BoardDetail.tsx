import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Check, Pencil, X } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import BoardColumn from "./components/BoardColumn";
import type { Board } from "@/types/board.type";
import { useReducer } from "react";
import { getBoardById } from "@/lib/api";
import { useBoardDetailReducer } from "@/hooks/boardDetailReducer";

function BoardDetail() {
  const [draggedColumn, setDraggedColumn] = useState<string | null>(null);
  const { id } = useParams();
  const [isEditBoardName, setIsEditBoardName] = useState(false);
  const [boardName, setBoardName] = useState("");
  const boardFromLocalStorage = getBoardById(id ?? "") ?? {
    id: "",
    title: "",
    tasks: [],
  };

  const [board, dispatchBoard] = useReducer(useBoardDetailReducer, boardFromLocalStorage);

  function handleEditBoardTitle() {
    setIsEditBoardName(true);
    setBoardName(board.title);
  }

  function handleSubmitEditBoardTitle() {
    dispatchBoard({ type: "UPDATE_BOARD_NAME", data: boardName });
    setIsEditBoardName(false);
  }

  function handleAddTask(Task: any) {
    dispatchBoard({ type: "ADD_TASK", data: Task });
  }

  function renderBoardDetailHeader() {
    if (isEditBoardName) {
      return (
        <>
          <Input value={boardName} onChange={(event) => setBoardName(event.target.value)} className="w-96" />
          <Button variant="ghost" size="icon-lg" onClick={handleSubmitEditBoardTitle}>
            <Check className="size-5" />
          </Button>
          <Button variant="ghost" size="icon-lg" onClick={() => setIsEditBoardName(false)}>
            <X className="size-5" />
          </Button>
        </>
      );
    } else {
      return (
        <>
          <h1 className="text-2xl font-bold">{board.title}</h1>
          <Button variant="ghost" size="icon-lg" onClick={handleEditBoardTitle}>
            <Pencil className="size-4" />
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
            <ArrowLeft className="size-5" />
          </Button>
        </Link>
        {renderBoardDetailHeader()}
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <BoardColumn
          onAddTask={handleAddTask}
          title="ToDo"
          tasks={board.tasks.filter((task) => task.column === "ToDo")}
          draggedColumn={draggedColumn}
          setDraggedColumn={setDraggedColumn}
        />
        <BoardColumn
          onAddTask={handleAddTask}
          title="Progress"
          tasks={board.tasks.filter((task) => task.column === "Progress")}
          draggedColumn={draggedColumn}
          setDraggedColumn={setDraggedColumn}
        />
        <BoardColumn
          onAddTask={handleAddTask}
          title="Done"
          tasks={board.tasks.filter((task) => task.column === "Done")}
          draggedColumn={draggedColumn}
          setDraggedColumn={setDraggedColumn}
        />
      </div>
    </div>
  );
}

export default BoardDetail;
