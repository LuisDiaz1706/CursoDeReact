import React, { useState}from 'react';
import useCounter from '../../Hooks/useCounter';
import Small from './small';


import '../05-useLayoutEfct/layout.css';

const  Momorize = () => {
    const {counter,increment } = useCounter(1);
    const [show, setShow] = useState(true);
    return (
<>

{/* <h1> 
    Momorize
</h1> */}
<h1>Counter: <Small value={counter} /> </h1>
<hr/>
<button className='btn btn-primary'
                onClick={increment}
                >
                  +1
                </button>
                <button className='btn btn-outline-primary ml-3'
                onClick={()=>{
                    setShow (!show);
                }}
                >
                  show/hide {JSON.stringify(show)}
                </button>

</>

      );
}

export default Momorize ; 