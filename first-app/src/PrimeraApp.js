///SFC
/// FC
import React from "react";
import  PropTypes  from "prop-types";


const PrimeraApp = ({saludo,  subTitulo })=>{
       


    return (
    <>

    <h1>{saludo}</h1>
    {/* <h1> {JSON.stringify(saludo,null,3)}</h1> */}
    <p>{subTitulo}</p>
    </>
    );
}
    PrimeraApp.prototype = {
        saludo: PropTypes.string.isRequired,
        other: PropTypes.number
    }

    PrimeraApp.defaultProps={
        subTitulo:'Soy un subtitulo'
    }


export default PrimeraApp;
