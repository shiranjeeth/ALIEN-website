import React from 'react'
import Ufo from '../assests/UFO.jpg'

const Analytics = () => {
  return (
    <div className=' w-full bg-gradient-to-b from-pink-400 to-purple-700 py-16 px-4 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 ' >

        <img  className='w-[500px] mx-auto my-4'src={Ufo} alt='/'/>

        <div className='flex flex-col justify-center'>

        <p className='uppercase font-bold text-blue-300' >hire an ufo</p>

        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white'>
            Run Around Galaxy
        </h1>

        <p>
           Dear Coustomer you can take a a UFO and revolve around universe
           and meet some of the Aliens in mars and in other planets
           So what are you waiting for Hurry up! for this adventure
        </p>

<button className='w-[200px] mx-auto rounded-md font-medium my-6 py-3 md:mx-0 bg-gradient-to-b from-blue-300 to-teal-500'>
  Get Started</button>
  
        </div>
        </div>
       
    </div>
  )
}

export default Analytics
