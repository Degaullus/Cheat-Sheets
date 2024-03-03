
//HOOK ?
//Piece of inbuild react you can use in functionnal components. 




//UseSTATE 
//remembering the data. Will be stired in a state. 
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  // rest of the component
  
  return 
  <p>The Count = {count}</p>

}

//update ? 
setCount(count+1); 



//UseCONTEXT
//takin data from distant parents to child. 

const SomeContext = React.createContext(); 

//new component (like cloud) : PROVIDING VALUE TO REACT WITH THIS. 
const SomeComponent = () => {
    return (
        <SomeContext.Provider value="We have the electricty">
            <SomeChildComponent/>
        </SomeContext.Provider>
    )
}