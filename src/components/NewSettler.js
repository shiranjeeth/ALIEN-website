import React from 'react'

const NewSettler = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px]  mx-auto grid lg:grid-cols-3'>

            <div className='lg:col-span-2 my-4 '> 

            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                Wanna spin around the world ? 
            </h1>
            <p className='mt-3'> Sign up and stay updated</p>
            
            </div>

            <div className='my-4'>
                <div>
           <input className='w-full rounded-md text-black p-3 flex'
              type='email'
          placeholder='Enter ur Name'/>
 <button className='mx-auto  text-black rounded-md py-3 my-6 w-[150px] bg-green-500 '>Notify me</button>
                </div>

                <p>
  We give u safe journey . Read our <span className='text-green-500'>Privacy Policy</span>
                </p>
            </div>
        </div>
    </div>
  )
}
export default NewSettler
