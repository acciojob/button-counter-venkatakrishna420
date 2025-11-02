import React, { useState } from "react";
import './../styles/App.css';


const App = () => {
  return (
    <div>
     <Render />
        {/* Do not remove the main div */}
    </div>
  )
}

export default App

 function Render() {
  const[count,setState]=useState(0)  
  return (
    <div>
      <p>Button clicked {count} times</p>      
      <button onClick={()=>setState(count+1)}>Click me</button>
    </div>
    
  );
}
