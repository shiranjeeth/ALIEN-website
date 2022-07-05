import React from 'react'
import {
 
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaInstagram,
} from 'react-icons/fa'

const Footer = () => {
  return (
<div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
 <h1 className='w-full text-3xl font-bold text-red-500 uppercase md:ml-40'>developed by shiranjeeth</h1>
<p className='py-4 text-2xl md:ml-40'>Hey! i can  create u cool websites and im available in all social media platforms so that 
  u can contact me easily
</p>
  </div>
      <div className='md:font-bold md:text-4xl md:ml-80 '>
        <h1>Contact</h1>
        <ul className='md:font-medium md:text-2xl'>
  <li className='py-3 '><FaFacebookSquare size={30}/>Shiranjeeth@facebook.com</li>
 <li className='py-3 '><FaTwitterSquare size={30}/>Shiranjeeth@twitter.com</li>
 <li className='py-3 '><FaInstagram size={30}/>Shiranjeeth@instagram.com</li>
 <li className='py-3 '><FaGithubSquare size={30}/>Shiranjeeth</li>
        </ul>
      
      </div>
    </div> 
 
  )
}

export default Footer
