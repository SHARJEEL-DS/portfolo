import React from 'react'
import Hea from '../components/Hea'
const work = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
    <Hea title="Creative Work" />
    <div className=' grid grid-cols-3 gap-4'>

        <div className='row-span-2 relative group'>
            <img src='/a.jpg' alt=''/>
            <div className='bg-white absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100
             grid place-items-center text-black'>project</div>

        </div>
        <div className='relative group'>
            <img src='/b.jpg' alt=''/>
            <div className='bg-white absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 
            grid place-items-center text-white'>project</div>

        </div>
        <div className='relative group'>
            <img src='/c.jpg' alt=''/>
            <div className='bg-white absolute w-[100%]  h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid
            place-items-center text-white'>project</div>

        </div>
        <div className=' relative group'>
            <img src='/d.jpg' alt=''/>
            <div className='bg-white absolute w-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid
            place-items-center text-white'>project</div>

        </div>
        
    </div>
    </section>
  )
}

export default work
