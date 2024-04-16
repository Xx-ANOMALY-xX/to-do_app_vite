import { useState } from 'react'

const Create = (props) => {
    const {tasks, settasks} = props
    const [title, settitle] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
    
        const copyTasks = [...tasks];
        copyTasks.push({ title, completed: false });
        settasks(copyTasks);
        settitle("");
      }
  return (
    <form onSubmit={submitHandler}>
         <input type="text" placeholder='write your next task ...' value={title} onChange={(e) => settitle(e.target.value)} />
          <button type="submit">
          <i id='button' className="ri-add-fill"></i>
          </button>
    </form>
  )
}

export default Create