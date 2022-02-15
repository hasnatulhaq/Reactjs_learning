import { useState,useEffect } from "react";

function Example() {
  const [count, setCount] = useState(78);
  useEffect(() => {
    // Update the document title using the browser API
    console.log("line no 6")
  },[]);
  
  
  return (
    <div>
      {console.log("line no 9")}
      <p>You clicked {count} times</p>
      <button style={{color:"red"}} onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


export default Example;