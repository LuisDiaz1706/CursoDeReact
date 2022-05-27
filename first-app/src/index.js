

import React from 'react' 
import  { createRoot } from 'react-dom/client'
import Contador from '../src/Components/01-useState/01-useState'
import SimpleForm from './Components/02-useEffect/SimpleForm'
import ContadorCustomhook from './Hooks/Contador-Con-CustomHook'
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
    <SimpleForm/>

)
 