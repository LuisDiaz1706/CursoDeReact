

import React from 'react' 
import  { createRoot } from 'react-dom/client'
//import PrimeraApp  from './PrimeraApp';
import './index.css'
import CounterApp from './CounterApp';

 
 
const divRoot = document.querySelector('#app')
const root = createRoot(divRoot);
 
 
root.render( <CounterApp value = {17} />) 
