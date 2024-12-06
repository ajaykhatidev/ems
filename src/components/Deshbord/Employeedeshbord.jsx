import React from 'react'
import Header from '../../others/Header'
import Tasklistnumber from '../../others/Tasklistnumber'
import Tasklist from '../../Tasklist/Tasklist'


const Employeedeshbord = () => {
  return (
    <div>
     <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header/>
        <Tasklistnumber/>
        <Tasklist/>
      

     </div>
      
    </div>
  )
}

export default Employeedeshbord
