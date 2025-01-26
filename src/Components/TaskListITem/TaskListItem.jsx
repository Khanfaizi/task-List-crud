import React from "react";

function TaskListItem({name ,deleteBtnHandler, index}) {
  return (
    <>
      <li class="collection-item">
        {name}
        <a class="delete-item secondary-content">
          <i class="fa fa-remove"
          onClick={() => deleteBtnHandler(index)}
          ></i>
          
        </a>
      </li>
    </>
  );
}

export default TaskListItem;
