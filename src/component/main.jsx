// import React from 'react';
// import background from '../assets/done.PNG';
// import { TypeAnimation } from 'react-type-animation';
// import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin} from 'react-icons/fa';
// import {AiOutlineMail} from 'react-icons/ai'


// function Main() {
//     return (
//         <div id='main'>
//                 <img className='w-full h-screen object-cover object-left scale-x-[1]' src={background} alt='jjj'></img>

//         <div className='w-full h-screen absolute top-0 left-0 bg-black/50' >

//             <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center pb-10' > 
//                 <h2 className='flex sm:text-20xl text-4xl font-bold text-white sm:pl-0 sm:pr-0 pl-7 pr-5 tracking-widest '>The HOUSE OF SATISFACTION BDSM COMMUNITY <br></br>Chronicles</h2>
//                 <h2 className='flex sm:text-2xl text-1xl pt-4 text-white'>Follow my journey
//                 <TypeAnimation
//       sequence={[
//         'through the highs and lows of life.', // Types 'One'
//         3000, // Waits 1s
//         'through my community', // Deletes 'One' and types 'Two'
//         3000, // Waits 2s
//         'and shop with me', // Types 'Three' without deleting 'Two'
//         2000
//       ]}
//       wrapper="div"
//       cursor={true}
//       repeat={Infinity}
//       style={{ fontSize: '1em', paddingLeft: '5px' }}
//     />
//                 </h2>
               
//                 <div className='flex justify-between pt-6 max-w-[200px] w-full pb-20'>
//                 <FaTwitter className='cursor-pointer text-white' size={20}/>
//                 <FaFacebookF className='cursor-pointer text-white' size={20}/>
//                 <FaInstagram className='cursor-pointer text-white' size={20}/>
//                 <FaLinkedin className='cursor-pointer text-white' size={20}/>
//             </div>
//             <div>
//         <a href='#contact' className='md:w-[150] lg:w-[180%] flex flex justify-center items-center rounded-3xl shadow-lg bg-gray-100 shadow-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
//                     <h1 className='flex sm:text-2xl font-extrabold text-2xl p-4 text-pink-400' >REGISTER NOW</h1><AiOutlineMail size={40} className='text-pink-400' />
//                 </a>
//                 </div>
//             </div>
            
//         </div>
       
//         </div>

        
//     )
// }

// export default Main





import React from 'react';
import background from '../assets/done.PNG';
import { TypeAnimation } from 'react-type-animation';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Main = () => {
  return (
    <section id="main" className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={background}
        alt="Community banner"
        className="absolute inset-0 w-full h-full object-cover object-left"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="max-w-3xl w-full px-6 text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Headline */}
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold leading-tight tracking-wider">
            Welcome to the House of Satisfaction
          </h1>
          <p className="text-pink-400 text-lg sm:text-xl font-medium mt-2">
            A BDSM community like no other.
          </p>

          {/* Animated Subtext */}
          <div className="mt-6 text-white text-lg sm:text-xl flex items-center">
            <span>Discover our story</span>
            <TypeAnimation
              sequence={[
                ' — through life’s highs and lows.',
                3000,
                ' — through connection and community.',
                3000,
                ' — and explore our exclusive shop.',
                3000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="ml-2 text-pink-300"
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-8">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-white hover:text-blue-400 transition"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-blue-600 transition"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-pink-500 transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-blue-500 transition"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Register Button */}
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-semibold text-lg shadow-md transition-transform transform hover:scale-105"
            >
              <AiOutlineMail size={28} />
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
