import React, { useState, useEffect, useRef } from 'react';

import '../02-useEffect/effects.css';
import MultipleCustomHook from '../03-ejemplos/MultipleCustomHooks';


 const EjemploRef =()=> {

    const [show, setshow] = useState(false);
    const inputRef = useRef();

    const handleClick=()=>{
        inputRef.current.select();
        }

    return (  
        <>
        <h1>EjemploRef</h1>
        <hr/>
        { show && <MultipleCustomHook/>}

        <button className='btn btn-primary mt-5'
        onClick={()=>{
            setshow(!show);
        }}
        >
                Show/Hide
        </button>
        </>
    );
}

export default EjemploRef;