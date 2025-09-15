import React from 'react'
import ComponentB from './ComponentB'

function ComponentA({ userName, setUserName }) {
  console.log(userName);

  return (
    <div>
      <h1>Compoenent A <span> {userName} </span></h1>
      <ComponentB userName={userName} setUserName= {setUserName }/>
    </div>
  )
}

export default ComponentA
