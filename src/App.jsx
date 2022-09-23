import React, { useState, useCallback, useMemo } from "react";
import './App.css';
import IncrementButton from "./components/IncrementButton";

function App() {
  // 初回レンダリング時に実行されるコンソールテキスト
  console.log("render App");

  // useStateの利用
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // useCallbackの利用
  const handleClick = useCallback(() => {
    console.log("click");
  }, []);

  // 実行関数
  const double = count => {
    let i = 0;
    while (i < 10000000) i++;
    return count * 2;
  }

  const doubleCount = useMemo(() => double(count2), [count2]);

  return (
    <>
     {/* <div>こんにちは！</div>
     <p>Counter: {count}</p>
     <button onClick={() => setCount(count + 1)}>Increment count</button>
     <IncrementButton handleClick={handleClick}/>
     <button onClick={handleClick}>logging</button> */}
     <br></br>
     <p>useMemoの利用</p>
     <h2>Increment(fast)</h2>
     <p>Counter1: {count1}</p>
     <button onClick={() => setCount1(count1 + 1)}>Increment(fast)</button>
     <h2>Increment(slow)</h2>
     <p>
       Counter2: {count2}, {doubleCount}
     </p>
     <button onClick={() => setCount2(count2 + 1)}>Increment(slow)</button>
    </>
  )
}

export default App;
