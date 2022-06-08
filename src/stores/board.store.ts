import create from "zustand";

interface BoardState {
  boards: {
    [key: string]: Todo[];
  };
  setBoards: (boards: { [key: string]: Todo[] }) => void;
  addTodo: (boardId: string, todo: Todo) => void;
}

export interface Todo {
  id: number;
  text: string;
}

export const useStore = create<BoardState>((set, get) => ({
  boards: {
    TODO: [],
    DOING: [],
    DONE: [],
  },
  setBoards: (boards) => {
    set(() => ({ boards }));
  },
  addTodo: (boardId, todo) => {
    const boards = { ...get().boards };
    boards[boardId].unshift(todo);
    set(() => ({
      boards,
    }));
  },
}));
