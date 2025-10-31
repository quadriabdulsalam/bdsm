// import React from 'react'
// import Projectitem from './projectitem'
// import netfliximg from '../assets/bdh.png'
// import googleimg from '../assets/ma.png'
// import trillerimg from '../assets/bdst.png'
// import youtubeimg from '../assets/tkb.png'
// import bloga from './bloga'

// function Project() {
//     return (
//         <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
//             <h1 className='text-4xl font-bold text-center text-pink-400'>Blog</h1>
//             <p className='text-center py-8'>
//                 Welcome to our BDSM blog
//             </p>
//             <div className='grid sm:grid-cols-2 gap-12'>

//                 <div className="text-1xl font-bold text-center text-black">
//                 <Projectitem Img={netfliximg} title='History of BDSM' hre={bloga}></Projectitem>
//                 <span className='pt-15 text-center'>History of BDSM</span>
//                 </div>

                  
//                 <div className="text-1xl font-bold text-center text-black">
//                 <Projectitem Img={trillerimg} title='Sissy Maid Mary' owner='Mistress Jessica' hre="https://smartnamehere2.livejournal.com/4770.html"></Projectitem>
//                 <span className='pt-15 text-center'>Story about sissy maid Mary</span>
//                 </div>

                  
//                 <div className="text-1xl font-bold text-center text-black">
//                 <Projectitem Img={youtubeimg} title='Tips and Tricks' hre="https://www.folxhealth.com/library/10-tips-tricks-for-anyone-practicing-bdsm"></Projectitem>
//                 <span className='pt-15 text-center'>10 Tips & Tricks for Anyone Practicing BDSM</span>
//                 </div>

                  
//                 <div className="text-1xl font-bold text-center text-black">
//                 <Projectitem Img={googleimg} title='Master-slave' hre="https://www.lovepanky.com/sensual-tease/fantasy/master-slave-relationship"></Projectitem>
//                 <span className='pt-15 text-center'>Master-Slave Relationship: 23 Rules, How It Works & Ideas to Play Your Part</span>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Project



import React from 'react';
import { Link } from 'react-router-dom';
import netfliximg from '../assets/bdh.png';
import googleimg from '../assets/ma.png';
import trillerimg from '../assets/bdst.png';
import youtubeimg from '../assets/tkb.png';

function Project() {
  const blogPosts = [
    {
      id: 1,
      title: 'History of BDSM',
      image: netfliximg,
      excerpt:
        'Explore the fascinating history of BDSM — its origins, evolution, and cultural significance.',
      content: `
        BDSM has a long and rich history, dating back to ancient rituals and practices...
        (You can write full blog content here.)
      `,
    },
    {
      id: 2,
      title: 'Sissy Maid Mary',
      image: trillerimg,
      excerpt:
        'The story of Sissy Maid Mary as told by Mistress Jessica. A deep dive into the dynamics of sissification.',
      content: `
        Mary’s journey into sissification started with...
      `,
    },
    {
      id: 3,
      title: '10 Tips & Tricks for Anyone Practicing BDSM',
      image: youtubeimg,
      excerpt:
        'Practical advice and safety tips for those curious or experienced in BDSM.',
      content: `
        1. Establish safe words...
        2. Communicate openly...
      `,
    },
    {
      id: 4,
      title: 'Master-Slave Relationship: Rules & Roles',
      image: googleimg,
      excerpt:
        'A guide to understanding Master-slave dynamics — rules, roles, and responsibilities.',
      content: `
        In a Master-slave relationship, structure and trust are key...
      `,
    },
  ];

  return (
    <div id="project" className="max-w-6xl m-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-pink-400">Blog</h1>
      <p className="text-center py-6 text-gray-200">
        Welcome to our BDSM blog. Here, we share stories, guides, and insights from the community.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white/90 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
            <div className="p-6 flex flex-col">
              <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
              <p className="text-gray-700 text-sm mt-3">{post.excerpt}</p>
              <Link
                to={`/blog/${post.id}`}
                state={post} // send post data to BlogDetail
                className="mt-4 inline-block text-pink-500 font-semibold hover:text-pink-600"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
