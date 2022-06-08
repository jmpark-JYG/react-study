import { Todo } from "../stores/board.store";

export const TODO_LIST_KEY = "TODO_LIST";

export function loadBoards() {
  const boards = localStorage.getItem(TODO_LIST_KEY);
  return boards ? JSON.parse(boards) : null;
}

export function saveBoards(boards: { [key: string]: Todo[] }) {
  localStorage.setItem(TODO_LIST_KEY, JSON.stringify(boards));
}
