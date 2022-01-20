import React, {useState} from "react";
import Task from "./Task"

function TaskList({tasks, seletedCategory, onDeleteClick}) {

  const filteredTask = tasks.filter(task=>{
    if(seletedCategory==="All") return true;
    return task.category === seletedCategory
  })
  return (
    <div className="tasks">
      {filteredTask.map(task=><Task key={task.text} text={task.text} category={task.category} onDeleteClick={onDeleteClick}/>)}
    </div>
  );
}

export default TaskList;
