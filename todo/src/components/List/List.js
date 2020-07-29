import React from "react";
import "./styles.css";

const List = (props) => {
  return (
      <div className="todo-item">
        <input type="checkbox" checked={props.list.completed}/>
        <p>{props.list.text}</p>
      </div>
  );
}

export default List;