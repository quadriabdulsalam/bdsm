// import React from 'react';
// import Navbar from './component/navbar';
// import Main from './component/main';
// import Work from './component/work';
// import Project from './component/project';
// import Contact from './component/contact';
// import background from './assets/background.png'

// function App() {
//   return (
//     <div>
  
//       <Navbar/>
//       <Main/>
//       <Work/>
//       <Project/>
//       <Contact/>
//     </div>
//   );
// }



// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './component/navbar';
// import Main from './component/main';
// import Work from './component/work';
// import Project from './component/project';
// import Contact from './component/contact';
// import BlogDetail from './component/BlogDetail'; // new

// function App() {
//   return (
//     <Router>
//       <div className="relative">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/work" element={<Work />} />
//           <Route path="/blog" element={<Project />} />
//           <Route path="/blog/:id" element={<BlogDetail />} /> 
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './component/navbar';
// import Main from './component/main';
// import Work from './component/work';
// import Project from './component/project';
// import Contact from './component/contact';
// import BlogDetail from './component/BlogDetail';
// import Shop from "./component/Shop";

// function App() {
//   return (
//     <Router>
//       <div>
//         {/* Black overlay */}
//         <div className="absolute inset-0 bg-pink-500/70"></div>


//         {/* Main content */}
//         <div className="relative z-10">
//           {/* Navbar is now global */}
//           <Navbar />

//           <Routes>
//             {/* Home page */}
//             <Route
//               path="/"
//               element={
//                 <>
//                   <Main />
//                   <Work />
//                   <Project />
//                   <Contact />
//                 </>
//               }
//             />

//             {/* Blog detail page */}
//             <Route path="/blog/:id" element={<BlogDetail />} />

//             {/* Shop page */}
//             <Route path="/shop" element={<Shop />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './component/navbar';
import Main from './component/main';
import Work from './component/work';
import Project from './component/project';
import Contact from './component/contact';
import BlogDetail from './component/BlogDetail';
import Shop from "./component/Shop";

// Wrapper to handle conditional Navbar
function Layout() {
  const location = useLocation();

  // Hide navbar on shop and blog detail pages
  const hideNavbar = location.pathname.startsWith("/shop") || location.pathname.startsWith("/blog");

  return (
    <div>
      {/* Pink overlay */}
      <div className="absolute inset-0 bg-pink-500/70"></div>

      {/* Main content */}
      <div className="relative z-10">
        {!hideNavbar && <Navbar />}

        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <Main />
                <Work />
                <Project />
                <Contact />
              </>
            }
          />

          {/* Blog detail page */}
          <Route path="/blog/:id" element={<BlogDetail />} />

          {/* Shop page */}
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
