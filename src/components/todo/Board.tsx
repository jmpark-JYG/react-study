import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

interface BoardProps {
  boardId: string;
  todos: string[];
}

interface AreaProps {
  isDraggingFromThisWith: boolean;
  isDraggingOver: boolean;
}

function Board({ boardId, todos }: BoardProps) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Area
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
          >
            {todos.map((todo, index) => (
              <DraggableCard key={index} index={index} todo={todo} />
            ))}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 300px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
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

const Area = styled.div<AreaProps>`
  padding: 20px;
  background-color: ${(props) => (props.isDraggingOver ? "pink" : props.isDraggingFromThisWith ? "#b2bec3" : "transparent")};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
`;

export default Board;
