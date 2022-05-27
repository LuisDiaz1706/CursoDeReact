import React from 'react';
import useCounter from '../../Hooks/useCounter';
import useFetch from '../../Hooks/useFetch';





const MultipleCustomHook =()=> {
    
const {counter,increment } = useCounter(1);

    const {loading,data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
 
    const {author,quote} = !!data && data[0]
    //console.log(author,quote);
    return(

        <>
        <h2> breakingbad</h2>
        <hr/>

                {
                    loading 
                    ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                    :
                    (
                        <blockquote>
                            <p className='mb-0'> {quote}</p>
                            <footer className='blockquote-footer'> {author}</footer>
                        </blockquote>
                    )
                }

                <button className='btn btn-primary'
                onClick={increment}
                >
                    Siguente quote
                </button>


        </>
    )
}

export default MultipleCustomHook ;