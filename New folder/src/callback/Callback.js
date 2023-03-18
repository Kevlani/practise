import React, { useCallback, useEffect, useState } from 'react'
import List from './List';

function App() {
  const [number, setnumber] = useState(1);
  const [dark, setdark] = useState(false);

  
  const getItems = useCallback(() => {
    // Doing some extra work here
    // This Function will get trigeerd on the change of number value 
    // It will only get triggered on the change to the number
    
    for(let i = 1;i<1000_000;i++){
      if(i%100000 == 0){
        // console.log("doing some extra work")
        console.log("Notice how this method only got called as the valuee changed")
      }
    }
    return [number,number+1,number+2]
  },[number]);
  // useEffect(()=>{
  //   console.log("number render")
  // },[getItems])
  

  const theme = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }
  // useEffect(()=>{
  //   console.log("theme called");
  // },[theme])

  return (
    
    <>
    {console.log("Render method is called ... Inside the component where callbacki is called yet it didnt trigger the function isnide the usecall back  ")}
    <h1>callback</h1>
    <div style ={theme}>
      <input
        type="number"
        value={number}
        onChange={e => setnumber(parseInt(e.target.value))}
      />
      <button onClick={() => setdark(prevdark => {
        console.log("Toggling the button will triger the render")
        
        return !prevdark})}>
        Toggle button
      </button>
      {/* <div style={theme}/> */}
        <List getItems={getItems}/>
        </div>
    </>
  )
}


export default App





