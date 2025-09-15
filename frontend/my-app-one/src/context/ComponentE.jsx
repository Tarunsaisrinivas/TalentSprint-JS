import React  from 'react';

function ComponentE({ userName, setUserName }) {
  const handleClick = () => {
    setUserName("Tarun Sai Srinivas");
  };


  return (
    <div>
      <h1>Component E {userName}</h1>
      <button onClick={handleClick}>CLICK ME</button>
    </div>
  );
}

export default ComponentE;