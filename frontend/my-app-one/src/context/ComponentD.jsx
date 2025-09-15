import React from 'react'
import ComponentE from './ComponentE'

function ComponentD({ userName,setUserName }) {
    return (
        <div>
            <h1>Compoent D {userName} </h1>
            <ComponentE userName={userName} setUserName={setUserName}  />
        </div>
    )
}

export default ComponentD
