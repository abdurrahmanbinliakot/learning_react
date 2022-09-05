import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount]=useState(0)
    
  return (
    <>
    <div>{count}</div>
    <button onClick={()=>setCount((prev)=>prev +1)}>Click To incriment </button>
    <button onClick={()=>setCount((prev)=>prev -1)}>Click To decriment </button>
    </>
  )
}
