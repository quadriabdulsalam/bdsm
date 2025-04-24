import React from 'react';
import background from '../assets/done.PNG';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai'


function Main() {
    return (
        <div id='main'>
                <img className='w-full h-screen object-cover object-left scale-x-[1]' src={background} alt='jjj'></img>

        <div className='w-full h-screen absolute top-0 left-0 bg-black/50' >

            <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center pb-10' > 
                <h2 className='flex sm:text-20xl text-4xl font-bold text-white sm:pl-0 sm:pr-0 pl-7 pr-5 tracking-widest '>The HOUSE OF SATISFACTION BDSM COMMUNITY <br></br>Chronicles</h2>
                <h2 className='flex sm:text-2xl text-1xl pt-4 text-white'>Follow my journey
                <TypeAnimation
      sequence={[
        'through the highs and lows of life.', // Types 'One'
        3000, // Waits 1s
        'through my community', // Deletes 'One' and types 'Two'
        3000, // Waits 2s
        'and shop with me', // Types 'Three' without deleting 'Two'
        2000
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
    />
                </h2>
               
                <div className='flex justify-between pt-6 max-w-[200px] w-full pb-20'>
                <FaTwitter className='cursor-pointer text-white' size={20}/>
                <FaFacebookF className='cursor-pointer text-white' size={20}/>
                <FaInstagram className='cursor-pointer text-white' size={20}/>
                <FaLinkedin className='cursor-pointer text-white' size={20}/>
            </div>
            <div>
        <a href='#contact' className='md:w-[150] lg:w-[180%] flex flex justify-center items-center rounded-3xl shadow-lg bg-gray-100 shadow-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <h1 className='flex sm:text-2xl font-extrabold text-2xl p-4 text-pink-400' >REGISTER NOW</h1><AiOutlineMail size={40} className='text-pink-400' />
                </a>
                </div>
            </div>
            
        </div>
       
        </div>

        
    )
}

export default Main


