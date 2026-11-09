import type { Board } from "../types/board.type";

const LOCAL_STORAGE_BOARDS_KEY = "boards";
export function getBoards(): Board[] {
  const boardsStringified = localStorage.getItem(LOCAL_STORAGE_BOARDS_KEY) ?? "";
  const boards: Board[] = JSON.parse(boardsStringified) ?? [];
  return boards;
}

export function saveBoards(boards: Board[]): void {
  localStorage.setItem(LOCAL_STORAGE_BOARDS_KEY, JSON.stringify(boards));
}
