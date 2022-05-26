import React, {useState} from "react"
import PropTypes from "prop-types"



const CounterApp = ({ value = 17}) => {
    const [counter,SetCounter] = useState(value); /// retorna un arreglo 


    const handleAdd=()=>{
            //    Setcounter(counter + 1)
            SetCounter((c)=>c+1)
    }

    const handleRemove=()=>{
        SetCounter((r)=>r-1)
    }

    const handleReset=()=>{
        SetCounter(value)
    }

    return (
        <>
            <h2>CounterApp</h2>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleRemove}>-1</button> 
        </>

    )
}

CounterApp.prototype = {
    saludo: PropTypes.string.isRequired,
    other: PropTypes.number
}


export default CounterApp;

