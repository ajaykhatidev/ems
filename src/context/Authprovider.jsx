import React, { createContext, useEffect, useState } from 'react'
import { getLocalstorage, setLocalstorage ,adminseLocalstorage } from '../utils/Localstorage';



export const Authcontext = createContext();
const Authprovider = ({ children }) => {
  const [user,setuser] = useState(null);

 useEffect(() => {
   setLocalstorage()
   adminseLocalstorage()
   const {employeesdata,admindata} = getLocalstorage()
   setuser([employeesdata,admindata])
   
 },[])
  

  return (
    <div>
      <Authcontext.Provider value={user}>
        {children}
      </Authcontext.Provider>

    </div>
  )
}

export default Authprovider
