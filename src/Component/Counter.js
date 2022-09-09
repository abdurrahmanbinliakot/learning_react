import React, { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());
  const [timeZone ,settimeZone]=useState(false)
  const [showHidden ,setShowHidden]=useState(true)

  useEffect(() => {
    document.title = `Clicked ${count} Times`;
  },[count, timeZone]);

  useEffect(()=>{
    const interval =setInterval(()=>setTime(new Date()),100)
    // setInterval(()=>setTime((preTime)=>preTime+1),100)  //nor working

   
  });
  return (
    <>
    <h2>{showHidden && time.toLocaleTimeString(timeZone? "bn-BD" : "en-US")}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click To incriment
      </button>
      <button onClick={() => setCount((prev) => prev - 1)}>
        Click To decriment
      </button>
    <br />
    <br />
      <button onClick={() => settimeZone((timeZone) => !timeZone )}>
        {!timeZone? "Go to Bangla Clock" : "Go to English Clock"}  
      </button>
      <button onClick={() => setShowHidden((showHidden) => !showHidden )}>
        {showHidden? "Hide the Clock" : "Show the Clock"}  
      </button>
    </>
  );
}
