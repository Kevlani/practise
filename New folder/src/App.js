import React from 'react'
import Callback from './callback/Callback'
// import Memo from './Memo'
import Reducer from './Reducer'
import UseMemoHookExample from './callback/ComponentUsingMemo'

function App() {
  return (
    <div>
      <p>Using the callback example</p>
      <Callback/>
      {/* <Memo/> */}
      <p>Using the memo hook example</p>
      <UseMemoHookExample/>
      <p>See the console for the output </p>
      <Reducer/>
    </div>
  )
}

export default App
