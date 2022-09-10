import React, { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());
  const [timeZone, settimeZone] = useState(false);
  const [showHidden, setShowHidden] = useState(true);

  useEffect(() => {
    document.title = `Clicked ${count} Times`;
  }, [count, timeZone]);

  useEffect(() => {
    setInterval(() => setTime(new Date()), 100);
    // setInterval(()=>setTime((preTime)=>preTime+1),100)  //nor working
  });
  return (
    <>
      <h2 className="text-cyan-500 ">
        {showHidden && time.toLocaleTimeString(timeZone ? "bn-BD" : "en-US")}
      </h2>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click To incriment
      </button>
      <button onClick={() => setCount((prev) => prev - 1)}>
        Click To decriment
      </button>
      <br />
      <br />
      <button
        className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={() => settimeZone((timeZone) => !timeZone)}
      >
        {!timeZone ? "Go to Bangla Clock" : "Go to English Clock"}
      </button>
      <button className="py-2 px-4 bg-rose-500 rounded-md text-white font-semibold hover:bg-rose-600" onClick={() => setShowHidden((showHidden) => !showHidden)}>
        {showHidden ? "Hide the Clock" : "Show the Clock"}
      </button>
    </>
  );
}
