import React from 'react'

const Cards = () => {
  return (
    <div className='w-full py-[8rem] px-4 bg-white'>
<div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

<div className='w-full  shadow-2xl flex flex-col py-4  rounded-lg hover:scale-105 duration-500 bg-gray-100'>
<h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
<p className='text-center text-4xl font-bold'>50,000Rs</p>
<div className='text-center p-3  font-medium'>
<p className='py-2 border-b mx-8'>Solo trip</p>
<p className='py-2 border-b mx-8'>2days</p>
<p className='py-2 border-b mx-8'>Only one planet is visited</p>
<button className=' bg-gradient-to-b from-blue-300 to-teal-500 text-black py-4 px-4 rounded-md my-3'>Start Trail</button>
</div>
</div>

<div className='w-full  shadow-2xl flex flex-col py-4  rounded-lg hover:scale-105 duration-500 bg-gray-100'>
<h2 className='text-2xl font-bold text-center py-8'>Multiple User</h2>
<p className='text-center text-4xl font-bold'>90,000Rs</p>
<div className='text-center p-3  font-medium'>
<p className='py-2 border-b mx-8'>Two people</p>
<p className='py-2 border-b mx-8'>3days</p>
<p className='py-2 border-b mx-8'>Two planet is visited</p>
<button className=' bg-gradient-to-b from-blue-300 to-teal-500 text-black py-4 px-4 rounded-md my-3'>Start Trail</button>
</div>
</div>

<div className='w-full  shadow-2xl flex flex-col py-4  rounded-lg hover:scale-105 duration-500 bg-gray-100'>
<h2 className='text-2xl font-bold text-center py-8'>Group User</h2>
<p className='text-center text-4xl font-bold'>1.35lakh Rs</p>
<div className='text-center p-3  font-medium'>
<p className='py-2 border-b mx-8'>4 people</p>
<p className='py-2 border-b mx-8'>3days</p>
<p className='py-2 border-b mx-8'>Two planet is visited</p>
<button className=' bg-gradient-to-b from-blue-300 to-teal-500 text-black py-4 px-4 rounded-md my-3'>Start Trail</button>
</div>
</div>

</div>
    </div>
  )
}

export default Cards
