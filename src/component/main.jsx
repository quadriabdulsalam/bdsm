import React from 'react';
import background from '../assets/background.png';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin} from 'react-icons/fa';


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
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                <FaTwitter className='cursor-pointer text-white' size={20}/>
                <FaFacebookF className='cursor-pointer text-white' size={20}/>
                <FaInstagram className='cursor-pointer text-white' size={20}/>
                <FaLinkedin className='cursor-pointer text-white' size={20}/>
            </div>
            </div>
            
        </div>
        </div>

        
    )
}

export default Main


