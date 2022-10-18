import React from 'react'
import { useState } from 'react'

const Task = ({item}) => {
  console.log(item.id)
  const [click, setClick] = useState(false)

    

 
  return (
    <div>
      <div className='yy' onClick={()=>setClick(!click)} >
        {click ? (<div> <h2 style={{textDecoration:"line-through"}} > {item.text }</h2>
             <p>{ item.day}</p> </div>): (<div> <h2>{item.text }</h2>
                 <p>{ item.day}</p> </div>)  
                               
                        
                        
                        
      }
 
 
 
 
 
      

      </div>
       
       

    
    </div>
  )
}

export default Task