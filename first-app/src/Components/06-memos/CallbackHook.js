import React,{useCallback, useState} from  'react';


import '../05-useLayoutEfct/layout.css';
import ShowIncrement from './Showincrement';

function CallBackHook () {
    
    const [counter, setCounter] = useState(30);


    // const increment = () =>{
    //     setCounter(counter +1);
    // }

    const increment = useCallback((num)=>{
        setCounter(c => c + num );
    },[setCounter])

    return (  
        <>

        <h1>useCallBack Hook {counter}</h1>
        <hr/>

        <ShowIncrement increment = {increment}/>
        </>
    );
}

export default CallBackHook ;