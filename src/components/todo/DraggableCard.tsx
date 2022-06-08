import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface DraggableCardProp {
  index: number;
  todo: string;
}

function DraggableCard({ index, todo }: DraggableCardProp) {
  return (
    <Draggable key={todo} draggableId={todo} index={index}>
      {(provided, snapshot) => (
        <Card ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} isDragging={snapshot.isDragging}>
          {todo}
        </Card>
      )}
    </Draggable>
  );
}

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${(props) => (props.isDragging ? "e4f2ff" : "white")};
  box-shadow: ${(props) => (props.isDragging ? "0px 2px 5px rgba(0,0,0,0.05)" : "none")};
`;

export default React.memo(DraggableCard);
