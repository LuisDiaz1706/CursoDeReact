

const initialState= [{
    id:1,
    toDo:'Comprar Leche',
    done:false
}]; 

const todoreducer = (state = initialState,action)=>{
        if(action?.type === 'agregar'){
            return [...state,action.newtoDo];
        }

    return state;
}

let toDos = todoreducer(); 



const newtoDo = {
    id:2,
    toDo:'Comprar Pan',
    done:false
}

const agregarTodosAction ={
    type:'agregar',
    newtoDo
}


toDos = todoreducer(toDos,agregarTodosAction);






console.log(toDos)

