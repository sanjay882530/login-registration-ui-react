import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import "./RegistrationForm.css";
import { IoMail } from "react-icons/io5";
import { CgOrganisation } from "react-icons/cg";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";
function onChange(value) {
  console.log("Captcha value:", value);
}
function RegistrationForm() {
  return (
      <div className='wrapperFormReg'>  
     <form action=''>
        <h1>Register to welcome application</h1>

        <div className='input-form'><CgOrganisation className='icon' /><input  type='text' placeholder='organazation name'></input></div>
        <div className='fname'><MdDriveFileRenameOutline className='icon' /><input  type='text' placeholder='first name'></input>
        <MdDriveFileRenameOutline className='icon' /><input  type='text' placeholder='last name'></input></div>
        <div className='input-form'> <IoMail className='icon' /><input  type='text' placeholder='emailId'></input> </div>
        <div className='input-form'> <MdOutlinePhoneIphone className='icon'/><input  type='text' placeholder='contactNo'></input> </div>
        <div className='input-form'> <VscOrganization className='icon'/><input  type='text' placeholder='designation'></input> </div>
        <div className='check-form'><label><input  type='checkbox'></input> I read and agree to the Terms of use & Privacy policy.?</label></div>
        <div className='recapcha-key'><ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
         /></div>
        <div className='input-form'> <button  type='submit' >Register</button> </div>
       </form>
    </div>
  )
}

export default RegistrationForm
