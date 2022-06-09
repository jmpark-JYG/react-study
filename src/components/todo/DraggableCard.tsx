import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface DraggableCardProp {
  index: number;
  todoId: number;
  todoText: string;
}

function DraggableCard({ index, todoId, todoText }: DraggableCardProp) {
  return (
    <Draggable key={todoId} draggableId={todoId + ""} index={index}>
      {(provided, snapshot) => (
        <Card ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} isDragging={snapshot.isDragging}>
          {todoText}
        </Card>
      )}
    </Draggable>
  );
}

const Card = styled.div<{ isDragging: boolean }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.isDragging ? "tomato" : "white")};
  box-shadow: ${(props) => (props.isDragging ? "0px 2px 5px rgba(0,0,0,0.5)" : "none")};
`;

export default React.memo(DraggableCard);
