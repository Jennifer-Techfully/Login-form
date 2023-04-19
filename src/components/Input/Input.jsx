import React from 'react'
import './Input.css'
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";

const Input = () => {
  return (
    <div className='input'>
     <h2>Login</h2> 
      <form className='form'> 
      <input type='username' placeholder='User name'/>
      <input type='password' placeholder='Passsword'/>
      <button className='button'>Continue</button>
      </form>
      <h6>or connect with social media</h6>
      
      <div className='signin'>
        <div className='twitter'>
        <Twitter/>
        <span>Signin with Twitter</span>
        </div>
        <div className='facebook'>
        <Facebook/>
        <span>Signin with Facebook</span> 
       </div>
    </div>
  </div>
  )
}
export default Input