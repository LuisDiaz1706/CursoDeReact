import React, {useState} from "react"
import PropTypes from "prop-types"



const Contador = () => {
   const [state, setContador] = useState({
    contador1:10,
    contador2:30
    });
       
    const {contador1,contador2} = state

    // const handleAdd=()=>{
    //         //    Setcounter(counter + 1)
    //         setContador(... state, contador1 : contador1 + 1})

    // const handleRemove=()=>{
    //     setContador((r)=>r-1)
    // }

    // const handleReset=()=>{
    //     setContador()
    // }

    return (
        <>
            <h2>Contador 1: {contador1}</h2>  
            <h2>Contador 2: {contador2}</h2>
          
            <button onClick={()=>{
                setContador({
                    ...state, contador1:contador1 + 1
                });
            }}>
                +1
                </button>
            {/* <button onClick={handleReset}>Reset</button>
            <button onClick={handleRemove}>-1</button>  */}
        </>

    )
}

Contador.prototype = {
    saludo: PropTypes.string.isRequired,
    other: PropTypes.number
}


export default Contador;

