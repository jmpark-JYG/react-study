import { useForm } from "react-hook-form";
import { useStore } from "../../stores/todo.store";

interface ToDoForm {
  todo: string;
}

function CreateTodo() {
  const { addTodo, category } = useStore();
  const { register, handleSubmit, setValue } = useForm<ToDoForm>();
  const handleValid = ({ todo }: ToDoForm) => {
    addTodo({ id: Date.now(), text: todo, category });
    setValue("todo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input {...register("todo", { required: "Pls write a To Do" })} type="text" placeholder="Write a To Do" />
      <button>추가</button>
    </form>
  );
}

export default CreateTodo;
