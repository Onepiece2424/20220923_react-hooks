import React from "react";
import './App.css';
// import IncrementButton from "./components/IncrementButton";
import  UseEffectExample from "./components/UseEffectExample";

function App() {
  // 初回レンダリング時に実行されるコンソールテキスト
  // console.log("render App");

  // useStateの利用
  // const [count, setCount] = useState(0);
  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);

  // useCallbackの利用
  // const handleClick = useCallback(() => {
  //   console.log("click");
  // }, []);

  // 実行関数
  // const double = count => {
  //   let i = 0;
  //   while (i < 10000000) i++;
  //   return count * 2;
  // }

  // const doubleCount = useMemo(() => double(count2), [count2]);


  // const DoubleCounter = useMemo(() => {
  //   console.log("render DoubleCounter");
  //   const doubleCount = double(count2);

  //   return (
  //     <p>
  //       Counter: {count2}, {doubleCount}
  //     </p>
  //   );
  // }, [count2]);


  // useRefを使用したDOMの参照
  // const inputEl = useState(null);
  // const [text, setText] = useState("");
  // const handleClick = () => {
  //   setText(inputEl.current.value);
  // };

  // console.log("レンダリング！！！");

  // useEffect使用時のuseState


  return (
    <>
     {/* <div>こんにちは！</div>
     <p>Counter: {count}</p>
     <button onClick={() => setCount(count + 1)}>Increment count</button>
     <IncrementButton handleClick={handleClick}/>
     <button onClick={handleClick}>logging</button> */}
     {/* <br></br>
     <p>useMemoの利用</p>
     <h2>Increment count1</h2>
     <p>Counter: {count1}</p>
     <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>

     <h2>Increment count2</h2>
     <p>Counter: {count2}</p>
     <button onClick={() => setCount2(count2 + 1)}>Increment count2</button> */}


     {/* <input ref={inputEl} type="text" />
     <button onClick={handleClick}>set text</button>
     <p>テキスト：{text}</p> */}

     <UseEffectExample />
    </>
  )
}

export default App;
