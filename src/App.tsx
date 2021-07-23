import { useState, useEffect, useMemo, useCallback } from "react";
import List from "./List";
import { Todo } from "./List";

const initialTodos = [
  { id: 1, task: "Do homework" },
  { id: 2, task: "Go to the course" },
];

function App() {
  const [todoList, setTodoList] = useState(initialTodos);
  const [task, setTask] = useState("");
  const [term, setTerm] = useState("");

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

  const handleSearch = () => {
    setTerm(task);
  };

  const filteredTodoList = useMemo(
    () =>
      todoList.filter((todo: Todo) => {
        console.log("Filtering");
        return todo.task.toLocaleLowerCase().includes(term.toLocaleLowerCase());
      }),
    [term, todoList]
  );

  return (
    <div className="App">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleSearch}>Search</button>

      <List todoList={filteredTodoList} />
    </div>
  );
}

export default App;
