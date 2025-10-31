// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// function BlogDetail() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const post = location.state; // get blog data

//   if (!post) {
//     return <p className="text-center py-20 text-gray-300">Blog post not found.</p>;
//   }

//   return (
//     <div className="max-w-3xl mx-auto px-6 py-16">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 text-pink-400 hover:text-pink-600"
//       >
//         ← Back
//       </button>
//       <img src={post.image} alt={post.title} className="w-full h-72 object-cover rounded-lg" />
//       <h1 className="text-3xl font-bold mt-6 text-pink-400">{post.title}</h1>
//       <p className="mt-4 text-gray-200 leading-relaxed whitespace-pre-line">
//         {post.content}
//       </p>
//     </div>
//   );
// }

// export default BlogDetail;





import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function BlogDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state; // get blog data

  if (!post) {
    return <p className="text-center py-20 text-white">Blog post not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-white hover:text-gray-100 font-medium"
      >
        ← Back
      </button>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-72 object-cover rounded-lg shadow-lg"
      />
      <h1 className="text-3xl font-bold mt-6 text-white drop-shadow-lg">
        {post.title}
      </h1>
      <p className="mt-4 text-gray-900 leading-relaxed whitespace-pre-line bg-white/80 p-4 rounded-lg">
        {post.content}
      </p>
    </div>
  );
}

export default BlogDetail;
