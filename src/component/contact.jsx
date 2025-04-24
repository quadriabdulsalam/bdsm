import React from 'react'
import {useState} from 'react';

function Contact() {
    const [readMore,setReadMore]=useState(false);
    const [readpMore,setReadpMore]=useState(false);
    const [readzMore,setReadzMore]=useState(false);
    const extrapContent=<div>
         <p className="extra-pcontent">
        Your paypal addreess here
      </p>
  </div>
  const linkpName=readpMore?'Paypal Address ':'Paypal Address '



  const extrazContent=<div>
         <p className="extra-zcontent">
Zelle Address here
      </p>
  </div>
  const linkzName=readpMore?'Zelle Address':'Zelle Address'
        

    const extraContent=<div>
      <p className="extra-content">
       Your Cashapp Address here
      </p>
  </div>
const linkName=readMore?'Cashapp':'Cashapp'

    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <div className='text-black'>
                <h1 className='py-4 text-4xl font-bold text-center  '>How to Register and Become a Member of the House of Satisfaction BDSM Community</h1>
                <p className='py-2 text-2xl font-semibold   '>1. Registration Fee: The registration form costs $500.</p>
                <p className='py-2 text-2xl font-semibold   '>2. Payment: Make the payment through your superior mistress or contact us directly for payment instructions.</p>
                <p className='py-2 text-2xl font-semibold   '>3. Receive the Form: After we receive your payment, we will send you the registration form.</p>
                <p className='py-2 text-2xl font-semibold  '>4. Form Submission: Fill out the form and send it back to us for verification.</p>
                <p className='py-2 text-2xl font-semibold  '>5. Verification Process: Upon verification, you will become a fully owned sub by your mistress and an official member of the House of Satisfaction BDSM Community.</p>



            </div>
            <h1 className='py-4 text-4xl font-bold text-center text-pink-400 '>
                Register
            </h1>
            <form action='https://getform.io/f/775b6658-71af-430d-acb3-f17a1be33927' method='POST' className='text-pink-400' encType='multipart/form-data'>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2 ' >
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2' >Name</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name'/>
                    </div>
                    <div className='flex flex-col' >
                        <label className='uppercase text-sm py-2' >Phone Number</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='phone'/>
                    </div>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2' >Email</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email'/>
                    </div>
                    <div className='flex flex-col py-2' >
                        <label className='uppercase text-sm py-2' >Sissy Name</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='subject'/>
                    </div>
                    
                    <div className='flex flex-col py-2' >
                    <label className='uppercase text-sm py-2' >Your Mistress/Master</label>
                    <select className='border-2 rounded-lg p-3 flex border-gray-300' name="Mistress or Master" id="cars">
                    <option value="Mistress Rejoice">Mistress Rejoice</option>
                    <option value="Mistress Loveth">Mistress Loveth</option>
                    <option value="Mistress Jessica">Mistress Jessica</option>
                    <option value="Mistress Rebecca ">Mistress Rebecca</option>
                    </select>
                    </div>

                    <div className='flex flex-col'>
                        <h1 className='uppercase text-2xl pt-5 font-extrabold '>Payment Method</h1>
                        <span>Click on your favorite payment method</span>
                        <span>Note: Screenshot or save receipt after payment</span>
                    <div className='flex flex-col'>

                    <div className="App font-semibold py-3 text-2xl ">
                    <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
                    {readMore && extraContent}
                    </div>

                    <div className="App App font-semibold py-3 text-2xl ">
                    <a className="read-more-link" onClick={()=>{setReadpMore(!readpMore)}}><h2>{linkpName}</h2></a>
                    {readpMore && extrapContent}
                    </div>

                    <div className="App App font-semibold py-3 text-2xl ">
                    <a className="read-more-link" onClick={()=>{setReadzMore(!readzMore)}}><h2>{linkzName}</h2></a>
                    {readzMore && extrazContent}
                    </div>

                    </div>
                           
                    </div>
                    <div className="flex flex-col">
                        <label for='file-input'>Select receipt of the payment for verification</label>
                        <input type='file' id='file-input' name='img' accept='image'/>
                        </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Message</label>
                        <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='10' name='message'></textarea>
                    </div>
                    <button className='bg-pink-400 text-gray-100 mt-4 w-full p-4 rouded' href='#main' >
                        Send Message
                    </button>

                  
  
               
            </form>

        </div>
    )
}

export default Contact
