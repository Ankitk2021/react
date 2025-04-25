import { useRef, useState } from "react";

import "./App.css";
import Timer from "./Timer";

function App() {
  const [count, setCount] = useState(0);

  var normal = 0;
  var useVar = useRef(0);
  var btnRf = useRef();
  //useVar ek object hai jismein current name ki property hai jisme 0 jake initial store ho gya hai
  function handle() {
    setCount(count + 1);
    normal = normal + 1;
    useVar.current = useVar.current + 1;
    console.log("Normal Variable ", normal);
    //Jitna baar setCount call hota hai utni baar normal = 0 hota hai mtlb har re-render par normal ki value persist nhi kar rhi hai
    console.log("UseRef variavle ", useVar.current);
    //Jitna baar setCount call hota hai utni baar useVar = useRef(0)  nhi hota hai mtlb har re-render par useVar ki value persist  kar rhi hai

    //useRef ke var mein koi change ya updation hone par koi page re-render nhi hota hai
  }

  function changeColor(){
    btnRf.current.style.backgroundColor='red'
  }

  return (
    <>
      <button ref={btnRf}>PlayGround</button>
      <p>Count : {count}</p>
      <p>
        Normal : {normal} useRef-Count : {useVar.current}
      </p>

      <button onClick={handle}>Increment</button>

      <button onClick={changeColor}>Change BackGround</button>



      <h1>StopWatch App ⌚</h1>

      <Timer/>


    </>
  );
}

export default App;
