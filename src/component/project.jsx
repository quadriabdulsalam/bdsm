import React from 'react'
import Projectitem from './projectitem'
import netfliximg from '../assets/bdh.png'
import googleimg from '../assets/ma.png'
import trillerimg from '../assets/bdst.png'
import youtubeimg from '../assets/tkb.png'
import bloga from './bloga'

function Project() {
    return (
        <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
            <h1 className='text-4xl font-bold text-center text-pink-400'>Blog</h1>
            <p className='text-center py-8'>
                Welcome to our BDSM blog
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>

                <div className="text-1xl font-bold text-center text-black">
                <Projectitem Img={netfliximg} title='History of BDSM' hre={bloga}></Projectitem>
                <span className='pt-15 text-center'>History of BDSM</span>
                </div>

                  
                <div className="text-1xl font-bold text-center text-black">
                <Projectitem Img={trillerimg} title='Sissy Maid Mary' owner='Mistress Jessica' hre="https://smartnamehere2.livejournal.com/4770.html"></Projectitem>
                <span className='pt-15 text-center'>Story about sissy maid Mary</span>
                </div>

                  
                <div className="text-1xl font-bold text-center text-black">
                <Projectitem Img={youtubeimg} title='Tips and Tricks' hre="https://www.folxhealth.com/library/10-tips-tricks-for-anyone-practicing-bdsm"></Projectitem>
                <span className='pt-15 text-center'>10 Tips & Tricks for Anyone Practicing BDSM</span>
                </div>

                  
                <div className="text-1xl font-bold text-center text-black">
                <Projectitem Img={googleimg} title='Master-slave' hre="https://www.lovepanky.com/sensual-tease/fantasy/master-slave-relationship"></Projectitem>
                <span className='pt-15 text-center'>Master-Slave Relationship: 23 Rules, How It Works & Ideas to Play Your Part</span>
                </div>

            </div>
        </div>
    )
}

export default Project
