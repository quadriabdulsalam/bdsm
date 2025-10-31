// // Shop.jsx
// import React, { useState } from "react";

// const products = [
//   { id: 1, name: "Leather Collar", price: 120, img: "https://via.placeholder.com/150" },
//   { id: 2, name: "Whip", price: 90, img: "https://via.placeholder.com/150" },
//   { id: 3, name: "Handcuffs", price: 70, img: "https://via.placeholder.com/150" },
//   { id: 4, name: "Blindfold", price: 50, img: "https://via.placeholder.com/150" },
//   { id: 5, name: "Rope", price: 60, img: "https://via.placeholder.com/150" },
//   { id: 6, name: "Gag Ball", price: 80, img: "https://via.placeholder.com/150" },
//   { id: 7, name: "Ankle Restraints", price: 100, img: "https://via.placeholder.com/150" },
//   { id: 8, name: "Mask", price: 40, img: "https://via.placeholder.com/150" },
//   { id: 9, name: "Gloves", price: 55, img: "https://via.placeholder.com/150" },
//   { id: 10, name: "Harness", price: 150, img: "https://via.placeholder.com/150" },
// ];

// function Shop() {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const [copied, setCopied] = useState(false);

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <div className="max-w-[1200px] m-auto p-6">
//       <h1 className="text-4xl font-bold text-center text-pink-400 mb-10">
//         House of Satisfaction Shop
//       </h1>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="rounded-2xl shadow-lg bg-white hover:scale-105 ease-in duration-200 cursor-pointer"
//             onClick={() => setSelectedProduct(product)}
//           >
//             <img
//               src={product.img}
//               alt={product.name}
//               className="w-full h-48 object-cover rounded-t-2xl"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold">{product.name}</h2>
//               <p className="text-gray-600">${product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Payment Modal */}
//       {selectedProduct && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl p-8 w-[90%] md:w-[600px] shadow-lg relative">
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-900"
//               onClick={() => setSelectedProduct(null)}
//             >
//               ✕
//             </button>

//             <h2 className="text-2xl font-bold mb-4">
//               Purchase: {selectedProduct.name}
//             </h2>
//             <p className="mb-4 text-lg">Price: ${selectedProduct.price}</p>

//             <h3 className="text-xl font-semibold mb-2">Payment Methods:</h3>
//             <div className="space-y-4">
//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">PayPal</p>
//                 <button
//                   onClick={() => copyToClipboard("paypal.me/houseofsatisfaction")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2"
//                 >
//                   Copy PayPal Address
//                 </button>
//               </div>

//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Bitcoin</p>
//                 <button
//                   onClick={() => copyToClipboard("1ABCDxyz123BitcoinAddress")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2"
//                 >
//                   Copy Bitcoin Address
//                 </button>
//               </div>

//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Venmo</p>
//                 <button
//                   onClick={() => copyToClipboard("@HouseSatisfaction")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2"
//                 >
//                   Copy Venmo Address
//                 </button>
//               </div>

//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">iTunes Gift Card</p>
//                 <p className="text-sm">Upload receipt after purchase</p>
//               </div>
//             </div>

//             {copied && (
//               <p className="text-green-600 mt-3">Copied to clipboard ✅</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Shop;


// Shop.jsx
// import React, { useState } from "react";

// const products = [
//   { id: 1, name: "Leather Collar", price: 120, img: "https://source.unsplash.com/400x400/?leather,collar" },
//   { id: 2, name: "Whip", price: 90, img: "https://source.unsplash.com/400x400/?whip" },
//   { id: 3, name: "Handcuffs", price: 70, img: "https://source.unsplash.com/400x400/?handcuffs" },
//   { id: 4, name: "Blindfold", price: 50, img: "https://source.unsplash.com/400x400/?blindfold" },
//   { id: 5, name: "Rope", price: 60, img: "https://source.unsplash.com/400x400/?rope" },
//   { id: 6, name: "Gag Ball", price: 80, img: "https://source.unsplash.com/400x400/?gag,ball" },
//   { id: 7, name: "Ankle Restraints", price: 100, img: "https://source.unsplash.com/400x400/?restraints" },
//   { id: 8, name: "Mask", price: 40, img: "https://source.unsplash.com/400x400/?mask" },
//   { id: 9, name: "Gloves", price: 55, img: "https://source.unsplash.com/400x400/?leather,gloves" },
//   { id: 10, name: "Harness", price: 150, img: "https://source.unsplash.com/400x400/?harness" },
// ];

// function Shop() {
//   const [cart, setCart] = useState([]);
//   const [showCheckout, setShowCheckout] = useState(false);
//   const [copied, setCopied] = useState(false);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   const removeFromCart = (index) => {
//     setCart(cart.filter((_, i) => i !== index));
//   };

//   const emptyCart = () => {
//     setCart([]);
//   };

//   const total = cart.reduce((acc, item) => acc + item.price, 0);

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <div className="max-w-[1200px] m-auto p-6 bg-white rounded-2xl shadow-lg">
//       <h1 className="text-4xl font-bold text-center text-pink-400 mb-10">
//         House of Satisfaction Shop
//       </h1>

//       {/* Cart Section at the Top */}
//       <div className="sticky top-0 bg-gray-100 p-4 rounded-xl shadow-md mb-8 z-20 max-w-[400px] mx-auto">
//         <h2 className="text-xl font-bold mb-3">Your Cart</h2>
//         {cart.length > 0 ? (
//           <>
//             <ul className="mb-3 max-h-[150px] overflow-y-auto text-sm">
//               {cart.map((item, index) => (
//                 <li key={index} className="flex justify-between items-center py-1 border-b">
//                   <span>{item.name}</span>
//                   <div className="flex items-center gap-2">
//                     <span>${item.price}</span>
//                     <button
//                       onClick={() => removeFromCart(index)}
//                       className="text-red-500 hover:text-red-700 text-xs"
//                     >
//                       ✕
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//             <h3 className="text-lg font-semibold">Total: ${total}</h3>

//             <div className="flex gap-2 mt-3">
//               <button
//                 onClick={() => setShowCheckout(true)}
//                 className="flex-1 bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 text-sm"
//               >
//                 Checkout
//               </button>
//               <button
//                 onClick={emptyCart}
//                 className="flex-1 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm"
//               >
//                 Empty Cart
//               </button>
//             </div>
//           </>
//         ) : (
//           <p className="text-gray-600 text-sm">Your cart is empty.</p>
//         )}
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="rounded-lg border p-4 hover:shadow-lg ease-in duration-200"
//           >
//             <img
//               src={product.img}
//               alt={product.name}
//               className="w-full h-40 object-cover rounded-md"
//             />
//             <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//             <p className="text-gray-600">${product.price}</p>
//             <button
//               onClick={() => addToCart(product)}
//               className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-3 hover:bg-pink-500"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Checkout Modal */}
//       {showCheckout && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl p-8 w-[90%] md:w-[500px] shadow-lg relative">
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-900"
//               onClick={() => setShowCheckout(false)}
//             >
//               ✕
//             </button>

//             <h2 className="text-xl font-bold mb-3">Checkout</h2>
//             <p className="mb-3 text-md">Total: ${total}</p>

//             <h3 className="text-lg font-semibold mb-2">Payment Methods:</h3>
//             <div className="space-y-3 text-sm">
//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">PayPal</p>
//                 <button
//                   onClick={() => copyToClipboard("paypal.me/houseofsatisfaction")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy PayPal Address
//                 </button>
//               </div>

//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Bitcoin</p>
//                 <button
//                   onClick={() => copyToClipboard("1ABCDxyz123BitcoinAddress")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy Bitcoin Address
//                 </button>
//               </div>

//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Venmo</p>
//                 <button
//                   onClick={() => copyToClipboard("@HouseSatisfaction")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy Venmo Address
//                 </button>
//               </div>

//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">iTunes Gift Card</p>
//                 <p className="text-xs">Submit payment by iTunes gift card.</p>
//               </div>
//             </div>

//             {/* Upload proof */}
//             <div className="mt-5">
//               <p className="font-semibold mb-2">Upload your payment proof:</p>
//               <input type="file" accept="image/*" className="mt-1" />
//             </div>

//             {copied && (
//               <p className="text-green-600 mt-3 text-sm">Copied to clipboard ✅</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Shop;




// import React, { useState } from "react";

// const products = [
//   { id: 1, name: "Leather Collar", price: 120, img: "https://source.unsplash.com/400x400/?leather,collar" },
//   { id: 2, name: "Whip", price: 90, img: "https://source.unsplash.com/400x400/?whip" },
//   { id: 3, name: "Handcuffs", price: 70, img: "https://source.unsplash.com/400x400/?handcuffs" },
//   { id: 4, name: "Blindfold", price: 50, img: "https://source.unsplash.com/400x400/?blindfold" },
//   { id: 5, name: "Rope", price: 60, img: "https://source.unsplash.com/400x400/?rope" },
//   { id: 6, name: "Gag Ball", price: 80, img: "https://source.unsplash.com/400x400/?gag,ball" },
//   { id: 7, name: "Ankle Restraints", price: 100, img: "https://source.unsplash.com/400x400/?restraints" },
//   { id: 8, name: "Mask", price: 40, img: "https://source.unsplash.com/400x400/?mask" },
//   { id: 9, name: "Gloves", price: 55, img: "https://source.unsplash.com/400x400/?leather,gloves" },
//   { id: 10, name: "Harness", price: 150, img: "https://source.unsplash.com/400x400/?harness" },
// ];

// function Shop() {
//   const [cart, setCart] = useState([]);
//   const [showCheckout, setShowCheckout] = useState(false);
//   const [copied, setCopied] = useState(false);

//   // NEW: Shipping & Gift card states
//   const [shipping, setShipping] = useState("standard");
//   const [giftType, setGiftType] = useState("physical");

//   const addToCart = (product) => setCart([...cart, product]);
//   const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
//   const emptyCart = () => setCart([]);

//   // Calculate total with shipping
//   const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);
//   const shippingCost = shipping === "express" ? 20 : 10;
//   const total = cartTotal + (cart.length > 0 ? shippingCost : 0);

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <div className="max-w-[1200px] m-auto p-6 bg-white rounded-2xl shadow-lg">
//       <h1 className="text-4xl font-bold text-center text-pink-400 mb-10">
//         House of Satisfaction Shop
//       </h1>

//       {/* Cart Section */}
//       <div className="sticky top-0 bg-gray-100 p-4 rounded-xl shadow-md mb-8 z-20 max-w-[400px] mx-auto">
//         <h2 className="text-xl font-bold mb-3">Your Cart</h2>
//         {cart.length > 0 ? (
//           <>
//             <ul className="mb-3 max-h-[150px] overflow-y-auto text-sm">
//               {cart.map((item, index) => (
//                 <li key={index} className="flex justify-between items-center py-1 border-b">
//                   <span>{item.name}</span>
//                   <div className="flex items-center gap-2">
//                     <span>${item.price}</span>
//                     <button
//                       onClick={() => removeFromCart(index)}
//                       className="text-red-500 hover:text-red-700 text-xs"
//                     >
//                       ✕
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//             <h3 className="text-lg font-semibold">Subtotal: ${cartTotal}</h3>
//             <h3 className="text-sm text-gray-600">+ Shipping will be added at checkout</h3>

//             <div className="flex gap-2 mt-3">
//               <button
//                 onClick={() => setShowCheckout(true)}
//                 className="flex-1 bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 text-sm"
//               >
//                 Checkout
//               </button>
//               <button
//                 onClick={emptyCart}
//                 className="flex-1 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm"
//               >
//                 Empty Cart
//               </button>
//             </div>
//           </>
//         ) : (
//           <p className="text-gray-600 text-sm">Your cart is empty.</p>
//         )}
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="rounded-lg border p-4 hover:shadow-lg ease-in duration-200"
//           >
//             <img
//               src={product.img}
//               alt={product.name}
//               className="w-full h-40 object-cover rounded-md"
//             />
//             <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//             <p className="text-gray-600">${product.price}</p>
//             <button
//               onClick={() => addToCart(product)}
//               className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-3 hover:bg-pink-500"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Checkout Modal */}
//       {showCheckout && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl p-8 w-[90%] md:w-[500px] max-h-[90vh] overflow-y-auto shadow-lg relative">
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-900"
//               onClick={() => setShowCheckout(false)}
//             >
//               ✕
//             </button>

