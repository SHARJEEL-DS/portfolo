import React from 'react'
import Hea from '../components/Hea'

const Skill = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
    <Hea title="Skills" />
    <p className=' text-gray-600 -mt-10 mb-10' > in a professional context it often heppens that private clients a publication
                        order now</p>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
     <div>
      <p>React.js</p>
      <div className='relative bg-gray-400 h-[4px] mt-2'>
        <div className='bg-[#f8251e] absolute h-[4px] w-[90%]'></div>

      </div>
      </div> 
      <div>
      <p>next.js</p>
      <div className='relative bg-gray-400 h-[4px] mt-2'>
        <div className='bg-[#f8251e] absolute h-[4px] w-[100%]'></div>

      </div>
      </div>
      <div>
      <p>next.js</p>
      <div className='relative bg-gray-400 h-[4px] mt-2'>
        <div className='bg-[#f8251e] absolute h-[4px] w-[100%]'></div>

      </div>
      </div><div>
      <p>next.js</p>
      <div className='relative bg-gray-400 h-[4px] mt-2'>
        <div className='bg-[#f8251e] absolute h-[4px] w-[100%]'></div>

      </div>
      </div>         
      </div>          
    </section>
  )
}

export default Skill
