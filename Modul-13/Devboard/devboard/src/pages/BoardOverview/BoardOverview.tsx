import { Button } from "@/components/ui/button";
import BoardCard from "./components/BoardCard";
import { useState } from "react";
import type { Board } from "@/types/board.type";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

function BoardOverview() {
  const [board, setBoard] = useState<Board[]>([
    { id: "board-1", title: "test", tasks: [{ id: "task-1", title: "abc", column: "ToDo", description: "def" }] },
  ]);

  const [boardNameInput, setBoardNameInput] = useState("Neues Board");
  return (
    <>
      <div className="flex flex-row place-content-between">
        <h1 className="text-xl font-bold">Meine Boards</h1>
        <Dialog>
          <DialogTrigger
            render={
              <Button>
                <Plus className="size-5" /> Neuer Board
              </Button>
            }
          ></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Neues Board erstellen</DialogTitle>
              <DialogDescription>
                Gib dem Board einen Namen. Es werden automatisch drei Spalten angelegt (To Do, In Progress, Done).
              </DialogDescription>
            </DialogHeader>
            <Input placeholder="Board Name" defaultValue="Neues Board" value={boardNameInput} onChange={(e) => setBoardNameInput(e.target.value)} />
            <DialogFooter>
              <DialogClose
                render={
                  <Button variant="outline" className="mt-4">
                    Abbrechen
                  </Button>
                }
              ></DialogClose>

              <DialogClose render={<Button className="mt-4">Speichern</Button>}></DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
