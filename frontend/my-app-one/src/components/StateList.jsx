import React, { useState } from 'react'

function StateList() {
    const [hobbies, setHobbies] = useState(["Listening Music", "Coding", "Watching Anime", "Sleeping", "Reading Latest Docs"]);
    return (
        <>
            <div className=' mx-5'>

                <ul >{hobbies.map((hobby, index) => <li key={index} className='flex w-1/6 flex-col bg-gray-600'>{hobby}</li>)}</ul>
                <button className='bg-gray-700 p-4 m-4 rounded-lg ' onClick={() => setHobbies([...hobbies, "New Hobby"])}>Add</button>
                <button onClick={() => setHobbies([...hobbies.slice(0, hobbies.length - 1)])}>Remove</button>
            </div>
        </>
    )
}

export default StateList
