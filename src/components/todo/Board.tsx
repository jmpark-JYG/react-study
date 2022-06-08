import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

interface BoardProps {
  boardId: string;
  todos: string[];
}

function Board({ boardId, todos }: BoardProps) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {todos.map((todo, index) => (
              <DraggableCard key={index} index={index} todo={todo} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 300px;
  min-height: 250px;
  padding: 10px 10px 20px;
  background-color: #dadfe9;
  border-radius: 5px;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

export default Board;
