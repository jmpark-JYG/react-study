import create from "zustand";

// export enum Categories {
//   TODO = "TODO",
//   DOING = "DOING",
//   DONE = "DONE",
// }

interface BoardState {
  boards: {
    [key: string]: string[];
  };
  setBoards: (boards: { [key: string]: string[] }) => void;
  // setBoard: (boardId: string, todds: string[]) => void;
}

export const useStore = create<BoardState>((set) => ({
  boards: {
    TODO: ["a", "b"],
    DOING: ["c", "d", "e"],
    DONE: ["f", "g"],
  },
  setBoards: (boards) => {
    set(() => ({ boards }));
  },
}));
