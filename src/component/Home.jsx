import React from 'react'
import HeroImage from "../assets/heropng.png"
import { MdKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black'>
       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row'>
            <div className='flex flex-col h-full justify-center'>

            <h2 className='text-4xl sm:text-7xl font-bold text-white'> 
            Hi my name is atul
            </h2>
            <p className='text-gray-500  max-w-md py-4'>
                my insta id:bombayka_ladka
                my github id: darkman9012
                my origin place uttarpradesh 
                currently living in maharashtra
            </p>
                <button className='group text-white w-fit px-6 py-3 my-2 flex items-center from-cyan-500 to-blue-500 rounded-md bg-gradient-to-r
                cursor-pointer'>
                portfolio 
                <span className='group-hover:rotate-90 duration-300'>
                  <MdKeyboardArrowRight size={25} className='ml-1'/>
                </span>
                </button>

           
            </div>
        <div>
            <img src={HeroImage} alt=" my profile" className='rounded-2xl mx-auto bg-right md:w-full' />
        </div>
        </div>
    </div>
  )
}

export default Home