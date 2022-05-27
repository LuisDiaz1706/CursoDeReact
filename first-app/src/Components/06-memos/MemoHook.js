import React, { useState,useMemo}from 'react';
import procesoPesado from '../../healpers/procesoPesado';
import useCounter from '../../Hooks/useCounter';





import '../05-useLayoutEfct/layout.css';

const  MemoHook = () => {
    const {counter,increment } = useCounter(2000);
    const [show, setShow] = useState(true);
    
   const memoprocesopesado = useMemo(()=>procesoPesado(counter),[counter])
    return (
<>

<h1> 
    MomoHook
</h1>
<h1>Counter:  <small>{counter}</small> </h1>
<hr/>
<p>{memoprocesopesado}</p>
<button className='btn btn-primary'
                onClick={increment}
                >
                  +1
                </button>
                <button className='btn btn-outline-primary ml-3'
                onClick={()=>{
                    setShow (!show);
                }}
                >
                  show/hide {JSON.stringify(show)}
                </button>

</>

      );
}

export default MemoHook ; 