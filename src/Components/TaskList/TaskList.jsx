import React from "react";
import TaskListItem from "../TaskListITem/TaskListItem";

function TaskList(props) {
  const {taskList , deleteBtnHandler} = props
    return (
    <>
      <ul class="collection">
        {/* {taskList.map((singleTask,index) => {
            return <TaskListItem key={index}
            name = {singleTask}
            deleteBtnHandler={deleteBtnHandler}
            index = {index}
            />
        })} */}
        {taskList.map((singleTask,index) => {
          return <TaskListItem
          key={index}
          name={singleTask}
          index={index}
          deleteBtnHandler={deleteBtnHandler}
          />
        })}
      </ul>
    </>
  );
}

export default TaskList;
