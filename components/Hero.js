import React from 'react'
import Typewriter from "typewriter-effect"
// import Button from './Button'
// import Button from '../components/Button'
function Hero() {
  return (
    <div className='bg-[url("/downloa.jpg")] h-screen bg-cover bg-center bg-fixed flex items-center'>
        <div className='container mx-auto px-4'>\
            <div className='max-w-[450px] text-white flex flex-col gap-[40px]'>
                <div >
                    <h1 className='text-[67px]' > sharjeel</h1>
                    <h4 className='text-[20px]'> 
                    <Typewriter
                    options={{
                        strings: [
                            "Pro player"
                        ],
                        changeDelay: 3,
                        changeDeleteSpeed: 2,
                        autoStart: true ,
                        loop: true,

                    }}
                    
                    /></h4>
                    <div className='bg-[#f8251e] h-[2px] w-[600px]' ></div>
                    <div className=' pt-10'>
                        <p >
                            in a professional context it often heppens that private clients a publication
                        order now
                          </p>
                          <button className=' bg-[#f8251e]  text-white py-2 px-4 rounded inline-block mt-10
        font-medium border border-[#f8251e] hover:bg-transparent hover:text-[#f8251e]
        transition duration-200 '> Learn more  </button>
                     </div>

                    
                </div>
            </div>

        </div>


      
    </div>
  )
}

export default Hero
