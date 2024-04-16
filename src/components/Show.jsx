import React from 'react'

const Show = (props) => {
    const {tasks, settasks} = props
    const deletehandeler = (i) => {
        let isvalid = false;
        if(tasks[i].completed === false) {
          isvalid = confirm("Are you sure you want to delete");
        }
        if(isvalid || tasks[i].completed === true) {
          const copyTasks = [...tasks];
          copyTasks.splice(i, 1);
          settasks(copyTasks);
        }
        
      }
    
      const CompleteTaskToggle = (e, i) => {
    
        const copyTasks = [...tasks];
        copyTasks[i].completed = !tasks[i].completed;
        settasks(copyTasks);
    };
    
    let tasksrender = (
      <h2 className="text-center text-orange-700 mr-[10%] text-2xl">
          No Pending Tasks ...
      </h2>
    );
    
    if (tasks.length > 0) {
      tasksrender = tasks.map((task,index) => {
        return (
          <li key={index}>
            <div className="task">
                <div className="one">
                <div onClick={(e) => CompleteTaskToggle(e,index)} className={` min-circle ${
                                    task.completed ? "bg-green-500" : "border"
                                } `} ></div>
                <h2 className={`${
                                    task.completed && "line-through"
                                } `}>{task.title}</h2>
                </div>
                <div className="icon">
                <i className="ri-edit-box-line"></i>
                <i onClick={() => deletehandeler(index)} className="ri-delete-bin-6-line"></i>
                </div>
              </div>
          </li>
        )
      })
    }
  return (
    <ul style={{listStyle: "none"}}>{tasksrender}</ul>
  )
}

export default Show