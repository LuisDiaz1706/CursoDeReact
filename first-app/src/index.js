

import React from 'react' 
import  { createRoot } from 'react-dom/client'
import { Padre } from './Components/07-tar/Padre'
import ToDoApp from './Components/08-useReducer/ToDoApp'
//import CallBackHook from './Components/06-memos/CallbackHook'
// import MemoHook from './Components/06-memos/MemoHook'
// import Momorize from './Components/06-memos/Memorize'
//import LayOut from './Components/05-useLayoutEfct/LayOut'
//import EjemploRef from './Components/04-useRef/ejemplo-real-useRef'
//import FocusScreen from './Components/04-useRef/useRef'
//import MultipleCustomHook from './Components/03-ejemplos/MultipleCustomHooks'
// import Contador from '../src/Components/01-useState/01-useState'
// import SimpleForm from './Components/02-useEffect/SimpleForm'
// import ContadorCustomhook from './Hooks/Contador-Con-CustomHook'
//import HookApp from './HookApp'



//import PrimeraApp  from './PrimeraApp';
//import './index.css'
//import CounterApp from './CounterApp';

 
 
// const divRoot = document.querySelector('#app')
// const root = createRoot(divRoot);
 
 
// root.render( <CounterApp value = {17} />) 


const divRoot = document.querySelector('#app')
const root = createRoot(divRoot)

root.render(
    <ToDoApp/>

)
 
// import './Components/08-useReducer/intro-reducer';