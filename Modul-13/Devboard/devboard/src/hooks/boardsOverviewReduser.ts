import type { Board } from "@/types/board.type";
import { saveBoards } from "@/lib/api";

type BoardsOverviewState = Board[];

type BoardsOverviewAction = {
  type: "ADD" | "DELETE";
  data: Board;
};

export default function useBoardOverviewReducer(prevState: BoardsOverviewState, action: BoardsOverviewAction) {
  switch (action.type) {
    case "ADD": {
      const newState = [...prevState, action.data];
      saveBoards(newState);
      return newState;
    }
    case "DELETE":
      const newState = prevState.filter((board) => board.id !== action.data.id);
      saveBoards(newState);
      return newState;
    default:
      return prevState;
  }
}
