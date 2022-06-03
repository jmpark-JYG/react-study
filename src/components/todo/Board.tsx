import { Categories, useStore } from "../../stores/todo.store";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";
import styled from "styled-components";

function Board() {
  const { todos, category, setCategory } = useStore();
  const list = todos.filter((todo) => todo.category === category);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as Categories);
  };
  return (
    <div>
      <Title>TO DO List</Title>
      <hr />
      <select onInput={onInput}>
        <option value={Categories.TODO}>TODO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <CreateTodo />
      <ul>
        {list.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

const Title = styled.h2`
  /* text-align: center; */
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

export default Board;

// function Board() {
//   const [toDo, setToDo] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(toDo);
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }
