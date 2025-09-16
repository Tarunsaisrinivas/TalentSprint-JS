import React, { useContext,useState }  from 'react';
import UserContext from './UserContext';


function ComponentE() {
  const {userName,setUserName} = useContext(UserContext);
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
        <input type="text" placeholder='Enter Name'  onChange={(e) => setInput(e.target.value)} />
        <input type="submit" onClick={handleClick}  />
      </form>
    </div>
  );
}

export default ComponentE;