import React, { useState } from 'react'
import './App.css'
import './index.css'
import Header from './components/Header'
import Create from './components/Create'
import Show from './components/Show'

const App = () => {
  const [tasks, settasks] = useState([])

  return (
    <div>
     <div id="main">
      <div className="container">
        <Header tasks={tasks}/>
        {/*  */}
        <Create tasks={tasks} settasks={settasks}/>
         {/*  */}
        <Show tasks={tasks} settasks={settasks}/>
      </div>
     </div>
    </div>
  )
}

export default App
