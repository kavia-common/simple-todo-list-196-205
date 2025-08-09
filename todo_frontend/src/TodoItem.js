import React from "react";

// PUBLIC_INTERFACE
function TodoItem({ todo }) {
  /**
   * Represents a single todo item card.
   * Displays title and subtitle, and action icons for check, delete, and edit.
   * Placeholders for action handlers (to be filled in with logic).
   */
  return (
    <div className="todo-card">
      <div className="todo-card__content">
        <div>
          <div className="todo-card__title">{todo.title}</div>
          <div className="todo-card__subtitle">{todo.subtitle}</div>
        </div>
      </div>
      <div className="todo-card__actions">
        <button
          className="icon-btn check"
          aria-label="Mark as completed"
          // TODO: implement mark complete logic
          onClick={() => {}}
        />
        <button
          className="icon-btn trash"
          aria-label="Delete task"
          // TODO: implement delete logic
          onClick={() => {}}
        />
        <button
          className="icon-btn pencil"
          aria-label="Edit task"
          // TODO: implement edit logic
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

export default TodoItem;
