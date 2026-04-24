import React, { useReducer } from 'react'
import { reducer } from './Reducer'

const App = () => {
    let [state,dispatch]=useReducer(reducer,{count : 0})
  return (
    <div>
      <h1>App Component</h1>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type : 'increment'})}>increment</button>
      <button onClick={()=>dispatch({type : 'decrement'})}>decrement</button>
    </div>
  )
}

export default App
