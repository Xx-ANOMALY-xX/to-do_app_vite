import React from 'react'

const Header = (props) => {
  const {tasks} = props

  return( 
        <div className="to-do">
        <div className="text">
        <h1>LET'S TODO</h1>
        <p>keep doing good things.</p>
        </div>
        <div className="circle">
            <h1>{tasks.filter((t) => t.completed === true).length}/{tasks.length}</h1>
        </div>
        </div>
    )
}

export default Header