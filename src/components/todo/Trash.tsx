import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

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

const Arae = styled.div<{ isDraggingOver: boolean }>`
  width: 70px;
  height: 70px;
  position: fixed;
  right: 100px;
  bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isDraggingOver ? "tomato" : "white")};
  border-radius: 50%;
  transform: scale(${(props) => (props.isDraggingOver ? "1.5" : "1")});
  transition: transform 0.5s ease-in-out;
`;

export default Trash;