//             <h2 className="text-xl font-bold mb-3">Checkout</h2>
//             <p className="mb-3 text-md">Subtotal: ${cartTotal}</p>

//             {/* Shipping */}
//             <h3 className="text-lg font-semibold mb-2">Shipping Options:</h3>
//             <div className="space-y-2 mb-4 text-sm">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   value="standard"
//                   checked={shipping === "standard"}
//                   onChange={(e) => setShipping(e.target.value)}
//                 />
//                 Standard Shipping (+$10)
//               </label>
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   value="express"
//                   checked={shipping === "express"}
//                   onChange={(e) => setShipping(e.target.value)}
//                 />
//                 Express Shipping (+$20)
//               </label>
//             </div>

//             <p className="font-semibold mb-3">Total: ${total}</p>

//             {/* Payment Section */}
//             <h3 className="text-lg font-semibold mb-2">Payment Methods:</h3>
//             <div className="space-y-3 text-sm">
//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">PayPal</p>
//                 <button
//                   onClick={() => copyToClipboard("paypal.me/houseofsatisfaction")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy PayPal Address
//                 </button>
//               </div>

//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Bitcoin</p>
//                 <button
//                   onClick={() => copyToClipboard("1ABCDxyz123BitcoinAddress")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy Bitcoin Address
//                 </button>
//               </div>

//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Venmo</p>
//                 <button
//                   onClick={() => copyToClipboard("@HouseSatisfaction")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy Venmo Address
//                 </button>
//               </div>

//               {/* Apple Gift Card */}
//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Apple Gift Card</p>
//                 <div className="mt-2 space-y-2">
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       value="physical"
//                       checked={giftType === "physical"}
//                       onChange={(e) => setGiftType(e.target.value)}
//                     />
//                     Physical Card (Upload Front & Back)
//                   </label>
//                   {giftType === "physical" && (
//                     <div className="space-y-2 mt-2">
//                       <input type="file" accept="image/*" className="w-full" />
//                       <input type="file" accept="image/*" className="w-full" />
//                     </div>
//                   )}

//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       value="ecode"
//                       checked={giftType === "ecode"}
//                       onChange={(e) => setGiftType(e.target.value)}
//                     />
//                     E-code (Send to Email)
//                   </label>
//                   {giftType === "ecode" && (
//                     <input
//                       type="email"
//                       placeholder="Enter recipient email"
//                       className="w-full border rounded-lg p-2 mt-2"
//                     />
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Upload proof */}
//             <div className="mt-5">
//               <p className="font-semibold mb-2">Upload your payment proof:</p>
//               <input type="file" accept="image/*" className="mt-1" />
//             </div>

//             {copied && (
//               <p className="text-green-600 mt-3 text-sm">Copied to clipboard ✅</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Shop;



// import React, { useState } from "react";

// const products = [
//   { id: 1, name: "Leather Collar", price: 120, img: "https://source.unsplash.com/400x400/?leather,collar" },
//   { id: 2, name: "Whip", price: 90, img: "https://source.unsplash.com/400x400/?whip" },
//   { id: 3, name: "Handcuffs", price: 70, img: "https://source.unsplash.com/400x400/?handcuffs" },
//   { id: 4, name: "Blindfold", price: 50, img: "https://source.unsplash.com/400x400/?blindfold" },
//   { id: 5, name: "Rope", price: 60, img: "https://source.unsplash.com/400x400/?rope" },
//   { id: 6, name: "Gag Ball", price: 80, img: "https://source.unsplash.com/400x400/?gag,ball" },
//   { id: 7, name: "Ankle Restraints", price: 100, img: "https://source.unsplash.com/400x400/?restraints" },
//   { id: 8, name: "Mask", price: 40, img: "https://source.unsplash.com/400x400/?mask" },
//   { id: 9, name: "Gloves", price: 55, img: "https://source.unsplash.com/400x400/?leather,gloves" },
//   { id: 10, name: "Harness", price: 150, img: "https://source.unsplash.com/400x400/?harness" },
// ];

// function Shop() {
//   const [cart, setCart] = useState([]);
//   const [showCheckout, setShowCheckout] = useState(false);
//   const [copied, setCopied] = useState(false);

//   // NEW: Shipping & Gift card states
//   const [shipping, setShipping] = useState("standard");
//   const [giftType, setGiftType] = useState("physical");
//   const [frontImage, setFrontImage] = useState(null);
//   const [backImage, setBackImage] = useState(null);

//   const addToCart = (product) => setCart([...cart, product]);
//   const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
//   const emptyCart = () => setCart([]);

//   // Calculate total with shipping
//   const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);
//   const shippingCost = shipping === "express" ? 20 : 10;
//   const total = cartTotal + (cart.length > 0 ? shippingCost : 0);

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const handleImageUpload = (e, setImage) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div className="max-w-[1200px] m-auto p-6 bg-white rounded-2xl shadow-lg">
//       <h1 className="text-4xl font-bold text-center text-pink-400 mb-10">
//         House of Satisfaction Shop
//       </h1>

//       {/* Cart Section */}
//       <div className="sticky top-0 bg-gray-100 p-4 rounded-xl shadow-md mb-8 z-20 max-w-[400px] mx-auto">
//         <h2 className="text-xl font-bold mb-3">Your Cart</h2>
//         {cart.length > 0 ? (
//           <>
//             <ul className="mb-3 max-h-[150px] overflow-y-auto text-sm">
//               {cart.map((item, index) => (
//                 <li key={index} className="flex justify-between items-center py-1 border-b">
//                   <span>{item.name}</span>
//                   <div className="flex items-center gap-2">
//                     <span>${item.price}</span>
//                     <button
//                       onClick={() => removeFromCart(index)}
//                       className="text-red-500 hover:text-red-700 text-xs"
//                     >
//                       ✕
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//             <h3 className="text-lg font-semibold">Subtotal: ${cartTotal}</h3>
//             <h3 className="text-sm text-gray-600">+ Shipping will be added at checkout</h3>

//             <div className="flex gap-2 mt-3">
//               <button
//                 onClick={() => setShowCheckout(true)}
//                 className="flex-1 bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 text-sm"
//               >
//                 Checkout
//               </button>
//               <button
//                 onClick={emptyCart}
//                 className="flex-1 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm"
//               >
//                 Empty Cart
//               </button>
//             </div>
//           </>
//         ) : (
//           <p className="text-gray-600 text-sm">Your cart is empty.</p>
//         )}
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="rounded-lg border p-4 hover:shadow-lg ease-in duration-200"
//           >
//             <img
//               src={product.img}
//               alt={product.name}
//               className="w-full h-40 object-cover rounded-md"
//             />
//             <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//             <p className="text-gray-600">${product.price}</p>
//             <button
//               onClick={() => addToCart(product)}
//               className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-3 hover:bg-pink-500"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Checkout Modal */}
//       {showCheckout && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl p-8 w-[90%] md:w-[500px] max-h-[90vh] overflow-y-auto shadow-lg relative">
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-900"
//               onClick={() => setShowCheckout(false)}
//             >
//               ✕
//             </button>

//             <h2 className="text-xl font-bold mb-3">Checkout</h2>
//             <p className="mb-3 text-md">Subtotal: ${cartTotal}</p>

//             {/* Shipping */}
//             <h3 className="text-lg font-semibold mb-2">Shipping Options:</h3>
//             <div className="space-y-2 mb-4 text-sm">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   value="standard"
//                   checked={shipping === "standard"}
//                   onChange={(e) => setShipping(e.target.value)}
//                 />
//                 Standard Shipping (+$10)
//               </label>
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   value="express"
//                   checked={shipping === "express"}
//                   onChange={(e) => setShipping(e.target.value)}
//                 />
//                 Express Shipping (+$20)
//               </label>
//             </div>

//             <p className="font-semibold mb-3">Total: ${total}</p>

//             {/* Payment Section */}
//             <h3 className="text-lg font-semibold mb-2">Payment Methods:</h3>
//             <div className="space-y-3 text-sm">
//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">PayPal</p>
//                 <button
//                   onClick={() => copyToClipboard("paypal.me/houseofsatisfaction")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy PayPal Address
//                 </button>
//               </div>

//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Bitcoin</p>
//                 <button
//                   onClick={() => copyToClipboard("1ABCDxyz123BitcoinAddress")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy Bitcoin Address
//                 </button>
//               </div>

//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Venmo</p>
//                 <button
//                   onClick={() => copyToClipboard("@HouseSatisfaction")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy Venmo Address
//                 </button>
//               </div>

//               {/* Apple Gift Card */}
//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Apple Gift Card</p>
//                 <div className="mt-2 space-y-2">
//                   {/* Physical */}
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       value="physical"
//                       checked={giftType === "physical"}
//                       onChange={(e) => setGiftType(e.target.value)}
//                     />
//                     Physical Card (Upload Front & Back)
//                   </label>
//                   {giftType === "physical" && (
//                     <div className="grid grid-cols-2 gap-3 mt-2">
//                       {/* Front */}
//                       <label className="border rounded-lg h-32 flex items-center justify-center cursor-pointer overflow-hidden">
//                         {frontImage ? (
//                           <img src={frontImage} alt="Front" className="h-full w-full object-cover" />
//                         ) : (
//                           <span className="text-gray-500 text-sm">Front</span>
//                         )}
//                         <input
//                           type="file"
//                           accept="image/*"
//                           className="hidden"
//                           onChange={(e) => handleImageUpload(e, setFrontImage)}
//                         />
//                       </label>
//                       {/* Back */}
//                       <label className="border rounded-lg h-32 flex items-center justify-center cursor-pointer overflow-hidden">
//                         {backImage ? (
//                           <img src={backImage} alt="Back" className="h-full w-full object-cover" />
//                         ) : (
//                           <span className="text-gray-500 text-sm">Back</span>
//                         )}
//                         <input
//                           type="file"
//                           accept="image/*"
//                           className="hidden"
//                           onChange={(e) => handleImageUpload(e, setBackImage)}
//                         />
//                       </label>
//                     </div>
//                   )}

//                   {/* E-code */}
//                   <label className="flex items-center gap-2 mt-3">
//                     <input
//                       type="radio"
//                       value="ecode"
//                       checked={giftType === "ecode"}
//                       onChange={(e) => setGiftType(e.target.value)}
//                     />
//                     E-code (Send via Email)
//                   </label>
//                   {giftType === "ecode" && (
//                     <div className="flex items-center gap-2 mt-2">
//                       <span className="text-sm">Send to: support@houseofsatisfaction.com</span>
//                       <button
//                         onClick={() => copyToClipboard("support@houseofsatisfaction.com")}
//                         className="bg-pink-400 text-white px-2 py-1 rounded-lg text-xs"
//                       >
//                         Copy
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Upload proof */}
//             <div className="mt-5">
//               <p className="font-semibold mb-2">Upload your payment proof:</p>
//               <input type="file" accept="image/*" className="mt-1" />
//             </div>

//             {copied && (
//               <p className="text-green-600 mt-3 text-sm">Copied to clipboard ✅</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Shop;






// import React, { useState } from "react";

// const products = [
//   { id: 1, name: "Leather Collar", price: 120, img: "https://source.unsplash.com/400x400/?leather,collar" },
//   { id: 2, name: "Whip", price: 90, img: "https://source.unsplash.com/400x400/?whip" },
//   { id: 3, name: "Handcuffs", price: 70, img: "https://source.unsplash.com/400x400/?handcuffs" },
//   { id: 4, name: "Blindfold", price: 50, img: "https://source.unsplash.com/400x400/?blindfold" },
//   { id: 5, name: "Rope", price: 60, img: "https://source.unsplash.com/400x400/?rope" },
//   { id: 6, name: "Gag Ball", price: 80, img: "https://source.unsplash.com/400x400/?gag,ball" },
//   { id: 7, name: "Ankle Restraints", price: 100, img: "https://source.unsplash.com/400x400/?restraints" },
//   { id: 8, name: "Mask", price: 40, img: "https://source.unsplash.com/400x400/?mask" },
//   { id: 9, name: "Gloves", price: 55, img: "https://source.unsplash.com/400x400/?leather,gloves" },
//   { id: 10, name: "Harness", price: 150, img: "https://source.unsplash.com/400x400/?harness" },
// ];

