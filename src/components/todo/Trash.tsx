import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Arae = styled.div<{ isDraggingOver: boolean }>`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 50px;
  bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isDraggingOver ? "red" : "white")};
  border-radius: 50%;
  transform: scale(${(props) => (props.isDraggingOver ? "1.4" : "1")});
  transition: transform 0.5s ease-in-out;
`;

function Trash() {
  return (
    <Droppable droppableId="trash">
      {(provided, snapshot) => (
        <>
          <Arae ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
            삭제
          </Arae>
          {provided.placeholder}
        </>
      )}
    </Droppable>
  );
}

export default Trash;
