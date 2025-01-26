import logo from "./logo.svg";
import "./App.css";
import TaskForm from "./Components/TaskForm/TaskForm";
import { useState } from "react";
import TaskList from "./Components/TaskList/TaskList";
import Swal from "sweetalert2";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [filterInput , setFilterInput ] =useState ("");

  const deleteBtnHandler = (index) => {
    // if (window.confirm("are you sure?")){
    //   const taskListTemp = [...taskList];
    //   taskListTemp.splice(index, 1);
    //   setTaskList(taskListTemp);
    // }
    // if(window.confirm("are you sure you want to delete this")){
    //   const taskListTemp = [...taskList]
    //   taskListTemp.splice(index,1);
    //   setTaskList(taskListTemp);
    // }
    Swal.fire({
      title: "Do you want to delete this task?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
       if(result.isConfirmed){
        const taskListTemp = [...taskList]
        taskListTemp.splice(index,1);
        setTaskList(taskListTemp);
       }
    })
  };

  const clearTaskHandler = (e) => {
    e.preventDefault();
    // if(window.confirm("are you sure?")){
    //     setTaskList([]);
    // }
    // if(window.confirm("are you suer")){
    //   setTaskList([]);
    // }

    Swal.fire({
      title: "Do you want to clear all task?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
       if(result.isConfirmed){
        setTaskList([]);
       }
    })
  }

  // const filterHandler = (event) => {
  //   setFilterInput(event.target.value);
  // }

  // const filterInputValue = taskList.filter((singleValue) => 
  //   singleValue.toLowerCase().includes(filterInput.toLowerCase())
  // );

  const filterHandler = (e) => {
   setFilterInput(e.target.value);
  }

  const filterInputValue = taskList.filter((singleValue) => 
    singleValue.toLowerCase().includes(filterInput.toLocaleLowerCase())
  );

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col s12">
            <div class="card">
              <div class="card-content">
                <span class="card-title">Task List</span>
                <TaskForm
                  taskInput={taskInput}
                  setTaskInput={setTaskInput}
                  taskList={taskList}
                  setTaskList={setTaskList}
                />
              </div>
              <div class="card-action">
                <h5 id="task-title">Tasks</h5>
                <div class="input-field col s12">
                  <input type="text"
                  placeholder="Filter Task"
                   name="filter"
                    id="filter"
                    value={filterInput}
                    onChange={filterHandler}
                    />
                  <label for="filter"></label>
                </div>
                <TaskList
                  taskList={filterInputValue}
                  deleteBtnHandler={deleteBtnHandler}
                />
                <a href="" class="clear-tasks btn black"
                onClick={clearTaskHandler}
                >
                  Clear Task
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
