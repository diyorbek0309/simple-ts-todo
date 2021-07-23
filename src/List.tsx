import { FC, useEffect } from "react";
import Task from "./Task";

export type Todo = {
  id: number;
  task: string;
};

interface Props {
  todoList: Todo[];
}

const List: FC<Props> = ({ todoList }) => {
  useEffect(() => {
    console.log("Rendering <List />");
  });

  return (
    <ul>
      {todoList.map((todo: Todo) => (
        <Task key={todo.id} id={todo.id} task={todo.task} />
      ))}
    </ul>
  );
};

export default List;
