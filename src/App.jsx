// =======================React Hook=========================================================

import { useState } from "react";
const App=()=>{
  const [name,setName]= useState("Sakshi");
  return(
    <>
    <h1>hello Everyone: {name}</h1>
    <button onClick={()=>{setName("Minakshi")}}>Click here</button>

    </>
  )
}
export default App;

// ===========================================================================

import { useState } from "react";
const App=()=>{
  const [color,setColor]= useState("Red");

  const myColor=()=>{
    setColor("Green")
  }
  return(
    <>
    <h1>My fav Color: {color}</h1>
    <button onClick={myColor}>Click here</button>
    </>
  )
}
export default App;

import { useState } from "react";
const App=()=>{
  const [color,setColor]=useState("red");
  return(
    <>
    <h1 style={{color:color}}>My fav color: {color}</h1>
    <button onClick={()=>{setColor("green")}}>Green color</button>
    <button onClick={()=>{setColor("red")}}>Red color</button>

    <button onClick={()=>{setColor("blue")}}>Blue color</button>
    <button onClick={()=>{setColor("pink")}}>Pink color</button>
    <button onClick={()=>{setColor("yellow")}}>Yellow color</button>

    </>
  )
}
export default App;

import { useState } from "react";
const App=()=>{
  const [cnt, setCnt]=useState(0);
  const myInc=()=>{
    setCnt(cnt+1)
  }
  const myDec=()=>{
    setCnt(cnt-1)
  }
  const myReset=()=>{
    setCnt(0)
  }
  return(
    <>
      <center>
    <h1>Welcome to Counter App</h1>
    <h2> My Count: {cnt}</h2>
    <button onClick={myInc}>Increment</button>
    <button onClick={myDec}>Decrement</button>
    <button onClick={myReset}>Reset</button>
    </center>
    </>
  )
}
export default App;


