import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [counter, setCounter] = useState(0);

  // Callback function to be passed to the child component
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter <= 0) {
      return;
    } else {
      setCounter(counter - 1);
    }
  };

  const handleReset = () => {
    setCounter(counter * 0);
  };

  // useEffect
  // useEffect(() => {
  //   console.log(counter + "useEfect");
  // },[]);

  return (
    <div className="parent">
        <h3>1.Props</h3>
      <h3>Counter value: {counter}</h3>
      <div>
        {/* <button onClick={handleIncrement}>Increment Counter</button>
      <button onClick={handleDecrement}>Decrement Counter</button>
      <button onClick={handleReset}>Reset Counter</button> */}
        <Child
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          reset={handleReset}
        />
      </div>
    </div>
  );
}

export default Parent;
