import React from "react";
import "./TodoPage.css";
import "./common.css";
import "./todo_page.css";
import TodoList from "./TodoList";

// PUBLIC_INTERFACE
function TodoPage() {
  /** 
   * Main container for the TODO PAGE.
   * Contains status bar, app bar, nav bar, task list, and floating add button.
   * TODO: Insert state hooks and handlers as needed for add/edit/delete integration.
   */
  return (
    <div className="todo-page">
      {/* Status Bar */}
      <div className="status-bar"></div>

      {/* App Bar/Header */}
      <header className="app-bar">
        <div className="app-bar__calendar" aria-label="Calendar icon" />
        <div className="app-bar__title">TODO APP</div>
      </header>

      {/* Navigation Bar */}
      <nav className="nav-bar">
        <button className="nav-bar__tab active">
          <span className="nav-bar__icon nav-bar__icon--playlist"></span>
          <span className="nav-bar__text">All</span>
        </button>
        <button className="nav-bar__tab">
          <span className="nav-bar__icon nav-bar__icon--tick"></span>
          <span className="nav-bar__text inactive">Completed</span>
        </button>
      </nav>

      {/* Todos List */}
      <main>
        <TodoList />
      </main>

      {/* Floating Add Button */}
      <button
        className="add-todo-btn"
        aria-label="Add new task"
        // TODO: Implement add todo handler
        onClick={() => {/* placeholder for add todo logic */}}
      ></button>
    </div>
  );
}

export default TodoPage;
