// import React from 'react'
// import {useState} from 'react';

// function Contact() {
//     const [readMore,setReadMore]=useState(false);
//     const [readpMore,setReadpMore]=useState(false);
//     const [readzMore,setReadzMore]=useState(false);
//     const extrapContent=<div>
//          <p className="extra-pcontent">
//         vdjfpdkiksi145e7urfhjvcjbHNFUJF
//       </p>
//   </div>
//   const linkpName=readpMore?'Bitcoin ':'Bitcoin '



//   const extrazContent=<div>
//          <p className="extra-zcontent">
// sgyuifopohwdijfkondkjnklkmnjkojhb
//       </p>
//   </div>
//   const linkzName=readpMore?'Zelle':'Zelle'
        

//     const extraContent=<div>
//       <p className="extra-content">
//        yuiopgfdfghjklpiuytrdjkljhgjkl
//       </p>
//   </div>
// const linkName=readMore?'Cashapp':'Cashapp'

//     return (
//         <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
//             <div className='text-black'>
//                 <h1 className='py-4 text-4xl font-bold text-center  '>How to Register and Become a Member of the House of Satisfaction BDSM Community</h1>
//                 <p className='py-2 text-2xl font-semibold   '>1. Registration Fee: The registration form costs $500.</p>
//                 <p className='py-2 text-2xl font-semibold   '>2. Payment: Make the payment through your superior mistress or contact us directly for payment instructions.</p>
//                 <p className='py-2 text-2xl font-semibold   '>3. Receive the Form: After we receive your payment, we will send you the registration form.</p>
//                 <p className='py-2 text-2xl font-semibold  '>4. Form Submission: Fill out the form and send it back to us for verification.</p>
//                 <p className='py-2 text-2xl font-semibold  '>5. Verification Process: Upon verification, you will become a fully owned sub by your mistress and an official member of the House of Satisfaction BDSM Community.</p>



//             </div>
//             <h1 className='py-4 text-4xl font-bold text-center text-pink-400 '>
//                 Register
//             </h1>
//             <form action='https://getform.io/f/775b6658-71af-430d-acb3-f17a1be33927' method='POST' className='text-pink-400' encType='multipart/form-data'>
//                 <div className='grid md:grid-cols-2 gap-4 w-full py-2 ' >
//                     <div className='flex flex-col'>
//                         <label className='uppercase text-sm py-2' >Name</label>
//                         <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name'/>
//                     </div>
//                     <div className='flex flex-col' >
//                         <label className='uppercase text-sm py-2' >Phone Number</label>
//                         <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='phone'/>
//                     </div>
//                     </div>
//                     <div className='flex flex-col py-2'>
//                         <label className='uppercase text-sm py-2' >Email</label>
//                         <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email'/>
//                     </div>
//                     <div className='flex flex-col py-2' >
//                         <label className='uppercase text-sm py-2' >Sissy Name</label>
//                         <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='subject'/>
//                     </div>
                    
//                     <div className='flex flex-col py-2' >
//                     <label className='uppercase text-sm py-2' >Your Mistress/Master</label>
//                     <select className='border-2 rounded-lg p-3 flex border-gray-300' name="Mistress or Master" id="cars">
//                     <option value="Mistress Rejoice">Mistress Rejoice</option>
//                     <option value="Mistress Amelia ">Mistress Amelia</option>
//                     <option value="Mistress Loveth">Mistress Loveth</option>
//                     <option value="Mistress Jessica">Mistress Jessica</option>
//                     <option value="Mistress Rebecca ">Mistress Rebecca</option>
                    
//                     </select>
//                     </div>

//                     <div className='flex flex-col'>
//                         <h1 className='uppercase text-2xl pt-5 font-extrabold '>Payment Method</h1>
//                         <span>Click on your favorite payment method</span>
//                         <span>Note: Screenshot or save receipt after payment</span>
//                     <div className='flex flex-col'>

//                     <div className="App font-semibold py-3 text-2xl ">
//                     <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
//                     {readMore && extraContent}
//                     </div>

