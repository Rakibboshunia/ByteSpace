import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import CreatorProfile from './pages/CreatorProfile';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiesSettings from './pages/CookiesSettings';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import AffiliateProgram from './pages/AffiliateProgram';
import Payment from './pages/Payment';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseSlug" element={<CourseDetail />} />
          <Route path="/payment/:courseSlug" element={<Payment />} />
          <Route path="/creator/:creatorSlug" element={<CreatorProfile />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookies-settings" element={<CookiesSettings />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/affiliate-program" element={<AffiliateProgram />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
