import React from 'react'
import ComponentC from './ComponentC'

function ComponentB({userName,setUserName}) {
  return (
    <div>
      <h1>Compoent B {userName} </h1>
      <ComponentC userName={userName} setUserName={setUserName} />
    </div>
  )
}

export default ComponentB
