import React, { useEffect, useState } from "react";

const LifeCycleFun = () => {
    const [count,setCount] = useState(0);
    const [date,setDate] = useState(new Date());
    useEffect(() => {
        console.log("useEffect called");
        console.log("YOu have clicked",count);
        
    },[count])

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    },[date])

  return <>

  <h1>{count}</h1>
  <button onClick={() => setCount(count + 1)}>Increment</button>
  <h1>{date.toLocaleTimeString()}</h1>

  </>;
};

export default LifeCycleFun;
