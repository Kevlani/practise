import React, { useCallback, useEffect, useState } from 'react'
import List from './List';

function App() {
  const [number, setnumber] = useState(1);
  const [dark, setdark] = useState(false);


  const getItems = useCallback(() => {
    return [number, number + 1, number + 2]
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
    <h1>callback</h1>
    <div style ={theme}>
      <input
        type="number"
        value={number}
        onChange={e => setnumber(parseInt(e.target.value))}
      />
      <button onClick={() => setdark(prevdark => !prevdark)}>
        Toggle button
      </button>
      {/* <div style={theme}/> */}
        <List getItems={getItems}/>
        </div>
    </>
  )
}


export default App