//                     <div className="App App font-semibold py-3 text-2xl ">
//                     <a className="read-more-link" onClick={()=>{setReadpMore(!readpMore)}}><h2>{linkpName}</h2></a>
//                     {readpMore && extrapContent}
//                     </div>

//                     <div className="App App font-semibold py-3  md:w-[50] lg:w-[20%]  rounded-3xl shadow-lg bg-gray-100 shadow-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
//                     <a className="read-more-link" onClick={()=>{setReadzMore(!readzMore)}}><h2 className='text-2xl'>{linkzName}</h2></a>
//                     <p className='text-1xl '>click to view adress</p>
//                     {/* {readzMore && extrazContent} */}
//                     </div>
//                     {readzMore && extrazContent}
//                     </div>
                           
//                     </div>
//                     <div className="flex flex-col">
//                         <label for='file-input'>Select receipt of the payment for verification</label>
//                         <input type='file' id='file-input' name='img' accept='image'/>
//                         </div>
//                     {/* <div className='flex flex-col py-2'>
//                         <label className='uppercase text-sm py-2'>Message</label>
//                         <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='10' name='message'></textarea>
//                     </div> */}
//                     <button className='bg-pink-400 text-gray-100 mt-4 w-full p-4 rouded' href='#main' >
//                         Send Message
//                     </button>

                  
  
               
//             </form>

//         </div>
//     )
// }

// export default Contact


// import React, { useState } from "react";

// function Contact() {
//   // Payment methods (CashApp removed, PayPal kept)
//   const paymentMethods = [
//     {
//       name: "Bitcoin",
//       address: "bc1qexampleaddress12345xyz",
//       description: "Send your Bitcoin payment to this wallet address.",
//     },
//     {
//       name: "PayPal",
//       address: "paypal.me/HouseOfSatisfaction",
//       description: "Send your payment securely via PayPal.",
//     },
//     {
//       name: "Venmo",
//       address: "@HouseOfSatisfaction",
//       description: "Pay instantly through Venmo.",
//     },
//     {
//       name: "iTunes Gift Card",
//       address: "Send a valid iTunes gift card code.",
//       description:
//         "Submit your iTunes gift card code in the receipt upload or notes.",
//     },
//   ];

//   const [expanded, setExpanded] = useState(null);
//   const [copied, setCopied] = useState(null);

//   // Copy payment address
//   const handleCopy = (address, name) => {
//     if (address.toLowerCase().includes("gift card")) {
//       return; // don't copy iTunes since it's not a fixed address
//     }
//     navigator.clipboard.writeText(address);
//     setCopied(name);
//     setTimeout(() => setCopied(null), 2000);
//   };

//   return (
//     <div
//       id="contact"
//       className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 text-gray-800"
//     >
//       {/* Blog Intro */}
//       <div className="mb-10">
//         <h1 className="py-4 text-4xl font-bold text-center text-pink-500">
//           How to Register and Become a Member of the House of Satisfaction
//           Community
//         </h1>
//         <ol className="list-decimal list-inside text-lg leading-8 mt-6">
//   <li>
//     The registration fee is <strong>$500</strong>.
//   </li>
//   <li>
//     You can make this payment either through your assigned mistress or directly
//     here on our website using the payment options provided.
//   </li>
//   <li>
//     Once your payment has been confirmed, we will send you the official
//     registration form.
//   </li>
//   <li>
//     Complete the form carefully and return it to us for verification.
//   </li>
//   <li>
//     After successful verification, you will be recognized as a fully owned sub
//     and become an official member of the House of Satisfaction Community.
//   </li>
// </ol>

//       </div>

//       {/* Registration Form */}
//       <h2 className="py-4 text-3xl font-bold text-center text-pink-500">
//         Register Now
//       </h2>
//       <form
//         action="https://getform.io/f/775b6658-71af-430d-acb3-f17a1be33927"
//         method="POST"
//         className="text-gray-700"
//         encType="multipart/form-data"
//       >
//         {/* Inputs */}
//         <div className="grid md:grid-cols-2 gap-4 w-full py-2">
//           <div className="flex flex-col">
//             <label className="uppercase text-sm py-2">Name</label>
//             <input
//               className="border-2 rounded-lg p-3 border-gray-300"
//               type="text"
//               name="name"
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="uppercase text-sm py-2">Phone Number</label>
//             <input
//               className="border-2 rounded-lg p-3 border-gray-300"
//               type="text"
//               name="phone"
//               required
//             />
//           </div>
//         </div>