// function Shop() {
//   const [cart, setCart] = useState([]);
//   const [showCheckout, setShowCheckout] = useState(false);
//   const [copied, setCopied] = useState(false);

//   // NEW: Shipping & Gift card states
//   const [shipping, setShipping] = useState("standard");
//   const [giftType, setGiftType] = useState("physical");
//   const [frontImage, setFrontImage] = useState(null);
//   const [backImage, setBackImage] = useState(null);

//   const addToCart = (product) => setCart([...cart, product]);
//   const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
//   const emptyCart = () => setCart([]);

//   // Calculate total with shipping
//   const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);
//   const shippingCost = shipping === "express" ? 20 : 10;
//   const total = cartTotal + (cart.length > 0 ? shippingCost : 0);

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const handleImageUpload = (e, setImage) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div className="max-w-[1200px] m-auto p-6 bg-white rounded-2xl shadow-lg">
//       <h1 className="text-4xl font-bold text-center text-pink-400 mb-10">
//         House of Satisfaction Shop
//       </h1>

//       {/* Cart Section */}
//       <div className="sticky top-0 bg-gray-100 p-4 rounded-xl shadow-md mb-8 z-20 max-w-[400px] mx-auto">
//         <h2 className="text-xl font-bold mb-3">Your Cart</h2>
//         {cart.length > 0 ? (
//           <>
//             <ul className="mb-3 max-h-[150px] overflow-y-auto text-sm">
//               {cart.map((item, index) => (
//                 <li key={index} className="flex justify-between items-center py-1 border-b">
//                   <span>{item.name}</span>
//                   <div className="flex items-center gap-2">
//                     <span>${item.price}</span>
//                     <button
//                       onClick={() => removeFromCart(index)}
//                       className="text-red-500 hover:text-red-700 text-xs"
//                     >
//                       ✕
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//             <h3 className="text-lg font-semibold">Subtotal: ${cartTotal}</h3>
//             <h3 className="text-sm text-gray-600">+ Shipping will be added at checkout</h3>

//             <div className="flex gap-2 mt-3">
//               <button
//                 onClick={() => setShowCheckout(true)}
//                 className="flex-1 bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 text-sm"
//               >
//                 Checkout
//               </button>
//               <button
//                 onClick={emptyCart}
//                 className="flex-1 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm"
//               >
//                 Empty Cart
//               </button>
//             </div>
//           </>
//         ) : (
//           <p className="text-gray-600 text-sm">Your cart is empty.</p>
//         )}
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="rounded-lg border p-4 hover:shadow-lg ease-in duration-200"
//           >
//             <img
//               src={product.img}
//               alt={product.name}
//               className="w-full h-40 object-cover rounded-md"
//             />
//             <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//             <p className="text-gray-600">${product.price}</p>
//             <button
//               onClick={() => addToCart(product)}
//               className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-3 hover:bg-pink-500"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Checkout Modal */}
//       {showCheckout && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl p-8 w-[90%] md:w-[500px] max-h-[90vh] overflow-y-auto shadow-lg relative">
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-900"
//               onClick={() => setShowCheckout(false)}
//             >
//               ✕
//             </button>

//             <h2 className="text-xl font-bold mb-3">Checkout</h2>
//             <p className="mb-3 text-md">Subtotal: ${cartTotal}</p>

//             {/* Shipping Details */}
//             <h3 className="text-lg font-semibold mb-2">Shipping Details:</h3>
//             <div className="space-y-3 mb-4 text-sm">
//               <input type="text" placeholder="Full Name" className="w-full border rounded-lg p-2" />
//               <input type="email" placeholder="Email Address" className="w-full border rounded-lg p-2" />
//               <input type="text" placeholder="Phone Number" className="w-full border rounded-lg p-2" />
//               <input type="text" placeholder="Street Address" className="w-full border rounded-lg p-2" />
//               <div className="grid grid-cols-2 gap-3">
//                 <input type="text" placeholder="City" className="w-full border rounded-lg p-2" />
//                 <input type="text" placeholder="Postal Code" className="w-full border rounded-lg p-2" />
//               </div>
//               <input type="text" placeholder="Country" className="w-full border rounded-lg p-2" />
//             </div>

//             {/* Shipping Options */}
//             <h3 className="text-lg font-semibold mb-2">Shipping Options:</h3>
//             <div className="space-y-2 mb-4 text-sm">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   value="standard"
//                   checked={shipping === "standard"}
//                   onChange={(e) => setShipping(e.target.value)}
//                 />
//                 Standard Shipping (+$10)
//               </label>
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   value="express"
//                   checked={shipping === "express"}
//                   onChange={(e) => setShipping(e.target.value)}
//                 />
//                 Express Shipping (+$20)
//               </label>
//             </div>

//             <p className="font-semibold mb-3">Total: ${total}</p>

//             {/* Payment Section */}
//             <h3 className="text-lg font-semibold mb-2">Payment Methods:</h3>
//             <div className="space-y-3 text-sm">
//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">PayPal</p>
//                 <button
//                   onClick={() => copyToClipboard("paypal.me/houseofsatisfaction")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy PayPal Address
//                 </button>
//               </div>

//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Bitcoin</p>
//                 <button
//                   onClick={() => copyToClipboard("1ABCDxyz123BitcoinAddress")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy Bitcoin Address
//                 </button>
//               </div>

//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Venmo</p>
//                 <button
//                   onClick={() => copyToClipboard("@HouseSatisfaction")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy Venmo Address
//                 </button>
//               </div>

//               {/* Apple Gift Card */}
//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Apple Gift Card</p>
//                 <div className="mt-2 space-y-2">
//                   {/* Physical */}
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       value="physical"
//                       checked={giftType === "physical"}
//                       onChange={(e) => setGiftType(e.target.value)}
//                     />
//                     Physical Card (Upload Front & Back)
//                   </label>
//                   {giftType === "physical" && (
//                     <div className="grid grid-cols-2 gap-3 mt-2">
//                       {/* Front */}
//                       <label className="border rounded-lg h-32 flex items-center justify-center cursor-pointer overflow-hidden">
//                         {frontImage ? (
//                           <img src={frontImage} alt="Front" className="h-full w-full object-cover" />
//                         ) : (
//                           <span className="text-gray-500 text-sm">Front</span>
//                         )}
//                         <input
//                           type="file"
//                           accept="image/*"
//                           className="hidden"
//                           onChange={(e) => handleImageUpload(e, setFrontImage)}
//                         />
//                       </label>
//                       {/* Back */}
//                       <label className="border rounded-lg h-32 flex items-center justify-center cursor-pointer overflow-hidden">
//                         {backImage ? (
//                           <img src={backImage} alt="Back" className="h-full w-full object-cover" />
//                         ) : (
//                           <span className="text-gray-500 text-sm">Back</span>
//                         )}
//                         <input
//                           type="file"
//                           accept="image/*"
//                           className="hidden"
//                           onChange={(e) => handleImageUpload(e, setBackImage)}
//                         />
//                       </label>
//                     </div>
//                   )}

//                   {/* E-code */}
//                   <label className="flex items-center gap-2 mt-3">
//                     <input
//                       type="radio"
//                       value="ecode"
//                       checked={giftType === "ecode"}
//                       onChange={(e) => setGiftType(e.target.value)}
//                     />
//                     E-code (Send via Email)
//                   </label>
//                   {giftType === "ecode" && (
//                     <div className="flex items-center gap-2 mt-2">
//                       <span className="text-sm">Send to: support@houseofsatisfaction.com</span>
//                       <button
//                         onClick={() => copyToClipboard("support@houseofsatisfaction.com")}
//                         className="bg-pink-400 text-white px-2 py-1 rounded-lg text-xs"
//                       >
//                         Copy
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Upload proof */}
//             <div className="mt-5">
//               <p className="font-semibold mb-2">Upload your payment proof:</p>
//               <input type="file" accept="image/*" className="mt-1" />
//             </div>

//             {copied && (
//               <p className="text-green-600 mt-3 text-sm">Copied to clipboard ✅</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Shop;





// import React, { useState } from "react";

// const products = [
//   { id: 1, name: "Leather Collar", price: 120, img: "https://source.unsplash.com/400x400/?leather,collar" },
//   { id: 2, name: "Whip", price: 90, img: "https://source.unsplash.com/400x400/?whip" },
//   { id: 3, name: "Handcuffs", price: 70, img: "https://source.unsplash.com/400x400/?handcuffs" },
//   { id: 4, name: "Blindfold", price: 50, img: "https://source.unsplash.com/400x400/?blindfold" },
//   { id: 5, name: "Rope", price: 60, img: "https://source.unsplash.com/400x400/?rope" },
//   { id: 6, name: "Gag Ball", price: 80, img: "https://source.unsplash.com/400x400/?gag,ball" },
//   { id: 7, name: "Ankle Restraints", price: 100, img: "https://source.unsplash.com/400x400/?restraints" },
//   { id: 8, name: "Mask", price: 40, img: "https://source.unsplash.com/400x400/?mask" },
//   { id: 9, name: "Gloves", price: 55, img: "https://source.unsplash.com/400x400/?leather,gloves" },
//   { id: 10, name: "Harness", price: 150, img: "https://source.unsplash.com/400x400/?harness" },
// ];

// function Shop() {
//   const [cart, setCart] = useState([]);
//   const [showCheckout, setShowCheckout] = useState(false);
//   const [copied, setCopied] = useState(false);
//   const [receiptMessage, setReceiptMessage] = useState(""); // New state for verify receipt message

//   // Shipping & Gift card states
//   const [shipping, setShipping] = useState("standard");
//   const [giftType, setGiftType] = useState("physical");
//   const [frontImage, setFrontImage] = useState(null);
//   const [backImage, setBackImage] = useState(null);

//   const addToCart = (product) => setCart([...cart, product]);
//   const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
//   const emptyCart = () => setCart([]);

