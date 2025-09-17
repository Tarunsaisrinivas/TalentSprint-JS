import React,{useState} from "react";

const useCounter = (initial) => {
    const [count, setCount] = useState(initial || 0);

    const increment = () => setCount( count => count + 1);
    const decrement = () => setCount( count => count - 1);
    const reset = () => setCount(initial);
    return [count, increment, decrement, reset];
};

export default useCounter;
