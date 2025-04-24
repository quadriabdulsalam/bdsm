// import React from 'react'
// import Workitem from './workitem'

// const data =[
//     {
//         year: 2020,
//         title: 'Content Creator',
//         duration: '3 years',
//         details:
//         'orem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//     },
//     {
//         year: 2017,
//         title: 'Google',
//         duration: '2 years',
//         details:
//         'orem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//     },
//     {
//         year: 2015,
//         title: 'Amazon',
//         duration: '5 years',
//         details:
//         'orem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//     },
//     {
//         year: 2012,
//         title: 'Facebook',
//         duration: '3 years',
//         details:
//         'orem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//     },
// ]
// function Work() {
//     return (
//         <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
//             <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
//             {data.map((item, idx) => (
//                 <Workitem 
//                 key={idx}
//                  year={item.year}
//                   title={item.title}
//                    duration={item.duration}
//                     details={item.details}/>        
//             ))}
//         </div>
//     )
// }

// export default Work

import React from 'react';
import background from '../assets/done.PNG';
import loveth from '../assets/jessica.jpg';
import jesicca from '../assets/loveth.jpg';
// import debbie from  '../assets/debbie.png.jpg'
import debbie from '../assets/hdebbie.png';


export default function work() {
    return (
        <div className="pt-20">
           <h1 className='text-4xl font-bold text-center text-pink-400 pt-10'>Meeet Our Beloved Misstresses</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 sm:p-20 p-4 sm:pt-10">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={background}
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center "
                src={jesicca}
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={loveth}
                alt="gallery-photo"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={background}
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center "
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="gallery-photo"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center "
                src={loveth}
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={jesicca}
                alt="gallery-photo"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={debbie}
                alt="gallery-photo"
              />
            </div>
          </div>
        </div>
        </div>
      );
}

