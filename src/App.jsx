import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from "./components/WhatsAppButton";
import ChatWidget from "./components/ChatWidget";
import ScrollToTop from './components/ScrollToTop';
import BottomNav from "./components/BottomNav";

import Home from './pages/HeroSection';
import Destinations from './pages/Destinations';
import Packages from './pages/Packages';
import Hotels from './pages/Hotel';
import HotelDetails from './pages/HotelDetails';
import BookingPage from './pages/BookingPage';
import Vehicle  from './pages/Vehicle';
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import RefundCancellation from "./pages/RefundCancellation";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import Partner from './pages/Partner';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SmartChatBot from "./pages/SmartChatBot";
import HotelRegistrationForm from './pages/HotelRegistrationForm';
import HomeRegistrationForm from "./pages/HomeRegistrationForm";
import BusRegistrationForm from "./pages/BusRegistrationForm";
import CabRegistration from "./pages/CabRegistration";
import BikeRegistration from "./pages/BikeRegistration";
import './index.css';

/* 🔥 Separate component to use useLocation */
function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      <ScrollToTop />
      <Navbar />

      {/* ✅ Show only on Contact page */}
      {location.pathname === "/contact" && <WhatsAppButton />}
      {location.pathname === "/contact" && <ChatWidget />}

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          <Route path="/booking/:id" element={<BookingPage />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/refund-cancellation" element={<RefundCancellation />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/hotel-registration" element={<HotelRegistrationForm />} />
          <Route path="/home-registration" element={<HomeRegistrationForm />} />
          <Route path="/bus-registration" element={<BusRegistrationForm />} />
          <Route path="/cab-registration/:type" element={<CabRegistration />} />
          <Route path="/bike-registration/:type" element={<BikeRegistration />} />

          {/* <Route path="/support/chat" element={<SmartChatBot />} /> */}
        </Routes>
      </div>
      <Footer />
      <BottomNav />
    </div>
  );
}

/* 🔥 Main App */
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;