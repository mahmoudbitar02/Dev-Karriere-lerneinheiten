import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Check, Pencil, X } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import BoardColumn from "./components/BoardColumn";
import type { Task } from "@/types/board.type";
import { useReducer } from "react";
import { getBoardById } from "@/lib/api";
import { useBoardDetailReducer } from "@/hooks/boardDetailReducer";
import TaskDialog from "./components/TaskDialog";

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
  const [isEditTaskDialogOpen, setIsEditTaskDialogOpen] = useState(false);
  const [editTask, setEditTask] = useState<Task | undefined>();

  const [board, dispatchBoard] = useReducer(useBoardDetailReducer, boardFromLocalStorage);

  function handleAddTask(task: Task) {
    dispatchBoard({ type: "ADD_TASK", data: task });
  }

  function handleDeleteTask(task: Task) {
    dispatchBoard({ type: "DELETE_TASK", data: task });
  }

  function handleUpdateTaskStatus(id: string, newColumn: "ToDo" | "Progress" | "Done") {
    dispatchBoard({ type: "UPDATE_TASK_STATUS", data: { id, newColumn } });
  }

  function handleEditTask(task: Task) {
    setIsEditTaskDialogOpen(true);
    setEditTask(task);
  }

  function handleUpdateTask(task: Task) {
    dispatchBoard({ type: "UPDATE_TASK", data: task });
  }

  function handleEditBoardTitle() {
    setIsEditBoardName(true);
    setBoardName(board.title);
  }

  function handleSubmitEditBoardTitle() {
    dispatchBoard({ type: "UPDATE_BOARD_NAME", data: boardName });
    setIsEditBoardName(false);
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
      <TaskDialog
        key={editTask?.id ?? String(Math.random())}
        open={isEditTaskDialogOpen}
        handleOpenChange={setIsEditTaskDialogOpen}
        onSubmitUpdate={handleUpdateTask}
        task={editTask ?? { id: "", title: "", description: "", column: "ToDo" }}
        title="Task bearbeiten"
        description="Ändere die Details der Aufgabe."
      />
      <div className="grid grid-cols-3 gap-4 mt-8">
        <BoardColumn
          onDeleteTask={handleDeleteTask}
          onAddTask={handleAddTask}
          title="ToDo"
          tasks={board.tasks.filter((task) => task.column === "ToDo")}
          draggedColumn={draggedColumn}
          setDraggedColumn={setDraggedColumn}
          handleEditTask={handleEditTask}
        />
        <BoardColumn
          onDeleteTask={handleDeleteTask}
          onAddTask={handleAddTask}
          title="Progress"
          tasks={board.tasks.filter((task) => task.column === "Progress")}
          draggedColumn={draggedColumn}
          setDraggedColumn={setDraggedColumn}
          handleEditTask={handleEditTask}
        />
        <BoardColumn
          onDeleteTask={handleDeleteTask}
          onAddTask={handleAddTask}
          title="Done"
          tasks={board.tasks.filter((task) => task.column === "Done")}
          draggedColumn={draggedColumn}
          setDraggedColumn={setDraggedColumn}
          handleEditTask={handleEditTask}
        />
      </div>
    </div>
  );
}

export default BoardDetail;
