import { useState, useEffect, useMemo, useCallback } from "react";
import List from "./List";

const initialTodos = [
  { id: 1, task: "Do homework" },
  { id: 2, task: "Go to the course" },
];

function App() {
  const [todoList, setTodoList] = useState(initialTodos);
  const [task, setTask] = useState("");

  useEffect(() => {
    console.log("Rendering <App />");
  });

  const handleCreate = () => {
    const newTodo = {
      id: Date.now(),
      task,
    };
    setTodoList([...todoList, newTodo]);
    setTask("");
  };

  return (
    <div className="App">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>

      <List todoList={todoList} />
    </div>
  );
}

export default App;
