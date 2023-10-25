import React, { useState } from 'react'

export default function Home() {
// And() 
/* const [name, setName]= useState({})

  return (
    <div>
      {
        name.value && <h1>{name.value}</h1>
      }
     <button onClick={()=>setName({value:'Welcome'})}>Change Name</button>
    </div>
  )
  */
  const [counts, setCounts] =useState(0)
  const increment=()=>{
    setCounts(counts +1)
  }
  return (    
    <div>
      <h1>Increment Number Example</h1>
      <p>Value: {counts}</p>
      <p>{counts % 2 === 0 ? 'Even number': 'Add number'}</p>
      { /* Conditional Rendering */}
      <button onClick={increment}>Increment</button>
    </div>
  );
}
