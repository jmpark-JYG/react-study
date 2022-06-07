import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

interface BoardProps {
  boardId: string;
  todos: string[];
}

function Board({ boardId, todos }: BoardProps) {
  return (
    <Droppable droppableId={boardId}>
      {(provided) => (
        <Wrapper ref={provided.innerRef} {...provided.droppableProps}>
          {todos.map((todo, index) => (
            <DraggableCard key={index} index={index} todo={todo} />
          ))}
          {provided.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
}

const Wrapper = styled.div`
  padding: 20px 10px;
  background-color: #dadfe9;
  border-radius: 5px;
  min-height: 200px;
`;

export default Board;
