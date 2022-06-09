import { useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import Board from "./components/todo/Board";
import Trash from "./components/todo/Trash";
import { loadBoards, saveBoards } from "./storage/localStorage";
import { useStore } from "./stores/board.store";

function App() {
  const boards = useStore((state) => state.boards);
  const setBoards = useStore((state) => state.setBoards);
  useEffect(() => {
    setBoards(
      loadBoards() ?? {
        TODO: [],
        DOING: [],
        DONE: [],
      }
    );
  }, [setBoards]);
  useEffect(() => {
    saveBoards(boards);
  }, [boards]);

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;

    const sourceBoard = [...boards[source.droppableId]];
    const todo = sourceBoard[source.index];
    if (destination.droppableId === "trash") {
      // 삭제
      sourceBoard.splice(source.index, 1);
      setBoards({
        ...boards,
        [source.droppableId]: [...sourceBoard],
      });
    } else if (destination.droppableId === source.droppableId) {
      // 같은 board 내 이동
      sourceBoard.splice(source.index, 1);
      sourceBoard.splice(destination.index, 0, todo);
      setBoards({
        ...boards,
        [source.droppableId]: sourceBoard,
      });
    } else if (destination.droppableId !== source.droppableId) {
      // 다른 board로 이동
      const destinationBoard = [...boards[destination.droppableId]];
      sourceBoard.splice(source.index, 1);
      destinationBoard.splice(destination.index, 0, todo);
      setBoards({
        ...boards,
        [source.droppableId]: sourceBoard,
        [destination.droppableId]: destinationBoard,
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(boards).map((boardId) => (
            <Board key={boardId} boardId={boardId} todos={boards[boardId]} />
          ))}
        </Boards>
      </Wrapper>
      <Trash />
    </DragDropContext>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  padding: 100px 10px 10px;
  justify-content: center;
  align-items: top;
  overflow: hidden;
`;

const Boards = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
`;

export default App;
