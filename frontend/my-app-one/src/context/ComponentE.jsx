import React, { useContext,useState }  from 'react';
import { SampleContext } from '../App';

function ComponentE() {
  const {userName,setUserName} = useContext(SampleContext);
  const [input, setInput] = useState('');
  const handleClick = (e) => {
    e.preventDefault();
    setUserName(input);
    setInput('');
    
  };


  return (
    <div>
      <h1>Component E {userName}</h1>
      <form action="">
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <input type="submit" onClick={handleClick}  />
      </form>
    </div>
  );
}

export default ComponentE;