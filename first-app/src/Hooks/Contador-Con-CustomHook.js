import React from 'react';
import useCounter from './useCounter';


const ContadorCustomhook =()=>{

    const {state,increment,decrement,reset} = useCounter(1000);
 
    return (
        <>
        <h1>Contador con Customhook :{state} </h1>
        <hr/>
        <button  className="btn" onClick={ ()=>increment(2)}>+2</button >
        <button  className="btn" onClick={ ()=>reset(state)}>reset</button >
        <button  className="btn" onClick={() =>decrement(2)}>-2</button>
        </>
      );
    }

export default ContadorCustomhook;