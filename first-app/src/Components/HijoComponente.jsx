import React from 'react';


function Ejemplo ({nombre,handleClick}) {

    const  boton2 =(e,nombre2="Pepe")=>{
         let obj = {
             id:1,
             nombre: nombre2
         } 
         console.log(e);
         handleClick(obj)  
    }

    const ciclos=()=>{
        for(let i=0; i<100; i+=2){
            console.log(i);
        }
    }

    return (  
        <>
        <h1>Pase de parametros padre-hijo Hijo-padre</h1>
        <h3>Mi nombre es {nombre}</h3>
        <button onClick={()=>{handleClick(`Soy ${nombre}`)}}>Botton</button>
        <button onClick={boton2}>Botton2</button>
        {/* No se pasa los argumentos */}
        <button onClick={handleClick}>Botton3</button>       
        {/* se manda a llamar objeto del boton  */}
        <button onClick={()=>{boton2("hola")}} > Botton4</button>
        <button onClick={()=>{boton2()}} > Botton5</button>
        {/* Se pase con funcion de flecha */}
        <button onClick={()=>{ciclos()}}> Botton6</button>
        </>
           );
}

export default Ejemplo;
