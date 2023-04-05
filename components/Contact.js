import React from 'react'
import Hea from '../components/Hea'
const Contact = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
    <Hea title="Contact us" />
    <form className='flex flex-col gap-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

            
            <input type="text" placeholder='name  ' className='outline-black border-gray-400 rounded-[5px] px-4 py-2 w-[100%]' required/>
            <input type="email" placeholder='email ' className='outline-black border-gray-400 rounded-[5px] px-4 py-2 w-[100%]' required/>
            </div>
            <input type="text" placeholder='subject  ' className='outline-black border-gray-400 rounded-[5px] px-4 py-2 w-[100%]' required/>
            <textarea rows='6' placeholder='message' className='outline-black border-gray-400 rounded-[5px] px-4 py-2 w-[100%]' required/>
            <div>
            <button type='submit' className='bg-[#f8251e]  text-white py-2 px-4 rounded inline-block mt-10
        font-medium border border-[#f8251e] hover:bg-transparent hover:text-[#f8251e]
        transition duration-200'>send Me</button>
            </div>
        

    </form>
    
    
    </section>
  )
}

export default Contact
