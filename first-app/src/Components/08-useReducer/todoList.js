import React from 'react';
import TodoListItem from './todoListItem';

const TodoLsit = ({ toDos,handleDelete,handleToggle}) => {
    return ( 
        <>
          <ul className='list-group list-group-flush'>
                        {
                            toDos.map((todo, i) => (
                                //todo,index,handleDelete,handleToggle
                                <TodoListItem
                                key={todo.id}
                                todo={todo}
                                index={i}
                                handleDelete={handleDelete}
                                handleToggle={handleToggle}
                                />
                             
                            ))
                        }
                    </ul>
        </> 
        );
}

export default TodoLsit ;

