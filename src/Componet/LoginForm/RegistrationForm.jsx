import React from 'react'

function RegistrationForm() {
  return (
      <div className='wrapperForm'>  
     <form action=''>
        <h1>Register to welcome application</h1>
        <div className='input-form'><input  type='text' placeholder='first name'></input></div>
        <div className='input-form'><input  type='text' placeholder='last name'></input></div>
        <div className='input-form'> <input  type='text' placeholder='emailId'></input> </div>
        <div className='input-form'> <input  type='text' placeholder='mobileNo'></input> </div>
        <div className='input-form'> <input  type='text' placeholder='designation'></input> </div>
        <div className='input-form'><label><input  type='checkbox' placeholder='designation'></input> all are correct?</label></div>
        <div className='input-form'> <button  type='submit' >Register</button> </div>
       </form>
    </div>
  )
}

export default RegistrationForm
