import create from "zustand";

export enum Categories {
  TODO = "TODO",
  DOING = "DOING",
  DONE = "DONE",
}

export interface ToDoItem {
  id: number;
  text: string;
  category: Categories;
}

interface ToDoState {
  todos: ToDoItem[];
  setTodos: (todos: ToDoItem[]) => void;
  addTodo: (todo: ToDoItem) => void;
  changeCategory: (id: number, text: string, newCategory: Categories) => void;

  category: Categories;
  setCategory: (category: Categories) => void;
}

export const useStore = create<ToDoState>((set) => ({
  todos: [],
  setTodos: (todos: ToDoItem[]) => {
    set(() => ({ todos }));
  },
  addTodo: (todo: ToDoItem) => {
    set((state) => ({ todos: [todo, ...state.todos] }));
  },
  changeCategory: (id: number, text: string, newCategory: Categories) => {
    set(({ todos }) => {
      const targetIndex = todos.findIndex((toDo) => toDo.id === id);
      const newToDo = { id, text, category: newCategory };
      return { todos: [...todos.slice(0, targetIndex), newToDo, ...todos.slice(targetIndex + 1)] };
    });
  },

  category: Categories.TODO,
  setCategory: (category: Categories) => {
    set(() => ({ category }));
  },
}));
