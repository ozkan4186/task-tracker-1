import React from 'react'

const Button = ({setShowAddTask,showAddTask}) => {
  return (
    <div>
        <button onClick={()=> setShowAddTask(!showAddTask)}> {showAddTask ?"Close Add Task Bar":"open"} </button>
    </div>
  )
}

export default Button