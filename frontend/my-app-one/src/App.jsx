import React, {  useState } from "react";
// import Dice from "./components/Dice";
import CardGame from "./components/CardGame";
import UserCard from "./components/UserCard";
import ListData,{CityData} from './components/List';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Navbar/Footer";
import ClassEx1 from "./components/ClassEx1";
import StateEx3 from "./components/StateEx3";
import StateList from "./components/StateList";
import Form from "./components/Form";
import ComponentA from "./context/ComponentA";
import UserContext from "./context/UserContext";
import LifeCycleClass from "./components/LifeCycle";
import LifeCycleFun from "./components/LifeCycleFun";

const App = () => {
  const [userName,setUserName] = useState("Tarun");
  const [show, setShow] = useState(true);
  // const fruits = [
  //   { name: "apple", color: "red" },
  //   { name: "banana", color: "yellow" },
  //   { name: "grape", color: "purple" }
  // ];

  // const cities = ["Nellore", "Hyderabad", "Chennai"];

  return (
    <div className="bg-gray-900 text-white h-full">
      <UserContext.Provider value={{userName,setUserName}} >
      <Navbar  />
      <ComponentA userName={userName} setUserName={setUserName} />
<LifeCycleFun />
     {show && <LifeCycleClass />}
        <button onClick={() => setShow(!show)}> {show ? "Hide" : "Show"} </button>
      {/* <Form />
      <h1 className="font-bold">Fruits</h1>
      {fruits.map((fruit, index) => (
        <ListData key={index} name={fruit.name} color={fruit.color} />
        
      ))}

      <h1 className="font-bold">Cities</h1>

      {cities.map((city, index) => (
        <CityData key={index} city={city} />
      ))}
      
      <StateEx3 />
      <StateList />
      <Dice />
      <CardGame />
      <UserCard  />
      <ClassEx1 name="Class Ex1" />
      <Footer /> */}
      </UserContext.Provider>
    </div>
  );
};

export default App;