import React, { useState } from 'react'

function StateEx3() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("User");
    const [show, setShow] = useState(true);
    const handleAdd = () => {
        setCount(count + 1);
    }
    const handleSub = () => {
        setCount(count - 1);
    }
    const handleReset = () => {
        setCount(0);
    }

    return (
        <div>
            <p className='font-bold text-2xl'>You clicked {count} times</p>
            <div className='flex gap-4'>

                <button className='bg-gray-700 p-4 rounded-lg ' onClick={handleAdd}>Add</button>
                <button className='bg-gray-700 p-4 rounded-lg ' onClick={handleSub}>Sub</button>
                <button className='bg-gray-700 p-4 rounded-lg ' onClick={handleReset}>Reset</button>
            </div>
            <div className='flex flex-col gap-6'>
                {show && <p className='font-bold'>Name: {name}</p>}
                <div className='flex gap-6'>

                <button onClick={() => setName("Coder")}>Change Name</button>
                <button onClick={() => setShow(!show)}>
                    {show ? "Hide" : "Show"}
                </button>
                </div>

            </div>
        </div>
    )
}

export default StateEx3
