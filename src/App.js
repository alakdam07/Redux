import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './App.css';
import {increment, decrement} from './action/action'
function App() {
  const counter =useSelector(state=> state.counter);
  const loggin =useSelector(state=>state.loggin);

  const dispatch= useDispatch()
  return (
    <div className="App">
      <h1>Redux</h1>
      <h1>{counter}</h1>
      <button onClick={()=> dispatch(increment())} >+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
     <h1>Login</h1>
      {loggin ? ' ': <h3>I am logged in</h3> }
    </div>
  );
}

export default App;
