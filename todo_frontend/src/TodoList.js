import React from "react";
import TodoItem from "./TodoItem";

// PUBLIC_INTERFACE
function TodoList() {
  /**
   * Displays a vertical list of todos. 
   * Replace the `demoTodos` with real state/props when backend logic is ready.
   */
  const demoTodos = [
    { id: 1, title: "TODO TITLE", subtitle: "TODO SUB TITLE" },
    { id: 2, title: "TODO TITLE", subtitle: "TODO SUB TITLE" },
    { id: 3, title: "TODO TITLE", subtitle: "TODO SUB TITLE" },
    { id: 4, title: "TODO TITLE", subtitle: "TODO SUB TITLE" },
    { id: 5, title: "TODO TITLE", subtitle: "TODO SUB TITLE" }
  ];

  return (
    <section className="todos-list">
      {demoTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </section>
  );
}

export default TodoList;
