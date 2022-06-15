import React from 'react'
import HijoComponente  from './HijoComponente'


export const PadreComponente = () => {

    const prueba1 = (argumento)=>{
        console.log(argumento)
    }
  return (
    <div>
        <HijoComponente
        nombre="Luis"
        handleClick = {(argumentoEjemplo)=>{prueba1 (argumentoEjemplo)}}
        />
    </div>
  )
}



