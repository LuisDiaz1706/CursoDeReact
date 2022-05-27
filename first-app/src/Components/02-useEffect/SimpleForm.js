import React, { useEffect,useState } from 'react';

import './effects.css';
import Message from './Message';

const SimpleForm=()=> {

    const [formState, setformState] = useState({
        name:'',
        email:'',
    });

    const {name,email}= formState

    useEffect(() => {
      //  console.log('hola°!')
    }, []);

    useEffect(() => {
       // console.log('cambio')
    }, [formState]);

    useEffect(() => {
        // console.log('el email cambio')
    }, [email]);

    const hadleInputChange = ({target})=>{
            setformState({...formState,
                [target.name]:target.value
            });
    }

    return (  

        <>
        <h2>UseEffect</h2>
        <hr/>
        <div className='form-group'>
            <input
              type='text' name='name'  
                className='form-control'
                placeholder='Tu nombre'
                autoComplete='off'
                value={name}
                onChange={hadleInputChange}
                />
            
        </div>
        <div className='form-group'>
            <input
              type='email' name='email'  
                className='form-control'
                placeholder='email@gmail.com'
                autoComplete='off'
                value={email}
                onChange={hadleInputChange}
                />
            
        </div>
        {(name === 'Lorem') && <Message/>}
        </>
    );
}

export default SimpleForm;