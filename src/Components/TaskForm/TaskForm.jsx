import react from "react";
import Swal from "sweetalert2";

const TaskForm = (props) => {
  const {taskInput,taskList, setTaskInput,setTaskList} = props;
//  const {taskInput , setTaskInput , taskList , setTaskList } = props;

//   const submitBtnHandler = (e) => {
//     e.preventDefault(); 
//     if(!taskInput) {
//       alert("pleae add some task")
//       return
//     }

//     const taskListTemp = [...taskList];
//     taskListTemp.push(taskInput);
//     // console.log(taskListTemp);

//     setTaskList(taskListTemp);
//     console.log(setTaskList)
//     setTaskInput("");
//   }
  
//   const TaskInputHandler = (e) => {
//     e.preventDefault()
//     setTaskInput(e.target.value);
//   }

const TaskInputHandler = (e) => {
    e.preventDefault();
    setTaskInput(e.target.value);
    // console.log(taskInput);
}

const submitBtnHandler = (e) => {
  e.preventDefault();
  if(!taskInput) {
    Swal.fire("please fill the above field")
    return;
  }
  const taskListTemp = [...taskList]
  taskListTemp.push(taskInput)
  setTaskList(taskListTemp)

  console.log(taskList)

  setTaskInput("");
}

  return (
    <>
      <div className="row">
        <form id="task-form"
         onSubmit={submitBtnHandler}>
          <div className="input-field col s12">
            <input type="text"
            placeholder="New Task" 
            name="task" 
            id="task" 
            value={taskInput}
            onChange={TaskInputHandler}
            />
            <label htmlFor="task"></label>
          </div>
          <button className="waves-effect waves-light btn" type="submit">
            Add Task
          </button>
        </form>
      </div>
    </>
  );
};

export default TaskForm;