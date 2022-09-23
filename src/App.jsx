import React, { useState, useCallback } from "react";
import './App.css';
import IncrementButton from "./components/IncrementButton";

function App() {
  console.log("render App");

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("click");
  }, []);

  return (
    <>
     <div>こんにちは！</div>
     <p>Counter: {count}</p>
     <button onClick={() => setCount(count + 1)}>Increment count</button>
     <IncrementButton handleClick={handleClick}/>
     <button onClick={handleClick}>logging</button>
    </>
  )
}

export default App;
