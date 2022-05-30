import React from 'react';


function TodoListItem ({todo,index,handleDelete,handleToggle}) {
    return ( 
       <li
         key={todo.id}
         className='list-group-item'
        >
          <p className={`${todo.id && 'complete'}`}
           onClick={() => handleToggle(todo.id)}>
                {index + 1}.{todo.desc} 
                </p>
         <button className='btn btn-danger'
          onClick={() => handleDelete(todo.id)}>
               Borrar 
               </button>
          </li>
    );
}

export default TodoListItem ;