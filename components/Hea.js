import React from 'react'

const Hea = ({title}) => {
  return (
    <div className='text-[#141414] text-[32px] font-medium flex items-center
    gap-4 py-16 '>
        {title}
        <div className='bg-[#242222] h-[2px] w-[40px] translate-y-1'></div>
    </div>
    
  )
}
 
export default Hea
