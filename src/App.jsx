// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/HeroSection';
// import Destinations from './pages/Destinations';
// import Packages from './pages/Packages';
// import Hotels from './pages/Hotel';
// import Transport from './pages/Transport';
// import BookingCalendar from './components/BookingCalendar';
// import Rent from "./pages/Rent";
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import './index.css';
// import { Import } from 'lucide-react';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-50">
//         <Navbar />
        
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/destinations" element={<Destinations />} />
//           <Route path="/packages" element={<Packages />} />
//           <Route path="/hotels" element={<Hotels />} />
//           <Route path="/transport" element={<Transport />} />
//           <Route path="/rent" element={<Rent />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;





// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/HeroSection';
import Destinations from './pages/Destinations';
import Packages from './pages/Packages';
import Hotels from './pages/Hotel';
import Transport from './pages/Transport';
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import RefundCancellation from "./pages/RefundCancellation";
import BookingCalendar from './components/BookingCalendar';
import Rent from "./pages/Rent";
import Login from './pages/Login';
import Signup from './pages/Signup';

import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">

        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/refund-cancellation" element={<RefundCancellation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>

        <Footer />

      </div>
    </Router>
  );
}

export default App;