//         <div className="flex flex-col py-2">
//           <label className="uppercase text-sm py-2">Email</label>
//           <input
//             className="border-2 rounded-lg p-3 border-gray-300"
//             type="email"
//             name="email"
//             required
//           />
//         </div>

//         <div className="flex flex-col py-2">
//           <label className="uppercase text-sm py-2">Sissy Name</label>
//           <input
//             className="border-2 rounded-lg p-3 border-gray-300"
//             type="text"
//             name="sissyName"
//           />
//         </div>

//         <div className="flex flex-col py-2">
//           <label className="uppercase text-sm py-2">Your Mistress/Master</label>
//           <select
//             className="border-2 rounded-lg p-3 border-gray-300"
//             name="mistressOrMaster"
//           >
//             <option value="Mistress Rejoice">Mistress Rejoice</option>
//             <option value="Mistress Amelia">Mistress Amelia</option>
//             <option value="Mistress Loveth">Mistress Loveth</option>
//             <option value="Mistress Jessica">Mistress Jessica</option>
//             <option value="Mistress Rebecca">Mistress Rebecca</option>
//           </select>
//         </div>

//         {/* Payment Section */}
//         <div className="flex flex-col py-6">
//           <h3 className="uppercase text-2xl font-extrabold text-pink-500">
//             Payment Method
//           </h3>
//           <span className="text-sm text-gray-500">
//             Click on your preferred payment method. Don’t forget to screenshot
//             or save your receipt.
//           </span>

//           {paymentMethods.map((method) => (
//             <div
//               key={method.name}
//               className="mt-4 border rounded-2xl shadow-sm p-4 bg-gray-50 hover:shadow-lg transition"
//             >
//               <button
//                 type="button"
//                 onClick={() =>
//                   setExpanded(expanded === method.name ? null : method.name)
//                 }
//                 className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
//               >
//                 {method.name}
//                 <span>{expanded === method.name ? "−" : "+"}</span>
//               </button>

//               {expanded === method.name && (
//                 <div className="mt-3 text-gray-700">
//                   <p>{method.description}</p>
//                   <div className="flex items-center justify-between mt-2">
//                     <code className="bg-gray-200 p-2 rounded text-sm">
//                       {method.address}
//                     </code>
//                     {!method.address.toLowerCase().includes("gift card") && (
//                       <button
//                         type="button"
//                         onClick={() => handleCopy(method.address, method.name)}
//                         className="ml-3 px-3 py-1 text-sm bg-pink-500 text-white rounded hover:bg-pink-600"
//                       >
//                         {copied === method.name ? "Copied!" : "Copy"}
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Receipt Upload */}
//         <div className="flex flex-col py-2">
//           <label className="uppercase text-sm py-2">
//             Upload Payment Receipt
//           </label>
//           <input
//             type="file"
//             name="receipt"
//             accept="image/*"
//             className="border-2 rounded-lg p-2 border-gray-300"
//             required
//           />
//         </div>

//         {/* Submit */}
//         <button
//           className="bg-pink-500 text-white mt-6 w-full p-4 rounded-lg font-bold hover:bg-pink-600 transition"
//           type="submit"
//         >
//           Submit Registration
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Contact;










// import React, { useState } from "react";

// function Contact() {
//   // Payment methods (CashApp removed, PayPal kept)
//   const paymentMethods = [
//     {
//       name: "Bitcoin",
//       address: "bc1qexampleaddress12345xyz",
//       description: "Send your Bitcoin payment to this wallet address.",
//     },
//     {
//       name: "PayPal",
//       address: "paypal.me/HouseOfSatisfaction",
//       description: "Send your payment securely via PayPal.",
//     },
//     {
//       name: "Venmo",
//       address: "@HouseOfSatisfaction",
//       description: "Pay instantly through Venmo.",
//     },
//     {
//       name: "iTunes Gift Card",
//       address: "Send a valid iTunes gift card code.",
//       description: "Submit your iTunes gift card code in the receipt upload or notes.",
//     },
//   ];

