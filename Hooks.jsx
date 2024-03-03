
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

////////////////////////////////////////////////////////////////////////

//UseCONTEXT
//takin data from distant parents to child.

import { createContext } from "react";
type ThemeContextType = "light" | "dark";
const ThemeContext = createContext<ThemeContextType>("light");

//Wrap the components that need the context with a context provider:
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState<ThemeContextType>("light");

  return (
    <ThemeContext.Provider value={theme}>
      <MyComponent />
    </ThemeContext.Provider>
  );
};

//Call useContext 
import { useContext } from "react";

const MyComponent = () => {
  const theme = useContext(ThemeContext);

  return <p>The current theme is {theme}.</p>;
};

////////////////////////////////////////////////////////////////////////
//useEffect
//let a component connect to and synchronize with external. Like data fetching.

import React, { useEffect } from 'react';

const CoolComponent = () => {
  useEffect(() => {
    console.log('Rendering the component on the display');
  });

  return <h1>using the useEffect </h1>;
};

export default CoolComponent;
//means everytime your rendre the Cool component, teh console log will be rendered and diplayed. 