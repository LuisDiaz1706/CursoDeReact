import React from 'react'
import { UserContext } from './UserContext'

const user = {
    id:1728,
    name:`Luis Diaz`,
    email:`Luisdiaz_1711@gmail.com`
    
}

export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{hola:'Mundo',user}}>
            {children}
    </UserContext.Provider>
  )
}
