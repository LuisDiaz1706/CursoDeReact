import React, { useState, useEffect, memo } from 'react';


const ShowIncrement = memo(({increment}) =>{
    console.log('Me volvi a llamar :(')
    return ( 
        <button className=' btn btn-primary'
    onClick={()=>{
        increment(5);
    }}>
            incrementar 
        </button>
     );
})

export default ShowIncrement ;