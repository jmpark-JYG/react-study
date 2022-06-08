import { DragDropContext, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import Board from "./components/todo/Board";
import { useStore } from "./stores/board.store";

function App() {
  const boards = useStore((state) => state.boards);
  const setBoards = useStore((state) => state.setBoards);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    console.log(draggableId, destination, source);
    // board 내 이동
    if (destination?.droppableId === source.droppableId) {
      const boardCopy = [...boards[source.droppableId]];
      boardCopy.splice(source.index, 1);
      boardCopy.splice(destination?.index, 0, draggableId);
      setBoards({
        ...boards,
        [source.droppableId]: boardCopy,
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
    </DragDropContext>
  );
}

const Wrapper = styled.div`
  display: flex;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

export default App;