//   const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);
//   const shippingCost = shipping === "express" ? 20 : 10;
//   const total = cartTotal + (cart.length > 0 ? shippingCost : 0);

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const handleImageUpload = (e, setImage) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const handleVerifyReceipt = () => {
//     setReceiptMessage("Your payment will be verified and we will send you an email as soon as possible.");
//   };

//   return (
//     <div className="max-w-[1200px] m-auto p-6 bg-white rounded-2xl shadow-lg">
//       <h1 className="text-4xl font-bold text-center text-pink-400 mb-10">
//         House of Satisfaction Shop
//       </h1>

//       {/* Cart Section */}
//       <div className="sticky top-0 bg-gray-100 p-4 rounded-xl shadow-md mb-8 z-20 max-w-[400px] mx-auto">
//         <h2 className="text-xl font-bold mb-3">Your Cart</h2>
//         {cart.length > 0 ? (
//           <>
//             <ul className="mb-3 max-h-[150px] overflow-y-auto text-sm">
//               {cart.map((item, index) => (
//                 <li key={index} className="flex justify-between items-center py-1 border-b">
//                   <span>{item.name}</span>
//                   <div className="flex items-center gap-2">
//                     <span>${item.price}</span>
//                     <button
//                       onClick={() => removeFromCart(index)}
//                       className="text-red-500 hover:text-red-700 text-xs"
//                     >
//                       ✕
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//             <h3 className="text-lg font-semibold">Subtotal: ${cartTotal}</h3>
//             <h3 className="text-sm text-gray-600">+ Shipping will be added at checkout</h3>

//             <div className="flex gap-2 mt-3">
//               <button
//                 onClick={() => setShowCheckout(true)}
//                 className="flex-1 bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 text-sm"
//               >
//                 Checkout
//               </button>
//               <button
//                 onClick={emptyCart}
//                 className="flex-1 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm"
//               >
//                 Empty Cart
//               </button>
//             </div>
//           </>
//         ) : (
//           <p className="text-gray-600 text-sm">Your cart is empty.</p>
//         )}
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="rounded-lg border p-4 hover:shadow-lg ease-in duration-200"
//           >
//             <img
//               src={product.img}
//               alt={product.name}
//               className="w-full h-40 object-cover rounded-md"
//             />
//             <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//             <p className="text-gray-600">${product.price}</p>
//             <button
//               onClick={() => addToCart(product)}
//               className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-3 hover:bg-pink-500"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Checkout Modal */}
//       {showCheckout && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl p-8 w-[90%] md:w-[500px] max-h-[90vh] overflow-y-auto shadow-lg relative">
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-900"
//               onClick={() => setShowCheckout(false)}
//             >
//               ✕
//             </button>

//             <h2 className="text-xl font-bold mb-3">Checkout</h2>
//             <p className="mb-3 text-md">Subtotal: ${cartTotal}</p>

//             {/* Shipping Details */}
//             <h3 className="text-lg font-semibold mb-2">Shipping Details:</h3>
//             <div className="space-y-3 mb-4 text-sm">
//               <input type="text" placeholder="Full Name" className="w-full border rounded-lg p-2" />
//               <input type="email" placeholder="Email Address" className="w-full border rounded-lg p-2" />
//               <input type="text" placeholder="Phone Number" className="w-full border rounded-lg p-2" />
//               <input type="text" placeholder="Street Address" className="w-full border rounded-lg p-2" />
//               <div className="grid grid-cols-2 gap-3">
//                 <input type="text" placeholder="City" className="w-full border rounded-lg p-2" />
//                 <input type="text" placeholder="Postal Code" className="w-full border rounded-lg p-2" />
//               </div>
//               <input type="text" placeholder="Country" className="w-full border rounded-lg p-2" />
//             </div>

//             {/* Shipping Options */}
//             <h3 className="text-lg font-semibold mb-2">Shipping Options:</h3>
//             <div className="space-y-2 mb-4 text-sm">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   value="standard"
//                   checked={shipping === "standard"}
//                   onChange={(e) => setShipping(e.target.value)}
//                 />
//                 Standard Shipping (+$10)
//               </label>
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   value="express"
//                   checked={shipping === "express"}
//                   onChange={(e) => setShipping(e.target.value)}
//                 />
//                 Express Shipping (+$20)
//               </label>
//             </div>

//             <p className="font-semibold mb-3">Total: ${total}</p>

//             {/* Payment Section */}
//             <h3 className="text-lg font-semibold mb-2">Payment Methods:</h3>
//             <div className="space-y-3 text-sm">
//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">PayPal</p>
//                 <button
//                   onClick={() => copyToClipboard("paypal.me/houseofsatisfaction")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy PayPal Address
//                 </button>
//               </div>

//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Bitcoin</p>
//                 <button
//                   onClick={() => copyToClipboard("1ABCDxyz123BitcoinAddress")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy Bitcoin Address
//                 </button>
//               </div>

//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Venmo</p>
//                 <button
//                   onClick={() => copyToClipboard("@HouseSatisfaction")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy Venmo Address
//                 </button>
//               </div>

//               {/* Apple Gift Card */}
//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Apple Gift Card</p>
//                 <div className="mt-2 space-y-2">
//                   {/* Physical */}
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       value="physical"
//                       checked={giftType === "physical"}
//                       onChange={(e) => setGiftType(e.target.value)}
//                     />
//                     Physical Card (Upload Front & Back)
//                   </label>
//                   {giftType === "physical" && (
//                     <div className="grid grid-cols-2 gap-3 mt-2">
//                       <label className="border rounded-lg h-32 flex items-center justify-center cursor-pointer overflow-hidden">
//                         {frontImage ? (
//                           <img src={frontImage} alt="Front" className="h-full w-full object-cover" />
//                         ) : (
//                           <span className="text-gray-500 text-sm">Front</span>
//                         )}
//                         <input
//                           type="file"
//                           accept="image/*"
//                           className="hidden"
//                           onChange={(e) => handleImageUpload(e, setFrontImage)}
//                         />
//                       </label>
//                       <label className="border rounded-lg h-32 flex items-center justify-center cursor-pointer overflow-hidden">
//                         {backImage ? (
//                           <img src={backImage} alt="Back" className="h-full w-full object-cover" />
//                         ) : (
//                           <span className="text-gray-500 text-sm">Back</span>
//                         )}
//                         <input
//                           type="file"
//                           accept="image/*"
//                           className="hidden"
//                           onChange={(e) => handleImageUpload(e, setBackImage)}
//                         />
//                       </label>
//                     </div>
//                   )}

//                   {/* E-code */}
//                   <label className="flex items-center gap-2 mt-3">
//                     <input
//                       type="radio"
//                       value="ecode"
//                       checked={giftType === "ecode"}
//                       onChange={(e) => setGiftType(e.target.value)}
//                     />
//                     E-code (Send via Email)
//                   </label>
//                   {giftType === "ecode" && (
//                     <div className="flex items-center gap-2 mt-2">
//                       <span className="text-sm">Send to: support@houseofsatisfaction.com</span>
//                       <button
//                         onClick={() => copyToClipboard("support@houseofsatisfaction.com")}
//                         className="bg-pink-400 text-white px-2 py-1 rounded-lg text-xs"
//                       >
//                         Copy
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Upload proof */}
//             <div className="mt-5">
//               <p className="font-semibold mb-2">Upload your payment proof:</p>
//               <input type="file" accept="image/*" className="mt-1" />
//               <button
//                 onClick={handleVerifyReceipt}
//                 className="bg-blue-500 text-white px-3 py-1 rounded-lg mt-3 text-sm hover:bg-blue-600"
//               >
//                 Verify Receipt
//               </button>
//             </div>

//             {/* Receipt message */}
//             {receiptMessage && (
//               <p className="text-green-600 mt-3 text-sm">{receiptMessage}</p>
//             )}

//             {copied && (
//               <p className="text-green-600 mt-3 text-sm">Copied to clipboard ✅</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Shop;























// import React, { useState } from "react";

// const products = [
//   { id: 1, name: "Leather Collar", price: 120, img: "https://source.unsplash.com/400x400/?leather,collar" },
//   { id: 2, name: "Whip", price: 90, img: "https://source.unsplash.com/400x400/?whip" },
//   { id: 3, name: "Handcuffs", price: 70, img: "https://source.unsplash.com/400x400/?handcuffs" },
//   { id: 4, name: "Blindfold", price: 50, img: "https://source.unsplash.com/400x400/?blindfold" },
//   { id: 5, name: "Rope", price: 60, img: "https://source.unsplash.com/400x400/?rope" },
//   { id: 6, name: "Gag Ball", price: 80, img: "https://source.unsplash.com/400x400/?gag,ball" },
//   { id: 7, name: "Ankle Restraints", price: 100, img: "https://source.unsplash.com/400x400/?restraints" },
//   { id: 8, name: "Mask", price: 40, img: "https://source.unsplash.com/400x400/?mask" },
//   { id: 9, name: "Gloves", price: 55, img: "https://source.unsplash.com/400x400/?leather,gloves" },
//   { id: 10, name: "Harness", price: 150, img: "https://source.unsplash.com/400x400/?harness" },
// ];

// // Verification Component
// function VerificationMessage({ email }) {
//   return (
//     <div className="bg-green-100 text-green-800 p-6 rounded-2xl shadow-md text-center max-w-md m-auto mt-8">
//       <h2 className="text-xl font-bold mb-3">Payment Verification</h2>
//       <p>
//         Thank you! Your payment will be verified and a confirmation email will
//         be sent to <span className="font-semibold">{email}</span> as soon as possible.
//       </p>
//     </div>
//   );
// }

// function Shop() {
//   const [cart, setCart] = useState([]);
//   const [showCheckout, setShowCheckout] = useState(false);
//   const [copied, setCopied] = useState(false);

//   // NEW: Shipping & Gift card states
//   const [shipping, setShipping] = useState("standard");
//   const [giftType, setGiftType] = useState("physical");
//   const [frontImage, setFrontImage] = useState(null);
//   const [backImage, setBackImage] = useState(null);

//   // Shipping details state
//   const [shippingDetails, setShippingDetails] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     street: "",
//     city: "",
//     postal: "",
//     country: "",
//   });

//   const [showVerification, setShowVerification] = useState(false);

//   const addToCart = (product) => setCart([...cart, product]);
//   const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
//   const emptyCart = () => setCart([]);

