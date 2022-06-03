import { useState } from "react";

const Counter = () => {
  const [item, setItem] = useState(1);
  const increment = () => setItem(item + 1);
  const decrement = () => setItem(Math.max(0, item - 1));
  return (
    <div>
      <h1>Count: {item}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Counter;
