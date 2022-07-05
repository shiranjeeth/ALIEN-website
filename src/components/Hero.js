import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
 <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center align-middle'>
<p className='text-red-600 uppercase font-bold p-2'> Worlds first ufo hiring platform</p>
<h1 className='font-bold md:py-6 md:text-7xl sm:text-6xl  '>grow with Aliens</h1>

<div className='flex justify-center items-center'> 

    <p className='md:text-5xl sm:text-4xl text-xl font-bold mt-3' >Make your Vaccation Adventure by</p>

    <Typed 
    className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 uppercase mt-3 md:pl-4'
    strings={["hiring Ufo",'travel along universe','meet aliens']}
    typeSpeed={120}
    backSpeed={140}
    loop
    />

</div>

<p className='md:text-2xl text-xl font-bold mt-3 text-gray-500'>Revolve around universe</p>
<button className='bg-red-600 w-[150px] rounded-md text-black mx-auto mt-3 py-3 font-medium my-6'>Get Started</button>
        </div>
      
    </div>
  )
}

export default Hero
