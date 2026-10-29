import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Check, Pencil, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import BoardColumn from "./components/BoardColumn";

function BoardDetail() {
  const [isEditBoardName, setIsEditBoardName] = useState(false);
  const [boardName, setBoardName] = useState("name des Boards");

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
        <BoardColumn title="ToDo" />
        <BoardColumn title="Progress" />
        <BoardColumn title="Done" />
      </div>
    </div>
  );
}

export default BoardDetail;