//   // Calculate total with shipping
//   const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);
//   const shippingCost = shipping === "express" ? 20 : 10;
//   const total = cartTotal + (cart.length > 0 ? shippingCost : 0);

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const handleImageUpload = (e, setImage) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const handleShippingChange = (e) => {
//     setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
//   };

//   const handleVerifyReceipt = () => {
//     if (!shippingDetails.email) {
//       alert("Please enter your email in the shipping details!");
//       return;
//     }
//     setShowCheckout(false);
//     setShowVerification(true);
//   };

//   return (
//     <div className="max-w-[1200px] m-auto p-6 bg-white rounded-2xl shadow-lg">
//       <h1 className="text-4xl font-bold text-center text-pink-400 mb-10">
//         House of Satisfaction Shop
//       </h1>

//       {/* Cart Section */}
//       <div className="sticky top-0 bg-gray-100 p-4 rounded-xl shadow-md mb-8 z-20 max-w-[400px] mx-auto">
//         <h2 className="text-xl font-bold mb-3">Your Cart</h2>
//         {cart.length > 0 ? (
//           <>
//             <ul className="mb-3 max-h-[150px] overflow-y-auto text-sm">
//               {cart.map((item, index) => (
//                 <li key={index} className="flex justify-between items-center py-1 border-b">
//                   <span>{item.name}</span>
//                   <div className="flex items-center gap-2">
//                     <span>${item.price}</span>
//                     <button
//                       onClick={() => removeFromCart(index)}
//                       className="text-red-500 hover:text-red-700 text-xs"
//                     >
//                       ✕
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//             <h3 className="text-lg font-semibold">Subtotal: ${cartTotal}</h3>
//             <h3 className="text-sm text-gray-600">+ Shipping will be added at checkout</h3>

//             <div className="flex gap-2 mt-3">
//               <button
//                 onClick={() => setShowCheckout(true)}
//                 className="flex-1 bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 text-sm"
//               >
//                 Checkout
//               </button>
//               <button
//                 onClick={emptyCart}
//                 className="flex-1 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm"
//               >
//                 Empty Cart
//               </button>
//             </div>
//           </>
//         ) : (
//           <p className="text-gray-600 text-sm">Your cart is empty.</p>
//         )}
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="rounded-lg border p-4 hover:shadow-lg ease-in duration-200"
//           >
//             <img
//               src={product.img}
//               alt={product.name}
//               className="w-full h-40 object-cover rounded-md"
//             />
//             <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//             <p className="text-gray-600">${product.price}</p>
//             <button
//               onClick={() => addToCart(product)}
//               className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-3 hover:bg-pink-500"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Checkout Modal */}
//       {showCheckout && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl p-8 w-[90%] md:w-[500px] max-h-[90vh] overflow-y-auto shadow-lg relative">
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-900"
//               onClick={() => setShowCheckout(false)}
//             >
//               ✕
//             </button>

//             <h2 className="text-xl font-bold mb-3">Checkout</h2>
//             <p className="mb-3 text-md">Subtotal: ${cartTotal}</p>

//             {/* Shipping Details */}
//             <h3 className="text-lg font-semibold mb-2">Shipping Details:</h3>
//             <div className="space-y-3 mb-4 text-sm">
//               <input
//                 name="fullName"
//                 value={shippingDetails.fullName}
//                 onChange={handleShippingChange}
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full border rounded-lg p-2"
//               />
//               <input
//                 name="email"
//                 value={shippingDetails.email}
//                 onChange={handleShippingChange}
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full border rounded-lg p-2"
//               />
//               <input
//                 name="phone"
//                 value={shippingDetails.phone}
//                 onChange={handleShippingChange}
//                 type="text"
//                 placeholder="Phone Number"
//                 className="w-full border rounded-lg p-2"
//               />
//               <input
//                 name="street"
//                 value={shippingDetails.street}
//                 onChange={handleShippingChange}
//                 type="text"
//                 placeholder="Street Address"
//                 className="w-full border rounded-lg p-2"
//               />
//               <div className="grid grid-cols-2 gap-3">
//                 <input
//                   name="city"
//                   value={shippingDetails.city}
//                   onChange={handleShippingChange}
//                   type="text"
//                   placeholder="City"
//                   className="w-full border rounded-lg p-2"
//                 />
//                 <input
//                   name="postal"
//                   value={shippingDetails.postal}
//                   onChange={handleShippingChange}
//                   type="text"
//                   placeholder="Postal Code"
//                   className="w-full border rounded-lg p-2"
//                 />
//               </div>
//               <input
//                 name="country"
//                 value={shippingDetails.country}
//                 onChange={handleShippingChange}
//                 type="text"
//                 placeholder="Country"
//                 className="w-full border rounded-lg p-2"
//               />
//             </div>

//             {/* Shipping Options */}
//             <h3 className="text-lg font-semibold mb-2">Shipping Options:</h3>
//             <div className="space-y-2 mb-4 text-sm">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   value="standard"
//                   checked={shipping === "standard"}
//                   onChange={(e) => setShipping(e.target.value)}
//                 />
//                 Standard Shipping (+$10)
//               </label>
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   value="express"
//                   checked={shipping === "express"}
//                   onChange={(e) => setShipping(e.target.value)}
//                 />
//                 Express Shipping (+$20)
//               </label>
//             </div>

//             <p className="font-semibold mb-3">Total: ${total}</p>

//             {/* Payment Section */}
//             <h3 className="text-lg font-semibold mb-2">Payment Methods:</h3>
//             <div className="space-y-3 text-sm">
//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">PayPal</p>
//                 <button
//                   onClick={() => copyToClipboard("paypal.me/houseofsatisfaction")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy PayPal Address
//                 </button>
//               </div>

//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Bitcoin</p>
//                 <button
//                   onClick={() => copyToClipboard("1ABCDxyz123BitcoinAddress")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy Bitcoin Address
//                 </button>
//               </div>

//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Venmo</p>
//                 <button
//                   onClick={() => copyToClipboard("@HouseSatisfaction")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy Venmo Address
//                 </button>
//               </div>

//               {/* Apple Gift Card */}
//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Apple Gift Card</p>
//                 <div className="mt-2 space-y-2">
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       value="physical"
//                       checked={giftType === "physical"}
//                       onChange={(e) => setGiftType(e.target.value)}
//                     />
//                     Physical Card (Upload Front & Back)
//                   </label>
//                   {giftType === "physical" && (
//                     <div className="grid grid-cols-2 gap-3 mt-2">
//                       <label className="border rounded-lg h-32 flex items-center justify-center cursor-pointer overflow-hidden">
//                         {frontImage ? (
//                           <img src={frontImage} alt="Front" className="h-full w-full object-cover" />
//                         ) : (
//                           <span className="text-gray-500 text-sm">Front</span>
//                         )}
//                         <input
//                           type="file"
//                           accept="image/*"
//                           className="hidden"
//                           onChange={(e) => handleImageUpload(e, setFrontImage)}
//                         />
//                       </label>
//                       <label className="border rounded-lg h-32 flex items-center justify-center cursor-pointer overflow-hidden">
//                         {backImage ? (
//                           <img src={backImage} alt="Back" className="h-full w-full object-cover" />
//                         ) : (
//                           <span className="text-gray-500 text-sm">Back</span>
//                         )}
//                         <input
//                           type="file"
//                           accept="image/*"
//                           className="hidden"
//                           onChange={(e) => handleImageUpload(e, setBackImage)}
//                         />
//                       </label>
//                     </div>
//                   )}

//                   <label className="flex items-center gap-2 mt-3">
//                     <input
//                       type="radio"
//                       value="ecode"
//                       checked={giftType === "ecode"}
//                       onChange={(e) => setGiftType(e.target.value)}
//                     />
//                     E-code (Send via Email)
//                   </label>
//                 </div>
//               </div>
//             </div>

//             {/* Upload proof */}
//             <div className="mt-5">
//               <p className="font-semibold mb-2">Upload your payment proof:</p>
//               <input type="file" accept="image/*" className="mt-1" />
//             </div>

//             {/* Verify Receipt Button */}
//             <button
//               onClick={handleVerifyReceipt}
//               className="mt-5 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//             >
//               Verify Receipt
//             </button>

//             {copied && (
//               <p className="text-green-600 mt-3 text-sm">Copied to clipboard ✅</p>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Verification Message */}
//       {showVerification && <VerificationMessage email={shippingDetails.email} />}
//     </div>
//   );
// }

// export default Shop;






// import React, { useState, useEffect } from "react";

// const products = [
//   { id: 1, name: "Leather Collar", price: 120, img: "https://source.unsplash.com/400x400/?leather,collar" },
//   { id: 2, name: "Whip", price: 90, img: "https://source.unsplash.com/400x400/?whip" },
//   { id: 3, name: "Handcuffs", price: 70, img: "https://source.unsplash.com/400x400/?handcuffs" },
//   { id: 4, name: "Blindfold", price: 50, img: "https://source.unsplash.com/400x400/?blindfold" },
//   { id: 5, name: "Rope", price: 60, img: "https://source.unsplash.com/400x400/?rope" },
//   { id: 6, name: "Gag Ball", price: 80, img: "https://source.unsplash.com/400x400/?gag,ball" },
//   { id: 7, name: "Ankle Restraints", price: 100, img: "https://source.unsplash.com/400x400/?restraints" },
//   { id: 8, name: "Mask", price: 40, img: "https://source.unsplash.com/400x400/?mask" },
//   { id: 9, name: "Gloves", price: 55, img: "https://source.unsplash.com/400x400/?leather,gloves" },
//   { id: 10, name: "Harness", price: 150, img: "https://source.unsplash.com/400x400/?harness" },
// ];

// // Verification Component
// function VerificationMessage({ email, onClose }) {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onClose();
//     }, 7000); // fades out after 7 seconds
//     return () => clearTimeout(timer);
//   }, [onClose]);

//   return (
//     <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 p-4 rounded-xl shadow-md text-center max-w-lg z-50 transition-opacity duration-500">
//       <h2 className="text-lg font-bold mb-1">Payment Verification</h2>
//       <p className="text-sm">
//         Thank you! Your payment will be verified and a confirmation email will
//         be sent to <span className="font-semibold">{email}</span> as soon as possible.
//       </p>
//     </div>
//   );
// }

// function Shop() {
//   const [cart, setCart] = useState([]);
//   const [showCheckout, setShowCheckout] = useState(false);
//   const [copied, setCopied] = useState(false);

//   const [shipping, setShipping] = useState("standard");
//   const [giftType, setGiftType] = useState("physical");
//   const [frontImage, setFrontImage] = useState(null);
//   const [backImage, setBackImage] = useState(null);

//   const [shippingDetails, setShippingDetails] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     street: "",
//     city: "",
//     postal: "",
//     country: "",
//   });

//   const [paymentProof, setPaymentProof] = useState(null);
//   const [showVerification, setShowVerification] = useState(false);

//   const addToCart = (product) => setCart([...cart, product]);
//   const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
//   const emptyCart = () => setCart([]);

//   const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);
//   const shippingCost = shipping === "express" ? 20 : 10;
//   const total = cartTotal + (cart.length > 0 ? shippingCost : 0);

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const handleImageUpload = (e, setImage) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const handleShippingChange = (e) => {
//     setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
//   };

//   const handlePaymentProofUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) setPaymentProof(file);
//   };

//   const handleVerifyReceipt = () => {
//     if (!shippingDetails.email) {
//       alert("Please enter your email in the shipping details!");
//       return;
//     }
//     if (!paymentProof) {
//       alert("Please upload your payment proof!");
//       return;
//     }
//     setShowCheckout(false);
//     setShowVerification(true);
//   };

//   return (
//     <div className="max-w-[1200px] m-auto p-6 bg-white rounded-2xl shadow-lg relative">
//       {/* Verification Message */}
//       {showVerification && (
//         <VerificationMessage
//           email={shippingDetails.email}
//           onClose={() => setShowVerification(false)}
//         />
//       )}

//       <h1 className="text-4xl font-bold text-center text-pink-400 mb-10">
//         House of Satisfaction Shop
//       </h1>

//       {/* Cart Section */}
//       <div className="sticky top-0 bg-gray-100 p-4 rounded-xl shadow-md mb-8 z-20 max-w-[400px] mx-auto">
//         <h2 className="text-xl font-bold mb-3">Your Cart</h2>
//         {cart.length > 0 ? (
//           <>
//             <ul className="mb-3 max-h-[150px] overflow-y-auto text-sm">
//               {cart.map((item, index) => (
//                 <li key={index} className="flex justify-between items-center py-1 border-b">
//                   <span>{item.name}</span>
//                   <div className="flex items-center gap-2">
//                     <span>${item.price}</span>
//                     <button
//                       onClick={() => removeFromCart(index)}
//                       className="text-red-500 hover:text-red-700 text-xs"
//                     >
//                       ✕
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//             <h3 className="text-lg font-semibold">Subtotal: ${cartTotal}</h3>
//             <h3 className="text-sm text-gray-600">+ Shipping will be added at checkout</h3>

//             <div className="flex gap-2 mt-3">
//               <button
//                 onClick={() => setShowCheckout(true)}
//                 className="flex-1 bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 text-sm"
//               >
//                 Checkout
//               </button>
//               <button
//                 onClick={emptyCart}
//                 className="flex-1 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm"
//               >
//                 Empty Cart
//               </button>
//             </div>
//           </>
//         ) : (
//           <p className="text-gray-600 text-sm">Your cart is empty.</p>
//         )}
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="rounded-lg border p-4 hover:shadow-lg ease-in duration-200"
//           >
//             <img
//               src={product.img}
//               alt={product.name}
//               className="w-full h-40 object-cover rounded-md"
//             />
//             <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//             <p className="text-gray-600">${product.price}</p>
//             <button
//               onClick={() => addToCart(product)}
//               className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-3 hover:bg-pink-500"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Checkout Modal */}
//       {showCheckout && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl p-8 w-[90%] md:w-[500px] max-h-[90vh] overflow-y-auto shadow-lg relative">
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-900"
//               onClick={() => setShowCheckout(false)}
//             >
//               ✕
//             </button>

//             <h2 className="text-xl font-bold mb-3">Checkout</h2>
//             <p className="mb-3 text-md">Subtotal: ${cartTotal}</p>

//             {/* Shipping Details */}
//             <h3 className="text-lg font-semibold mb-2">Shipping Details:</h3>
//             <div className="space-y-3 mb-4 text-sm">
//               <input
//                 name="fullName"
//                 value={shippingDetails.fullName}
//                 onChange={handleShippingChange}
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full border rounded-lg p-2"
//               />
//               <input
//                 name="email"
//                 value={shippingDetails.email}
//                 onChange={handleShippingChange}
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full border rounded-lg p-2"
//               />
//               <input
//                 name="phone"
//                 value={shippingDetails.phone}
//                 onChange={handleShippingChange}
//                 type="text"
//                 placeholder="Phone Number"
//                 className="w-full border rounded-lg p-2"
//               />
//               <input
//                 name="street"
//                 value={shippingDetails.street}
//                 onChange={handleShippingChange}
//                 type="text"
//                 placeholder="Street Address"
//                 className="w-full border rounded-lg p-2"
//               />
//               <div className="grid grid-cols-2 gap-3">
//                 <input
//                   name="city"
//                   value={shippingDetails.city}
//                   onChange={handleShippingChange}
//                   type="text"
//                   placeholder="City"
//                   className="w-full border rounded-lg p-2"
//                 />
//                 <input
//                   name="postal"
//                   value={shippingDetails.postal}
//                   onChange={handleShippingChange}
//                   type="text"
//                   placeholder="Postal Code"
//                   className="w-full border rounded-lg p-2"
//                 />
//               </div>
//               <input
//                 name="country"
//                 value={shippingDetails.country}
//                 onChange={handleShippingChange}
//                 type="text"
//                 placeholder="Country"
//                 className="w-full border rounded-lg p-2"
//               />
//             </div>

//             {/* Shipping Options */}
//             <h3 className="text-lg font-semibold mb-2">Shipping Options:</h3>
//             <div className="space-y-2 mb-4 text-sm">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   value="standard"
//                   checked={shipping === "standard"}
//                   onChange={(e) => setShipping(e.target.value)}
//                 />
//                 Standard Shipping (+$10)
//               </label>
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   value="express"
//                   checked={shipping === "express"}
//                   onChange={(e) => setShipping(e.target.value)}
//                 />
//                 Express Shipping (+$20)
//               </label>
//             </div>

//             <p className="font-semibold mb-3">Total: ${total}</p>

//             {/* Payment Section */}
//             <h3 className="text-lg font-semibold mb-2">Payment Methods:</h3>
//             <div className="space-y-3 text-sm">
//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">PayPal</p>
//                 <button
//                   onClick={() => copyToClipboard("paypal.me/houseofsatisfaction")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy PayPal Address
//                 </button>
//               </div>

//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Bitcoin</p>
//                 <button
//                   onClick={() => copyToClipboard("1ABCDxyz123BitcoinAddress")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy Bitcoin Address
//                 </button>
//               </div>

//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Venmo</p>
//                 <button
//                   onClick={() => copyToClipboard("@HouseSatisfaction")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy Venmo Address
//                 </button>
//               </div>

//               {/* Apple Gift Card */}
//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Apple Gift Card</p>
//                 <div className="mt-2 space-y-2">
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       value="physical"
//                       checked={giftType === "physical"}
//                       onChange={(e) => setGiftType(e.target.value)}
//                     />
//                     Physical Card (Upload Front & Back)
//                   </label>
//                   {giftType === "physical" && (
//                     <div className="grid grid-cols-2 gap-3 mt-2">
//                       <label className="border rounded-lg h-32 flex items-center justify-center cursor-pointer overflow-hidden">
//                         {frontImage ? (
//                           <img src={frontImage} alt="Front" className="h-full w-full object-cover" />
//                         ) : (
//                           <span className="text-gray-500 text-sm">Front</span>
//                         )}
//                         <input
//                           type="file"
//                           accept="image/*"
//                           className="hidden"
//                           onChange={(e) => handleImageUpload(e, setFrontImage)}
//                         />
//                       </label>
//                       <label className="border rounded-lg h-32 flex items-center justify-center cursor-pointer overflow-hidden">
//                         {backImage ? (
//                           <img src={backImage} alt="Back" className="h-full w-full object-cover" />
//                         ) : (
//                           <span className="text-gray-500 text-sm">Back</span>
//                         )}
//                         <input
//                           type="file"
//                           accept="image/*"
//                           className="hidden"
//                           onChange={(e) => handleImageUpload(e, setBackImage)}
//                         />
//                       </label>
//                     </div>
//                   )}

//                   <label className="flex items-center gap-2 mt-3">
//                     <input
//                       type="radio"
//                       value="ecode"
//                       checked={giftType === "ecode"}
//                       onChange={(e) => setGiftType(e.target.value)}
//                     />
//                     E-code (Send via Email)
//                   </label>
//                 </div>
//               </div>
//             </div>

//             {/* Upload payment proof */}
//             <div className="mt-5">
//               <p className="font-semibold mb-2">Upload your payment proof:</p>
//               <input type="file" accept="image/*" className="mt-1" onChange={handlePaymentProofUpload} />
//             </div>

//             {/* Verify Receipt Button */}
//             <button
//               onClick={handleVerifyReceipt}
//               className="mt-5 w-full bg-pink-400 text-white py-2 rounded-lg hover:bg-pink-500"
//             >
//               Verify Receipt
//             </button>

//             {copied && (
//               <p className="text-green-600 mt-3 text-sm">Copied to clipboard ✅</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Shop;






















// import React, { useState, useEffect } from "react";

// const products = [
//   { id: 1, name: "Leather Collar", price: 120, img: "https://source.unsplash.com/400x400/?leather,collar" },
//   { id: 2, name: "Whip", price: 90, img: "https://source.unsplash.com/400x400/?whip" },
//   { id: 3, name: "Handcuffs", price: 70, img: "https://source.unsplash.com/400x400/?handcuffs" },
//   { id: 4, name: "Blindfold", price: 50, img: "https://source.unsplash.com/400x400/?blindfold" },
//   { id: 5, name: "Rope", price: 60, img: "https://source.unsplash.com/400x400/?rope" },
//   { id: 6, name: "Gag Ball", price: 80, img: "https://source.unsplash.com/400x400/?gag,ball" },
//   { id: 7, name: "Ankle Restraints", price: 100, img: "https://source.unsplash.com/400x400/?restraints" },
//   { id: 8, name: "Mask", price: 40, img: "https://source.unsplash.com/400x400/?mask" },
//   { id: 9, name: "Gloves", price: 55, img: "https://source.unsplash.com/400x400/?leather,gloves" },
//   { id: 10, name: "Harness", price: 150, img: "https://source.unsplash.com/400x400/?harness" },
// ];

// // Verification Component with smooth fade-out
// function VerificationMessage({ email, onClose }) {
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     // Start fade-out after 4 seconds
//     const timer = setTimeout(() => setVisible(false), 4000);
//     // Remove component after fade-out duration
//     const removeTimer = setTimeout(() => onClose(), 4500);
//     return () => {
//       clearTimeout(timer);
//       clearTimeout(removeTimer);
//     };
//   }, [onClose]);

//   return (
//     <div
//       className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 p-4 rounded-xl shadow-md text-center max-w-lg z-50 transition-opacity duration-500 ${
//         visible ? "opacity-100" : "opacity-0"
//       }`}
//     >
//       <h2 className="text-lg font-bold mb-1">Payment Verification</h2>
//       <p className="text-sm">
//         Thank you! Your payment will be verified and a confirmation email will
//         be sent to <span className="font-semibold">{email}</span> as soon as possible.
//       </p>
//     </div>
//   );
// }

// function Shop() {
//   const [cart, setCart] = useState([]);
//   const [showCheckout, setShowCheckout] = useState(false);
//   const [copied, setCopied] = useState(false);

//   const [shipping, setShipping] = useState("standard");
//   const [giftType, setGiftType] = useState("physical");
//   const [frontImage, setFrontImage] = useState(null);
//   const [backImage, setBackImage] = useState(null);

//   const [shippingDetails, setShippingDetails] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     street: "",
//     city: "",
//     postal: "",
//     country: "",
//   });

//   const [paymentProof, setPaymentProof] = useState(null);
//   const [showVerification, setShowVerification] = useState(false);

//   const addToCart = (product) => setCart([...cart, product]);
//   const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
//   const emptyCart = () => setCart([]);

//   const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);
//   const shippingCost = shipping === "express" ? 20 : 10;
//   const total = cartTotal + (cart.length > 0 ? shippingCost : 0);

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const handleImageUpload = (e, setImage) => {
//     const file = e.target.files[0];
//     if (file) setImage(URL.createObjectURL(file));
//   };

//   const handleShippingChange = (e) => {
//     setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
//   };

//   const handlePaymentProofUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) setPaymentProof(file);
//   };

//   const handleVerifyReceipt = () => {
//     if (!shippingDetails.email) {
//       alert("Please enter your email in the shipping details!");
//       return;
//     }
//     if (!paymentProof) {
//       alert("Please upload your payment proof!");
//       return;
//     }
//     setShowCheckout(false);
//     setShowVerification(true);
//   };

//   return (
//     <div className="max-w-[1200px] m-auto p-6 bg-white rounded-2xl shadow-lg relative">
//       {/* Verification Message */}
//       {showVerification && (
//         <VerificationMessage
//           email={shippingDetails.email}
//           onClose={() => setShowVerification(false)}
//         />
//       )}

//       <h1 className="text-4xl font-bold text-center text-pink-400 mb-10">
//         House of Satisfaction Shop
//       </h1>

//       {/* Cart Section */}
//       <div className="sticky top-0 bg-gray-100 p-4 rounded-xl shadow-md mb-8 z-20 max-w-[400px] mx-auto">
//         <h2 className="text-xl font-bold mb-3">Your Cart</h2>
//         {cart.length > 0 ? (
//           <>
//             <ul className="mb-3 max-h-[150px] overflow-y-auto text-sm">
//               {cart.map((item, index) => (
//                 <li key={index} className="flex justify-between items-center py-1 border-b">
//                   <span>{item.name}</span>
//                   <div className="flex items-center gap-2">
//                     <span>${item.price}</span>
//                     <button
//                       onClick={() => removeFromCart(index)}
//                       className="text-red-500 hover:text-red-700 text-xs"
//                     >
//                       ✕
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//             <h3 className="text-lg font-semibold">Subtotal: ${cartTotal}</h3>
//             <h3 className="text-sm text-gray-600">+ Shipping will be added at checkout</h3>

//             <div className="flex gap-2 mt-3">
//               <button
//                 onClick={() => setShowCheckout(true)}
//                 className="flex-1 bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 text-sm"
//               >
//                 Checkout
//               </button>
//               <button
//                 onClick={emptyCart}
//                 className="flex-1 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm"
//               >
//                 Empty Cart
//               </button>
//             </div>
//           </>
//         ) : (
//           <p className="text-gray-600 text-sm">Your cart is empty.</p>
//         )}
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="rounded-lg border p-4 hover:shadow-lg ease-in duration-200"
//           >
//             <img
//               src={product.img}
//               alt={product.name}
//               className="w-full h-40 object-cover rounded-md"
//             />
//             <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//             <p className="text-gray-600">${product.price}</p>
//             <button
//               onClick={() => addToCart(product)}
//               className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-3 hover:bg-pink-500"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Checkout Modal */}
//       {showCheckout && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl p-8 w-[90%] md:w-[500px] max-h-[90vh] overflow-y-auto shadow-lg relative">
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-900"
//               onClick={() => setShowCheckout(false)}
//             >
//               ✕
//             </button>

//             <h2 className="text-xl font-bold mb-3">Checkout</h2>
//             <p className="mb-3 text-md">Subtotal: ${cartTotal}</p>

//             {/* Shipping Details */}
//             <h3 className="text-lg font-semibold mb-2">Shipping Details:</h3>
//             <div className="space-y-3 mb-4 text-sm">
//               <input
//                 name="fullName"
//                 value={shippingDetails.fullName}
//                 onChange={handleShippingChange}
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full border rounded-lg p-2"
//               />
//               <input
//                 name="email"
//                 value={shippingDetails.email}
//                 onChange={handleShippingChange}
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full border rounded-lg p-2"
//               />
//               <input
//                 name="phone"
//                 value={shippingDetails.phone}
//                 onChange={handleShippingChange}
//                 type="text"
//                 placeholder="Phone Number"
//                 className="w-full border rounded-lg p-2"
//               />
//               <input
//                 name="street"
//                 value={shippingDetails.street}
//                 onChange={handleShippingChange}
//                 type="text"
//                 placeholder="Street Address"
//                 className="w-full border rounded-lg p-2"
//               />
//               <div className="grid grid-cols-2 gap-3">
//                 <input
//                   name="city"
//                   value={shippingDetails.city}
//                   onChange={handleShippingChange}
//                   type="text"
//                   placeholder="City"
//                   className="w-full border rounded-lg p-2"
//                 />
//                 <input
//                   name="postal"
//                   value={shippingDetails.postal}
//                   onChange={handleShippingChange}
//                   type="text"
//                   placeholder="Postal Code"
//                   className="w-full border rounded-lg p-2"
//                 />
//               </div>
//               <input
//                 name="country"
//                 value={shippingDetails.country}
//                 onChange={handleShippingChange}
//                 type="text"
//                 placeholder="Country"
//                 className="w-full border rounded-lg p-2"
//               />
//             </div>

//             {/* Shipping Options */}
//             <h3 className="text-lg font-semibold mb-2">Shipping Options:</h3>
//             <div className="space-y-2 mb-4 text-sm">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   value="standard"
//                   checked={shipping === "standard"}
//                   onChange={(e) => setShipping(e.target.value)}
//                 />
//                 Standard Shipping (+$10)
//               </label>
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   value="express"
//                   checked={shipping === "express"}
//                   onChange={(e) => setShipping(e.target.value)}
//                 />
//                 Express Shipping (+$20)
//               </label>
//             </div>

//             <p className="font-semibold mb-3">Total: ${total}</p>

//             {/* Payment Section */}
//             <h3 className="text-lg font-semibold mb-2">Payment Methods:</h3>
//             <div className="space-y-3 text-sm">
//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">PayPal</p>
//                 <button
//                   onClick={() => copyToClipboard("paypal.me/houseofsatisfaction")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy PayPal Address
//                 </button>
//               </div>

//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Bitcoin</p>
//                 <button
//                   onClick={() => copyToClipboard("1ABCDxyz123BitcoinAddress")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy Bitcoin Address
//                 </button>
//               </div>

//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Venmo</p>
//                 <button
//                   onClick={() => copyToClipboard("@HouseSatisfaction")}
//                   className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
//                 >
//                   Copy Venmo Address
//                 </button>
//               </div>

//               {/* Apple Gift Card */}
//               <div className="border rounded-lg p-3">
//                 <p className="font-bold">Apple Gift Card</p>
//                 <div className="mt-2 space-y-2">
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       value="physical"
//                       checked={giftType === "physical"}
//                       onChange={(e) => setGiftType(e.target.value)}
//                     />
//                     Physical Card (Upload Front & Back)
//                   </label>
//                   {giftType === "physical" && (
//                     <div className="grid grid-cols-2 gap-3 mt-2">
//                       <label className="border rounded-lg h-32 flex items-center justify-center cursor-pointer overflow-hidden">
//                         {frontImage ? (
//                           <img src={frontImage} alt="Front" className="h-full w-full object-cover" />
//                         ) : (
//                           <span className="text-gray-500 text-sm">Front</span>
//                         )}
//                         <input
//                           type="file"
//                           accept="image/*"
//                           className="hidden"
//                           onChange={(e) => handleImageUpload(e, setFrontImage)}
//                         />
//                       </label>
//                       <label className="border rounded-lg h-32 flex items-center justify-center cursor-pointer overflow-hidden">
//                         {backImage ? (
//                           <img src={backImage} alt="Back" className="h-full w-full object-cover" />
//                         ) : (
//                           <span className="text-gray-500 text-sm">Back</span>
//                         )}
//                         <input
//                           type="file"
//                           accept="image/*"
//                           className="hidden"
//                           onChange={(e) => handleImageUpload(e, setBackImage)}
//                         />
//                       </label>
//                     </div>
//                   )}

//                   <label className="flex items-center gap-2 mt-3">
//                     <input
//                       type="radio"
//                       value="ecode"
//                       checked={giftType === "ecode"}
//                       onChange={(e) => setGiftType(e.target.value)}
//                     />
//                     E-code (Send via Email)
//                   </label>
//                 </div>
//               </div>
//             </div>

//             {/* Upload payment proof */}
//             <div className="mt-5">
//               <p className="font-semibold mb-2">Upload your payment proof:</p>
//               <input type="file" accept="image/*" className="mt-1" onChange={handlePaymentProofUpload} />
//             </div>

//             {/* Verify Receipt Button */}
//             <button
//               onClick={handleVerifyReceipt}
//               className="mt-5 w-full bg-pink-400 text-white py-2 rounded-lg hover:bg-pink-500"
//             >
//               Verify Receipt
//             </button>

//             {copied && (
//               <p className="text-green-600 mt-3 text-sm">Copied to clipboard ✅</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Shop;











import React, { useState, useEffect } from "react";

const products = [
  { id: 1, name: "Leather Collar", price: 120, img: "https://source.unsplash.com/400x400/?leather,collar" },
  { id: 2, name: "Whip", price: 90, img: "https://source.unsplash.com/400x400/?whip" },
  { id: 3, name: "Handcuffs", price: 70, img: "https://source.unsplash.com/400x400/?handcuffs" },
  { id: 4, name: "Blindfold", price: 50, img: "https://source.unsplash.com/400x400/?blindfold" },
  { id: 5, name: "Rope", price: 60, img: "https://source.unsplash.com/400x400/?rope" },
  { id: 6, name: "Gag Ball", price: 80, img: "https://source.unsplash.com/400x400/?gag,ball" },
  { id: 7, name: "Ankle Restraints", price: 100, img: "https://source.unsplash.com/400x400/?restraints" },
  { id: 8, name: "Mask", price: 40, img: "https://source.unsplash.com/400x400/?mask" },
  { id: 9, name: "Gloves", price: 55, img: "https://source.unsplash.com/400x400/?leather,gloves" },
  { id: 10, name: "Harness", price: 150, img: "https://source.unsplash.com/400x400/?harness" },
];

// Verification Component with smooth fade-out
function VerificationMessage({ email, onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Start fade-out after 4 seconds
    const timer = setTimeout(() => setVisible(false), 4000);
    // Remove component after fade-out duration
    const removeTimer = setTimeout(() => onClose(), 4500);
    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 p-4 rounded-xl shadow-md text-center max-w-lg z-50 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-lg font-bold mb-1">Payment Verification</h2>
      <p className="text-sm">
        Thank you! Your payment will be verified and a confirmation email will
        be sent to <span className="font-semibold">{email}</span> as soon as possible.
      </p>
    </div>
  );
}

function Shop() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [copied, setCopied] = useState(false);

  const [shipping, setShipping] = useState("standard");
  const [giftType, setGiftType] = useState("physical");
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);

  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    postal: "",
    country: "",
  });

  const [paymentProof, setPaymentProof] = useState(null);
  const [showVerification, setShowVerification] = useState(false);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
  const emptyCart = () => setCart([]);

  const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);
  const shippingCost = shipping === "express" ? 20 : 10;
  const total = cartTotal + (cart.length > 0 ? shippingCost : 0);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleImageUpload = (e, setImage) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleShippingChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };

  const handlePaymentProofUpload = (e) => {
    const file = e.target.files[0];
    if (file) setPaymentProof(file);
  };

  const handleVerifyReceipt = () => {
    if (!shippingDetails.email) {
      alert("Please enter your email in the shipping details!");
      return;
    }
    if (!paymentProof) {
      alert("Please upload your payment proof!");
      return;
    }
    setShowCheckout(false);
    setShowVerification(true);
  };

  return (
    <div className="max-w-[1200px] m-auto p-6 bg-white rounded-2xl shadow-lg relative">
      {/* Verification Message */}
      {showVerification && (
        <VerificationMessage
          email={shippingDetails.email}
          onClose={() => setShowVerification(false)}
        />
      )}

      <h1 className="text-4xl font-bold text-center text-pink-400 mb-10">
        House of Satisfaction Shop
      </h1>

      {/* Cart Section */}
      <div className="sticky top-0 bg-gray-100 p-4 rounded-xl shadow-md mb-8 z-20 max-w-[400px] mx-auto">
        <h2 className="text-xl font-bold mb-3">Your Cart</h2>
        {cart.length > 0 ? (
          <>
            <ul className="mb-3 max-h-[150px] overflow-y-auto text-sm">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center py-1 border-b">
                  <span>{item.name}</span>
                  <div className="flex items-center gap-2">
                    <span>${item.price}</span>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 hover:text-red-700 text-xs"
                    >
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold">Subtotal: ${cartTotal}</h3>
            <h3 className="text-sm text-gray-600">+ Shipping will be added at checkout</h3>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => setShowCheckout(true)}
                className="flex-1 bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 text-sm"
              >
                Checkout
              </button>
              <button
                onClick={emptyCart}
                className="flex-1 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm"
              >
                Empty Cart
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-600 text-sm">Your cart is empty.</p>
        )}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg border p-4 hover:shadow-lg ease-in duration-200"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-3 hover:bg-pink-500"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-[90%] md:w-[500px] max-h-[90vh] overflow-y-auto shadow-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-900"
              onClick={() => setShowCheckout(false)}
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-3">Checkout</h2>
            <p className="mb-3 text-md">Subtotal: ${cartTotal}</p>

            {/* Shipping Details */}
              <form
              action="https://getform.io/f/775b6658-71af-430d-acb3-f17a1be33927"
              method="POST"
              className="text-gray-700"
              encType="multipart/form-data"
              >
            <h3 className="text-lg font-semibold mb-2">Shipping Details:</h3>
            <div className="space-y-3 mb-4 text-sm">
              <input
                name="fullName"
                value={shippingDetails.fullName}
                onChange={handleShippingChange}
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg p-2"
              />
              <input
                name="email"
                value={shippingDetails.email}
                onChange={handleShippingChange}
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg p-2"
              />
              <input
                name="phone"
                value={shippingDetails.phone}
                onChange={handleShippingChange}
                type="text"
                placeholder="Phone Number"
                className="w-full border rounded-lg p-2"
              />
              <input
                name="street"
                value={shippingDetails.street}
                onChange={handleShippingChange}
                type="text"
                placeholder="Street Address"
                className="w-full border rounded-lg p-2"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  name="city"
                  value={shippingDetails.city}
                  onChange={handleShippingChange}
                  type="text"
                  placeholder="City"
                  className="w-full border rounded-lg p-2"
                />
                <input
                  name="postal"
                  value={shippingDetails.postal}
                  onChange={handleShippingChange}
                  type="text"
                  placeholder="Postal Code"
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <input
                name="country"
                value={shippingDetails.country}
                onChange={handleShippingChange}
                type="text"
                placeholder="Country"
                className="w-full border rounded-lg p-2"
              />
            </div>

            {/* Shipping Options */}
            <h3 className="text-lg font-semibold mb-2">Shipping Options:</h3>
            <div className="space-y-2 mb-4 text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="standard"
                  checked={shipping === "standard"}
                  onChange={(e) => setShipping(e.target.value)}
                />
                Standard Shipping (+$10)
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="express"
                  checked={shipping === "express"}
                  onChange={(e) => setShipping(e.target.value)}
                />
                Express Shipping (+$20)
              </label>
            </div>

            <p className="font-semibold mb-3">Total: ${total}</p>

            {/* Payment Section */}
            <h3 className="text-lg font-semibold mb-2">Payment Methods:</h3>
            <div className="space-y-3 text-sm">
              <div className="border rounded-lg p-3">
                <p className="font-bold">PayPal</p>
                <button
                  onClick={() => copyToClipboard("paypal.me/houseofsatisfaction")}
                  className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
                >
                  Copy PayPal Address
                </button>
              </div>

              <div className="border rounded-lg p-3">
                <p className="font-bold">Bitcoin</p>
                <button
                  onClick={() => copyToClipboard("1ABCDxyz123BitcoinAddress")}
                  className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
                >
                  Copy Bitcoin Address
                </button>
              </div>

              <div className="border rounded-lg p-3">
                <p className="font-bold">Venmo</p>
                <button
                  onClick={() => copyToClipboard("@HouseSatisfaction")}
                  className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
                >
                  Copy Venmo Address
                </button>
              </div>

              {/* Apple Gift Card */}
              <div className="border rounded-lg p-3">
                <p className="font-bold">Apple Gift Card</p>
                <div className="mt-2 space-y-2">
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
                          <img src={frontImage} alt="Front" className="h-full w-full object-cover" />
                        ) : (
                          <span className="text-gray-500 text-sm">Front</span>
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(e, setFrontImage)}
                        />
                      </label>
                      <label className="border rounded-lg h-32 flex items-center justify-center cursor-pointer overflow-hidden">
                        {backImage ? (
                          <img src={backImage} alt="Back" className="h-full w-full object-cover" />
                        ) : (
                          <span className="text-gray-500 text-sm">Back</span>
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(e, setBackImage)}
                        />
                      </label>
                    </div>
                  )}

                  <label className="flex items-center gap-2 mt-3">
                    <input
                      type="radio"
                      value="ecode"
                      checked={giftType === "ecode"}
                      onChange={(e) => setGiftType(e.target.value)}
                    />
                    E-code (Send via Email)
                  </label>

                  {/* Copy Email Button for E-code */}
                  {giftType === "ecode" && (
                    <button
                      onClick={() => copyToClipboard(shippingDetails.email || "No email provided")}
                      className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm"
                    >
                      Copy Email Address
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Upload payment proof */}
            <div className="mt-5">
              <p className="font-semibold mb-2">Upload your payment proof:</p>
              <input type="file" accept="image/*" className="mt-1" onChange={handlePaymentProofUpload} />
            </div>

            {/* Verify Receipt Button */}
            <button
              onClick={handleVerifyReceipt}
              className="mt-5 w-full bg-pink-400 text-white py-2 rounded-lg hover:bg-pink-500"
              type="submit"
            >
              Verify Receipt
            </button>
                    </form>
            {copied && (
              <p className="text-green-600 mt-3 text-sm">Copied to clipboard ✅</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;











// import React, { useState, useEffect } from "react";

// const products = [
//   { id: 1, name: "Leather Collar", price: 120, img: "https://source.unsplash.com/400x400/?leather,collar" },
//   { id: 2, name: "Whip", price: 90, img: "https://source.unsplash.com/400x400/?whip" },
//   { id: 3, name: "Handcuffs", price: 70, img: "https://source.unsplash.com/400x400/?handcuffs" },
//   { id: 4, name: "Blindfold", price: 50, img: "https://source.unsplash.com/400x400/?blindfold" },
//   { id: 5, name: "Rope", price: 60, img: "https://source.unsplash.com/400x400/?rope" },
//   { id: 6, name: "Gag Ball", price: 80, img: "https://source.unsplash.com/400x400/?gag,ball" },
//   { id: 7, name: "Ankle Restraints", price: 100, img: "https://source.unsplash.com/400x400/?restraints" },
//   { id: 8, name: "Mask", price: 40, img: "https://source.unsplash.com/400x400/?mask" },
//   { id: 9, name: "Gloves", price: 55, img: "https://source.unsplash.com/400x400/?leather,gloves" },
//   { id: 10, name: "Harness", price: 150, img: "https://source.unsplash.com/400x400/?harness" },
// ];

// // Verification Component with smooth fade-out
// function VerificationMessage({ email, onClose }) {
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setVisible(false), 4000);
//     const removeTimer = setTimeout(() => onClose(), 4500);
//     return () => {
//       clearTimeout(timer);
//       clearTimeout(removeTimer);
//     };
//   }, [onClose]);

//   return (
//     <div
//       className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 p-4 rounded-xl shadow-md text-center max-w-lg z-50 transition-opacity duration-500 ${
//         visible ? "opacity-100" : "opacity-0"
//       }`}
//     >
//       <h2 className="text-lg font-bold mb-1">Payment Verification</h2>
//       <p className="text-sm">
//         Thank you! Your payment will be verified and a confirmation email will
//         be sent to <span className="font-semibold">{email}</span> as soon as possible.
//       </p>
//     </div>
//   );
// }

// function Shop() {
//   const [cart, setCart] = useState([]);
//   const [showCheckout, setShowCheckout] = useState(false);
//   const [copied, setCopied] = useState(false);

//   const [shipping, setShipping] = useState("standard");
//   const [giftType, setGiftType] = useState("physical");
//   const [frontImage, setFrontImage] = useState(null);
//   const [backImage, setBackImage] = useState(null);

//   const [shippingDetails, setShippingDetails] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     street: "",
//     city: "",
//     postal: "",
//     country: "",
//   });

//   const [showVerification, setShowVerification] = useState(false);

//   const addToCart = (product) => setCart([...cart, product]);
//   const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
//   const emptyCart = () => setCart([]);

//   const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);
//   const shippingCost = shipping === "express" ? 20 : 10;
//   const total = cartTotal + (cart.length > 0 ? shippingCost : 0);

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const handleImageUpload = (e, setImage) => {
//     const file = e.target.files[0];
//     if (file) setImage(URL.createObjectURL(file));
//   };

//   const handleShippingChange = (e) => {
//     setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="max-w-[1200px] m-auto p-6 bg-white rounded-2xl shadow-lg relative">
//       {/* Verification Message */}
//       {showVerification && (
//         <VerificationMessage
//           email={shippingDetails.email}
//           onClose={() => setShowVerification(false)}
//         />
//       )}

//       <h1 className="text-4xl font-bold text-center text-pink-400 mb-10">
//         House of Satisfaction Shop
//       </h1>

//       {/* Cart Section */}
//       <div className="sticky top-0 bg-gray-100 p-4 rounded-xl shadow-md mb-8 z-20 max-w-[400px] mx-auto">
//         <h2 className="text-xl font-bold mb-3">Your Cart</h2>
//         {cart.length > 0 ? (
//           <>
//             <ul className="mb-3 max-h-[150px] overflow-y-auto text-sm">
//               {cart.map((item, index) => (
//                 <li key={index} className="flex justify-between items-center py-1 border-b">
//                   <span>{item.name}</span>
//                   <div className="flex items-center gap-2">
//                     <span>${item.price}</span>
//                     <button
//                       onClick={() => removeFromCart(index)}
//                       className="text-red-500 hover:text-red-700 text-xs"
//                     >
//                       ✕
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//             <h3 className="text-lg font-semibold">Subtotal: ${cartTotal}</h3>
//             <h3 className="text-sm text-gray-600">+ Shipping will be added at checkout</h3>

//             <div className="flex gap-2 mt-3">
//               <button
//                 onClick={() => setShowCheckout(true)}
//                 className="flex-1 bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 text-sm"
//               >
//                 Checkout
//               </button>
//               <button
//                 onClick={emptyCart}
//                 className="flex-1 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm"
//               >
//                 Empty Cart
//               </button>
//             </div>
//           </>
//         ) : (
//           <p className="text-gray-600 text-sm">Your cart is empty.</p>
//         )}
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="rounded-lg border p-4 hover:shadow-lg ease-in duration-200"
//           >
//             <img
//               src={product.img}
//               alt={product.name}
//               className="w-full h-40 object-cover rounded-md"
//             />
//             <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//             <p className="text-gray-600">${product.price}</p>
//             <button
//               onClick={() => addToCart(product)}
//               className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-3 hover:bg-pink-500"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Checkout Modal */}
//       {showCheckout && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl p-8 w-[90%] md:w-[500px] max-h-[90vh] overflow-y-auto shadow-lg relative">
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-900"
//               onClick={() => setShowCheckout(false)}
//             >
//               ✕
//             </button>

//             <h2 className="text-xl font-bold mb-3">Checkout</h2>
//             <p className="mb-3 text-md">Subtotal: ${cartTotal}</p>

//             {/* FORM START */}
//             <form
//               action="https://getform.io/f/your-getform-endpoint" // Replace with your Getform endpoint
//               method="POST"
//               encType="multipart/form-data"
//               className="space-y-5"
//               onSubmit={() => {
//                 setShowCheckout(false);
//                 setShowVerification(true);
//               }}
//             >
//               {/* Shipping Details */}
//               <h3 className="text-lg font-semibold mb-2">Shipping Details:</h3>
//               <div className="space-y-3 mb-4 text-sm">
//                 <input type="text" name="fullName" placeholder="Full Name" className="w-full border rounded-lg p-2" required />
//                 <input type="email" name="email" placeholder="Email Address" className="w-full border rounded-lg p-2" required />
//                 <input type="text" name="phone" placeholder="Phone Number" className="w-full border rounded-lg p-2" required />
//                 <input type="text" name="street" placeholder="Street Address" className="w-full border rounded-lg p-2" required />
//                 <div className="grid grid-cols-2 gap-3">
//                   <input type="text" name="city" placeholder="City" className="w-full border rounded-lg p-2" required />
//                   <input type="text" name="postal" placeholder="Postal Code" className="w-full border rounded-lg p-2" required />
//                 </div>
//                 <input type="text" name="country" placeholder="Country" className="w-full border rounded-lg p-2" required />
//               </div>

//               {/* Shipping Options */}
//               <h3 className="text-lg font-semibold mb-2">Shipping Options:</h3>
//               <div className="space-y-2 mb-4 text-sm">
//                 <label className="flex items-center gap-2">
//                   <input type="radio" name="shippingOption" value="standard" defaultChecked /> Standard Shipping (+$10)
//                 </label>
//                 <label className="flex items-center gap-2">
//                   <input type="radio" name="shippingOption" value="express" /> Express Shipping (+$20)
//                 </label>
//               </div>

//               <p className="font-semibold mb-3">Total: ${total}</p>

//               {/* Payment Section */}
//               <h3 className="text-lg font-semibold mb-2">Payment Methods:</h3>
//               <div className="space-y-3 text-sm">
//                 <div className="border rounded-lg p-3">
//                   <p className="font-bold">PayPal</p>
//                   <button type="button" onClick={() => copyToClipboard("paypal.me/houseofsatisfaction")} className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm">
//                     Copy PayPal Address
//                   </button>
//                 </div>

//                 <div className="border rounded-lg p-3">
//                   <p className="font-bold">Bitcoin</p>
//                   <button type="button" onClick={() => copyToClipboard("1ABCDxyz123BitcoinAddress")} className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm">
//                     Copy Bitcoin Address
//                   </button>
//                 </div>

//                 <div className="border rounded-lg p-3">
//                   <p className="font-bold">Venmo</p>
//                   <button type="button" onClick={() => copyToClipboard("@HouseSatisfaction")} className="bg-pink-400 text-white px-3 py-1 rounded-lg mt-2 text-sm">
//                     Copy Venmo Address
//                   </button>
//                 </div>

//                 {/* Apple Gift Card */}
//                 <div className="border rounded-lg p-3">
//                   <p className="font-bold">Apple Gift Card</p>
//                   <div className="mt-2 space-y-2">
//                     <label className="flex items-center gap-2">
//                       <input type="radio" name="giftType" value="physical" defaultChecked /> Physical Card (Upload Front & Back)
//                     </label>

//                     <div className="grid grid-cols-2 gap-3 mt-2">
//                       <label className="border rounded-lg h-32 flex items-center justify-center cursor-pointer overflow-hidden">
//                         <span className="text-gray-500 text-sm">Front</span>
//                         <input type="file" name="frontimage" accept="image/*" className="hidden" required />
//                       </label>

//                       <label className="border rounded-lg h-32 flex items-center justify-center cursor-pointer overflow-hidden">
//                         <span className="text-gray-500 text-sm">Back</span>
//                         <input type="file" name="backimage" accept="image/*" className="hidden" required />
//                       </label>
//                     </div>

//                     <label className="flex items-center gap-2 mt-3">
//                       <input type="radio" name="giftType" value="ecode" /> E-code (Send via Email)
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               {/* Upload payment proof */}
//               <div className="mt-5">
//                 <p className="font-semibold mb-2">Upload your payment proof:</p>
//                 <input type="file" name="paymentProof" accept="image/*" className="mt-1" required />
//               </div>

//               {/* Submit Button */}
//               <button type="submit" className="mt-5 w-full bg-pink-400 text-white py-2 rounded-lg hover:bg-pink-500">
//                 Verify Receipt
//               </button>

//               {copied && (
//                 <p className="text-green-600 mt-3 text-sm">Copied to clipboard ✅</p>
//               )}
//             </form>
//             {/* FORM END */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Shop;
