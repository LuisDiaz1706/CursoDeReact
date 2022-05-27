import React, { useEffect, useLayoutEffect } from 'react';
import useCounter from '../../Hooks/useCounter';
import useFetch from '../../Hooks/useFetch';



import './layout.css';

const LayOut =()=> {
    
const {counter,increment } = useCounter(1);

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
 
    const {quote} = !!data && data[0]

    const pTag = useEffect();
    
    useLayoutEffect(() => {
    console.log(pTag.current.getBoundingClientReact())        
    },[quote])
    //console.log(author,quote);
    return(

        <>
        <h2> LayOutEffect</h2>
        <hr/>

        <blockquote>
                            <p className='mb-0'
                            ref={pTag}> {quote}
                            </p>
        
                        </blockquote>

                <button className='btn btn-primary'
                onClick={increment}
                >
                    Siguente quote
                </button>


        </>
    )
}

export default LayOut ;