import './App.css';
import Nav from './components/Nav/Nav'
import Welcome from './components/Welcome/Welcome'
import {useState} from 'react'
import Counter from './components/Counter/Counter';
import PaulCounter from './components/Counter/PaulCounter';
import PaulCounterHard from './components/Counter/PaulCounterHard';

function App() {
  let year = 2023
  // ? let [ nameOfVariable, setFunctionToUpdateVariable ] = useState(<initial_state>)
  let [ names, setName ] = useState(["Leif", "Nick", "James", "Danika"])

    // This will render everytime. Use a callback function so it is only rendered once. useState(() => 0) with raw value useState(0)
  let [counter, setCounter] = useState(0)

  let [count, setCount] = useState(0)
  
  // what is happening under the hood in state
  // function useState(startingData) {
  //   function updateState(newData) {
  //     startingData = newData
  //   }
  //   return [startingData, updateState ]
  // }

  return (
    <>
      {/* We've mounted a component*/}
     <Nav />
      <div>The purpose of a component is to render something</div>
      <div>We're rendering something else.</div>
      <div> We can wrap everything in fragements</div>
      {/* <Welcome name={myName} /> */}
       {names.map(name => {
        return (
          <Welcome name={name} allNames={names} updateNames={setName} />
        )
       })}
      <Counter counter={counter} updateCounter={setCounter} />
      <PaulCounter />
      <PaulCounterHard count={count} setCount={setCount}/>
      <footer>Copyright, {year}</footer></>
  );
}

export default App;

// ! This is what the arrow function is doing 
  // function ourCallbackFunction(name, index) {
  //   console.log("Each name", name)
  //   console.log("Each index", index)
  //   console.log("Full array", names)
  //   return (
  //     <Welcome name={names[index]} />
  //   )
  // }