const todoReducer = (state = [], action) =>{

    switch ( action.type) {
         case 'add':

            return [...state,action.newtoDo];

            case 'delete':
                return state.filter(toDos=> toDos.id !== action.newtoDo); 

            case 'toggle':
                return state.map( todo => 
                    (todo.id === action.newtoDo)? {
                        ...todo,done: !todo.done}
                        :
                        todo
                    );

            case 'toggle-old':
                return state.map( toDo => {
                    if(toDo.id  === action.newtoDo ){
                    return{
                        ... toDo,
                    done:!toDo.done,
                    }
                }else{
                    return toDo;

                }
                });
         
        default:
            return state;
    }

}

export default todoReducer;