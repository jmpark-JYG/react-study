import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface DraggableCardProp {
  index: number;
  todo: string;
}

function DraggableCard({ index, todo }: DraggableCardProp) {
  console.log(`${todo} render: ${index}`);

  return (
    <Draggable key={todo} draggableId={todo} index={index}>
      {(provided) => (
        <Card ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
          {todo}
        </Card>
      )}
    </Draggable>
  );
}

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: white;
`;

export default React.memo(DraggableCard);