//   const [expanded, setExpanded] = useState(null);
//   const [copied, setCopied] = useState(null);

//   // iTunes Gift Card states
//   const [giftType, setGiftType] = useState("");
//   const [frontImage, setFrontImage] = useState(null);
//   const [backImage, setBackImage] = useState(null);

//   // Handle file uploads
//   const handleImageUpload = (e, setter) => {
//     const file = e.target.files[0];
//     if (file) {
//       setter(URL.createObjectURL(file));
//     }
//   };

//   // Copy to clipboard (general)
//   const handleCopy = (address, name) => {
//     if (address.toLowerCase().includes("gift card")) return;
//     navigator.clipboard.writeText(address);
//     setCopied(name);
//     setTimeout(() => setCopied(null), 2000);
//   };

//   // Copy email for e-code
//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     setCopied("email");
//     setTimeout(() => setCopied(null), 2000);
//   };

//   return (
//     <div
//       id="contact"
//       className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 text-gray-800"
//     >
//       {/* Blog Intro */}
//       <div className="mb-10">
//         <h1 className="py-4 text-4xl font-bold text-center text-pink-500">
//           How to Register and Become a Member of the House of Satisfaction
//           Community
//         </h1>
//         <ol className="list-decimal list-inside text-lg leading-8 mt-6">
//           <li>
//             The registration fee is <strong>$500</strong>.
//           </li>
//           <li>
//             You can make this payment either through your assigned mistress or directly
//             here on our website using the payment options provided.
//           </li>
//           <li>
//             Once your payment has been confirmed, we will send you the official
//             registration form.
//           </li>
//           <li>
//             Complete the form carefully and return it to us for verification.
//           </li>
//           <li>
//             After successful verification, you will be recognized as a fully owned sub
//             and become an official member of the House of Satisfaction Community.
//           </li>
//         </ol>
//       </div>

//       {/* Registration Form */}
//       <h2 className="py-4 text-3xl font-bold text-center text-pink-500">
//         Register Now
//       </h2>
//       <form
//         action="https://getform.io/f/775b6658-71af-430d-acb3-f17a1be33927"
//         method="POST"
//         className="text-gray-700"
//         encType="multipart/form-data"
//       >
//         {/* Inputs */}
//         <div className="grid md:grid-cols-2 gap-4 w-full py-2">
//           <div className="flex flex-col">
//             <label className="uppercase text-sm py-2">Name</label>
//             <input
//               className="border-2 rounded-lg p-3 border-gray-300"
//               type="text"
//               name="name"
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="uppercase text-sm py-2">Phone Number</label>
//             <input
//               className="border-2 rounded-lg p-3 border-gray-300"
//               type="text"
//               name="phone"
//               required
//             />
//           </div>
//         </div>

//         <div className="flex flex-col py-2">
//           <label className="uppercase text-sm py-2">Email</label>
//           <input
//             className="border-2 rounded-lg p-3 border-gray-300"
//             type="email"
//             name="email"
//             required
//           />
//         </div>

//         <div className="flex flex-col py-2">
//           <label className="uppercase text-sm py-2">Sissy Name</label>
//           <input
//             className="border-2 rounded-lg p-3 border-gray-300"
//             type="text"
//             name="sissyName"
//           />
//         </div>

//         <div className="flex flex-col py-2">
//           <label className="uppercase text-sm py-2">Your Mistress/Master</label>
//           <select
//             className="border-2 rounded-lg p-3 border-gray-300"
//             name="mistressOrMaster"
//           >
//             <option value="Mistress Rejoice">Mistress Rejoice</option>
//             <option value="Mistress Amelia">Mistress Amelia</option>
//             <option value="Mistress Loveth">Mistress Loveth</option>
//             <option value="Mistress Jessica">Mistress Jessica</option>
//             <option value="Mistress Rebecca">Mistress Rebecca</option>
//           </select>
//         </div>

//         {/* Payment Section */}
//         <div className="flex flex-col py-6">
//           <h3 className="uppercase text-2xl font-extrabold text-pink-500">
//             Payment Method
//           </h3>
//           <span className="text-sm text-gray-500">
//             Click on your preferred payment method. Don’t forget to screenshot
//             or save your receipt.
//           </span>

