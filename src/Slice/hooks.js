import { useState } from "react";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(78);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button style={{color:"red"}} onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


export default Example;