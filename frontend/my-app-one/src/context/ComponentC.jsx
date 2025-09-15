import React from 'react'
import ComponentD from './ComponentD'

function ComponentC({ userName, setUserName }) {
  return (
    <div className="">

      <h1>Componet C {userName || "Name"}</h1>
      <ComponentD userName={userName} setUserName={setUserName} />
    </div>
  )
}

export default ComponentC