//           {paymentMethods.map((method) => (
//             <div
//               key={method.name}
//               className="mt-4 border rounded-2xl shadow-sm p-4 bg-gray-50 hover:shadow-lg transition"
//             >
//               <button
//                 type="button"
//                 onClick={() =>
//                   setExpanded(expanded === method.name ? null : method.name)
//                 }
//                 className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
//               >
//                 {method.name}
//                 <span>{expanded === method.name ? "−" : "+"}</span>
//               </button>

//               {expanded === method.name && (
//                 <div className="mt-3 text-gray-700">
//                   {/* Normal methods */}
//                   {method.name !== "iTunes Gift Card" ? (
//                     <>
//                       <p>{method.description}</p>
//                       <div className="flex items-center justify-between mt-2">
//                         <code className="bg-gray-200 p-2 rounded text-sm">
//                           {method.address}
//                         </code>
//                         {!method.address.toLowerCase().includes("gift card") && (
//                           <button
//                             type="button"
//                             onClick={() => handleCopy(method.address, method.name)}
//                             className="ml-3 px-3 py-1 text-sm bg-pink-500 text-white rounded hover:bg-pink-600"
//                           >
//                             {copied === method.name ? "Copied!" : "Copy"}
//                           </button>
//                         )}
//                       </div>
//                     </>
//                   ) : (
//                     // iTunes Gift Card Special UI
//                     <div className="border rounded-lg p-3">
//                       <p className="font-bold">Apple Gift Card</p>
//                       <div className="mt-2 space-y-2">
//                         {/* Physical */}
//                         <label className="flex items-center gap-2">
//                           <input
//                             type="radio"
//                             value="physical"
//                             checked={giftType === "physical"}
//                             onChange={(e) => setGiftType(e.target.value)}
//                           />
//                           Physical Card (Upload Front & Back)
//                         </label>
//                         {giftType === "physical" && (
//                           <div className="grid grid-cols-2 gap-3 mt-2">
//                             <label className="border rounded-lg h-32 flex items-center justify-center cursor-pointer overflow-hidden">
//                               {frontImage ? (
//                                 <img
//                                   src={frontImage}
//                                   alt="Front"
//                                   className="h-full w-full object-cover"
//                                 />
//                               ) : (
//                                 <span className="text-gray-500 text-sm">Front</span>
//                               )}
//                               <input
//                                 type="file"
//                                 name="frontimage"
//                                 accept="image/*"
//                                 className="hidden"
//                                 onChange={(e) => handleImageUpload(e, setFrontImage)}
//                               />
//                             </label>
//                             <label className="border rounded-lg h-32 flex items-center justify-center cursor-pointer overflow-hidden">
//                               {backImage ? (
//                                 <img
//                                   src={backImage}
//                                   alt="Back"
//                                   className="h-full w-full object-cover"
//                                 />
//                               ) : (
//                                 <span className="text-gray-500 text-sm">Back</span>
//                               )}
//                               <input
//                                 type="file"
//                                 name="backimage"
//                                 accept="image/*"
//                                 className="hidden"
//                                 onChange={(e) => handleImageUpload(e, setBackImage)}
//                               />
//                             </label>
//                           </div>
//                         )}

//                         {/* E-code */}
//                         <label className="flex items-center gap-2 mt-3">
//                           <input
//                             type="radio"
//                             value="ecode"
//                             checked={giftType === "ecode"}
//                             onChange={(e) => setGiftType(e.target.value)}
//                           />
//                           E-code (Send via Email)
//                         </label>

//                         {giftType === "ecode" && (
//                           <button
//                             type="button"
//                             onClick={() => copyToClipboard("houseofsatisfaction@gmail.com")}
//                             className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                           >
//                             {copied === "email" ? "Copied!" : "Copy Email Address"}
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Receipt Upload */}
//         <div className="flex flex-col py-2">
//           <label className="uppercase text-sm py-2">Upload Payment Receipt</label>
//           <input
//             type="file"
//             name="receipt"
//             accept="image/*"
//             className="border-2 rounded-lg p-2 border-gray-300"
//             required
//           />
//         </div>

