import React from "react";


const MyComponent = () =>{
    const handleClick =() =>{
        console.log("Button Clicked");
    }

    const handleInputChange = (event) =>{
            console.log(event.target.value);
    }
    return<>
      <h3>2.Event Handlers</h3>
      <div>
      {/* Attaching Event Handlers and passing props as function */}
       <button onClick={handleClick}>Click Me</button>
        </div>
     <div>
        <hr/>
       {/* Event Object and Parameters , passing an event object*/}
      <input type="text" onChange={handleInputChange}></input>
      </div>
    </>

}

export default MyComponent