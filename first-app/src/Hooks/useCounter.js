import  { useState } from 'react';


const useCounter  = (valorInicial=1000 )=> {

    const [state, setState] = useState(valorInicial);

    const increment=(factor)=>{
        setState(state+ factor);
    }
    const decrement=(factor )=>{
        setState(state - factor);
    }
    const reset=()=>{
        setState(valorInicial);
    }
    

    return{
        state,
        increment,
        decrement,
        reset,
    };
}

export default useCounter ;