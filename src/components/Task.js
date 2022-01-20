import React from "react";

function Task({text, category, onDeleteClick}) {
  function handleDelete(e){
    const deleteTask=
    {
      text: e.target.parentNode.childNodes[1].innerText,
      category: e.target.parentNode.childNodes[0].innerText
    }
    onDeleteClick(deleteTask)
  } 
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={e=>handleDelete(e)}>X</button>
    </div>
  );
}

export default Task;