//         {/* Submit */}
//         <button
//           className="bg-pink-500 text-white mt-6 w-full p-4 rounded-lg font-bold hover:bg-pink-600 transition"
//           type="submit"
//         >
//           Submit Registration
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Contact;




import React, { useState } from "react";

function Contact() {
  // Payment methods (CashApp removed, PayPal kept)
  const paymentMethods = [
    {
      name: "Bitcoin",
      address: "bc1qexampleaddress12345xyz",
      description: "Send your Bitcoin payment to this wallet address.",
    },
    {
      name: "PayPal",
      address: "paypal.me/HouseOfSatisfaction",
      description: "Send your payment securely via PayPal.",
    },
    {
      name: "Venmo",
      address: "@HouseOfSatisfaction",
      description: "Pay instantly through Venmo.",
    },
    {
      name: "iTunes Gift Card",
      address: "Send a valid iTunes gift card code.",
      description:
        "Submit your iTunes gift card code in the receipt upload or notes.",
    },
  ];

  const [expanded, setExpanded] = useState(null);
  const [copied, setCopied] = useState(null);

  // iTunes Gift Card states
  const [giftType, setGiftType] = useState("");
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);

  // Handle file uploads
  const handleImageUpload = (e, setter) => {
    const file = e.target.files[0];
    if (file) {
      setter(URL.createObjectURL(file));
    }
  };

  // Copy to clipboard (general)
  const handleCopy = (address, name) => {
    if (address.toLowerCase().includes("gift card")) return;
    navigator.clipboard.writeText(address);
    setCopied(name);
    setTimeout(() => setCopied(null), 2000);
  };

  // Copy email for e-code
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied("email");
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div
      id="contact"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 text-gray-800"
    >
      {/* Blog Intro */}
      <div className="mb-10">
        <h1 className="py-4 text-4xl font-bold text-center text-pink-500">
          How to Register and Become a Member of the House of Satisfaction
          Community
        </h1>
        <ol className="list-decimal list-inside text-lg leading-8 mt-6">
          <li>
            The registration fee is <strong>$500</strong>.
          </li>
          <li>
            You can make this payment either through your assigned mistress or
            directly here on our website using the payment options provided.
          </li>
          <li>
            Once your payment has been confirmed, we will send you the official
            registration form.
          </li>
          <li>
            Complete the form carefully and return it to us for verification.
          </li>
          <li>
            After successful verification, you will be recognized as a fully
            owned sub and become an official member of the House of
            Satisfaction Community.
          </li>
        </ol>
      </div>

      {/* Registration Form */}
      <h2 className="py-4 text-3xl font-bold text-center text-pink-500">
        Register Now
      </h2>
      <form
        action="https://getform.io/f/775b6658-71af-430d-acb3-f17a1be33927"
        method="POST"
        className="text-gray-700"
        encType="multipart/form-data"
      >
        {/* Inputs */}
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 border-gray-300"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone Number</label>
            <input
              className="border-2 rounded-lg p-3 border-gray-300"
              type="text"
              name="phone"
              required
            />
          </div>
        </div>

        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="border-2 rounded-lg p-3 border-gray-300"
            type="email"
            name="email"
            required
          />
        </div>

        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Sissy Name</label>
          <input
            className="border-2 rounded-lg p-3 border-gray-300"
            type="text"
            name="sissyName"
          />
        </div>

        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Your Mistress/Master</label>
          <select
            className="border-2 rounded-lg p-3 border-gray-300"
            name="mistressOrMaster"
          >
            <option value="">-- Select Mistress/Master --</option>
            <option value="Mistress Rejoice">Mistress Rejoice</option>
            <option value="Mistress Amelia">Mistress Amelia</option>
            <option value="Mistress Loveth">Mistress Loveth</option>
            <option value="Mistress Jessica">Mistress Jessica</option>
            <option value="Mistress Rebecca">Mistress Rebecca</option>
          </select>
        </div>

        {/* Payment Section */}
        <div className="flex flex-col py-6">
          <h3 className="uppercase text-2xl font-extrabold text-pink-500">
            Payment Method
          </h3>
          <span className="text-sm text-gray-500">
            Click on your preferred payment method. Don’t forget to screenshot
            or save your receipt.
          </span>

          {paymentMethods.map((method) => (
            <div
              key={method.name}
              className="mt-4 border rounded-2xl shadow-sm p-4 bg-gray-50 hover:shadow-lg transition"
            >
              <button
                type="button"
                onClick={() =>
                  setExpanded(expanded === method.name ? null : method.name)
                }
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
              >
                {method.name}
                <span>{expanded === method.name ? "−" : "+"}</span>
              </button>

              {expanded === method.name && (
                <div className="mt-3 text-gray-700">
                  {/* Normal methods */}
                  {method.name !== "iTunes Gift Card" ? (
                    <>
                      <p>{method.description}</p>
                      <div className="flex items-center justify-between mt-2">
                        <code className="bg-gray-200 p-2 rounded text-sm">
                          {method.address}
                        </code>
                        {!method.address
                          .toLowerCase()
                          .includes("gift card") && (
                          <button
                            type="button"
                            onClick={() =>
                              handleCopy(method.address, method.name)
                            }
                            className="ml-3 px-3 py-1 text-sm bg-pink-500 text-white rounded hover:bg-pink-600"
                          >
                            {copied === method.name ? "Copied!" : "Copy"}
                          </button>
                        )}
                      </div>
                    </>
                  ) : (
                    // iTunes Gift Card Special UI
                    <div className="border rounded-lg p-3">
                      <p className="font-bold">Apple Gift Card</p>
                      <div className="mt-2 space-y-2">
                        {/* Physical */}
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            value="physical"
                            checked={giftType === "physical"}
                            onChange={(e) => setGiftType(e.target.value)}
                          />
                          Physical Card (Upload Front & Back)
                        </label>
                        {giftType === "physical" && (
                          <div className="grid grid-cols-2 gap-3 mt-2">
                            <label className="border rounded-lg h-32 flex items-center justify-center cursor-pointer overflow-hidden">
                              {frontImage ? (
                                <img
                                  src={frontImage}
                                  alt="Front"
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <span className="text-gray-500 text-sm">
                                  Front
                                </span>
                              )}
                              <input
                                type="file"
                                name="frontimage"
                                accept="image/*"
                                className="hidden"
                                required={giftType === "physical"} // ✅ Only required if Physical
                                onChange={(e) =>
                                  handleImageUpload(e, setFrontImage)
                                }
                              />
                            </label>
                            <label className="border rounded-lg h-32 flex items-center justify-center cursor-pointer overflow-hidden">
                              {backImage ? (
                                <img
                                  src={backImage}
                                  alt="Back"
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <span className="text-gray-500 text-sm">
                                  Back
                                </span>
                              )}
                              <input
                                type="file"
                                name="backimage"
                                accept="image/*"
                                className="hidden"
                                required={giftType === "physical"} // ✅ Only required if Physical
                                onChange={(e) =>
                                  handleImageUpload(e, setBackImage)
                                }
                              />
                            </label>
                          </div>
                        )}

                        {/* E-code */}
                        <label className="flex items-center gap-2 mt-3">
                          <input
                            type="radio"
                            value="ecode"
                            checked={giftType === "ecode"}
                            onChange={(e) => setGiftType(e.target.value)}
                          />
                          E-code (Send via Email)
                        </label>

                        {giftType === "ecode" && (
                          <button
                            type="button"
                            onClick={() =>
                              copyToClipboard(
                                "houseofsatisfaction@gmail.com"
                              )
                            }
                            className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
                          >
                            {copied === "email"
                              ? "Copied!"
                              : "Copy Email Address"}
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Receipt Upload */}
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">
            Upload Payment Receipt
          </label>
          <input
            type="file"
            name="receipt"
            accept="image/*"
            className="border-2 rounded-lg p-2 border-gray-300"
            required
          />
        </div>

        {/* Submit */}
        <button
          className="bg-pink-500 text-white mt-6 w-full p-4 rounded-lg font-bold hover:bg-pink-600 transition"
          type="submit"
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
}

export default Contact;
