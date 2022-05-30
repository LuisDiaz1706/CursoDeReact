import React from 'react';
import { useForm } from '../../Hooks/useForm';


function ToDoAdd({handleAddTodo}) 

{
    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (description.trim().length < 1) {
            return;
        }
        const newtoDo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };
        handleAddTodo(newtoDo);
        reset();
    }
    return ( 
        <>
           <h4>Agregar ToDo</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name='description'
                            className='form-control'
                            placeholder='Aprender'
                            value={description}
                            autoComplete='off'
                            onChange={handleInputChange}
                        />
                        <button
                            type='submit'
                            className='btn btn-outline-primary mt-1 btn-block'
                        >
                            Agregar
                        </button>
                    </form>
        </>
     );
}

export default ToDoAdd;