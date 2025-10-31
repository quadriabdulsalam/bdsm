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

// import React from 'react';
// import background from '../assets/done.PNG';
// import loveth from '../assets/jessica.jpg';
// import jesicca from '../assets/loveth.jpg';
// // import debbie from  '../assets/debbie.png.jpg'
// import debbie from '../assets/hdebbie.png';


// export default function work() {
//     return (
//         <div className="pt-20">
//            <h1 className='text-4xl font-bold text-center text-pink-400 pt-10'>Meeet Our Beloved Misstresses</h1>
//         <div className="grid grid-cols-2 gap-4 md:grid-cols-4 sm:p-20 p-4 sm:pt-10">
//           <div className="grid gap-4">
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg object-cover object-center"
//                 src={background}
//                 alt="gallery-photo"
//               />
//             </div>
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg object-cover object-center "
//                 src={jesicca}
//                 alt="gallery-photo"
//               />
//             </div>
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg object-cover object-center"
//                 src={loveth}
//                 alt="gallery-photo"
//               />
//             </div>
//           </div>
//           <div className="grid gap-4">
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg object-cover object-center"
//                 src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
//                 alt="gallery-photo"
//               />
//             </div>
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg object-cover object-center"
//                 src={background}
//                 alt="gallery-photo"
//               />
//             </div>
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg object-cover object-center "
//                 src="https://docs.material-tailwind.com/img/team-3.jpg"
//                 alt="gallery-photo"
//               />
//             </div>
//           </div>
//           <div className="grid gap-4">
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg object-cover object-center"
//                 src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
//                 alt="gallery-photo"
//               />
//             </div>
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg object-cover object-center "
//                 src={loveth}
//                 alt="gallery-photo"
//               />
//             </div>
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg object-cover object-center"
//                 src={jesicca}
//                 alt="gallery-photo"
//               />
//             </div>
//           </div>
//           <div className="grid gap-4">
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg object-cover object-center"
//                 src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
//                 alt="gallery-photo"
//               />
//             </div>
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg object-cover object-center"
//                 src={debbie}
//                 alt="gallery-photo"
//               />
//             </div>
//           </div>
//         </div>
//         </div>
//       );
// }





import React, { useState } from 'react';
import jessica from '../assets/jessica.jpg';
import loveth from '../assets/loveth.jpg';
import debbie from '../assets/hdebbie.png';
import background from '../assets/done.PNG';

export default function Work() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: background, alt: 'Mistress Banner' },
    { src: jessica, alt: 'Mistress Jessica' },
    { src: loveth, alt: 'Mistress Loveth' },
    { src: debbie, alt: 'Mistress Debbie' },
    {
      src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=2940&q=80',
      alt: 'Outdoor portrait',
    },
    {
      src: 'https://docs.material-tailwind.com/img/team-3.jpg',
      alt: 'Studio photo',
    },
    {
      src: 'https://images.unsplash.com/photo-1552960562-daf630e9278b?auto=format&fit=crop&w=687&q=80',
      alt: 'Fashion pose',
    },
  ];

  return (
    <div id='work' className="pt-20">
      <h1 className="text-4xl font-bold text-center text-pink-400 pt-10">
        Meet Our Beloved Mistresses
      </h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-6 sm:p-12">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-64 w-full object-cover transform transition duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition">
              View
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full px-3 py-1 font-bold shadow-lg hover:bg-gray-200 transition"
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
            <p className="text-center text-white mt-3">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
