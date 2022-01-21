import React from "react";
import Task from "./Task"

function TaskList({tasks, onDeleteClick}) {
  return (
    <div className="tasks">
      {tasks.map(task=><Task key={task.text} text={task.text} category={task.category} onDeleteClick={onDeleteClick}/>)}
    </div>
  );
}

export default TaskList;
