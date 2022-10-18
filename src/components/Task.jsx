import React from 'react'
import { useState } from 'react'

const Task = ({item}) => {
  console.log(item.id)
  const [click, setClick] = useState(false)

    

 
  return (
    <div>
      <div onClick={()=>setClick(!click)} >
        {click ?    (<div className="def">
            <h2 style={{textDecoration:`${click}`}} >
              {item.text }</h2>
             <p> { item.day}</p>
              </div>): ( <div>
                  {item.text }</h2>
<p> { item.day}</p> 
              </div> 
                      )  
                               
                        
                        
                        
      }
 
 
 
 
 
      

      </div>
       
       

    
    </div>
  )
}

export default Task