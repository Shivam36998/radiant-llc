import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer'>
       <div>
         <h2>categories</h2>
         <p>Web-Builder</p>
         <p>Hosting</p>
         <p>Data Center</p>
         <p>Robotic-Automation</p>
       </div>
       <div>
         <h2>Contacts</h2>
         <p>contact</p>
         <p>Privacy policy</p>
         <p>Terms Of Service</p>
         <p>Category</p>
         <p>About</p>
       </div>
       <div className='country'>
        <p>united states</p> {" "} <FaAngleDown />
       </div>
    </div>
  )
}

export default Footer
