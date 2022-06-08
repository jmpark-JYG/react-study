import { Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Todo, useStore } from "../../stores/board.store";
import DraggableCard from "./DraggableCard";

interface BoardProps {
  boardId: string;
  todos: Todo[];
}

interface AreaProps {
  isDraggingFromThisWith: boolean;
  isDraggingOver: boolean;
}

interface todoForm {
  todo: string;
}

function Board({ boardId, todos }: BoardProps) {
  const { register, setValue, handleSubmit } = useForm<todoForm>();
  const addTodo = useStore((state) => state.addTodo);
  const onValid = ({ todo }: todoForm) => {
    const newTodo = {
      id: Date.now(),
      text: todo,
    };
    addTodo(boardId, newTodo);
    setValue("todo", "");
  };
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input {...register("todo", { required: true })} type="text" placeholder={`Add task on ${boardId}`} />
      </Form>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Area
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
          >
            {todos.map((todo, index) => (
              <DraggableCard key={todo.id} index={index} todoId={todo.id} todoText={todo.text} />
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
  padding-top: 10px;
  background-color: #dadfe9;
  border-radius: 5px;
  overflow: hidden;
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

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;

export default Board;
