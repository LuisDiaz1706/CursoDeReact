import React, { Fragment, useReducer, useEffect } from 'react';
import { useForm } from '../../Hooks/useForm';
import todoReducer from './todoReducer';
import TodoLsit from './todoList';
import ToDoAdd from './toDoAdd';

import './styles.css'



const init = () => {
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done:false,

    // }]; 

    return JSON.parse(localStorage.getItem('toDos')) || [];

}

const ToDoApp = () => {

    const [toDos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify(toDos));

    }, [toDos]);

    const handleDelete = (todoId) => {
        // console.log(todoId);
        const action = {
            type: 'delete',
            todoId
        }
        dispatch(action);
    }
    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            todoId
        });
    }

    const handleAddTodo =( newtoDo) =>{
        dispatch({
            type: 'add',
            newtoDo
        });
    }


    return (
        <Fragment>
            <h2> ToDoApp ({toDos.length}) </h2>
            <hr />

            <div className='row'>
                <div className='col-7'>
               <TodoLsit
                toDos={toDos}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
               />
                </div>
                <div className='col-5'>
                 <ToDoAdd
                 handleAddTodo={handleAddTodo}
                 />
                </div>
            </div>
        </Fragment>
    );
}

export default ToDoApp;