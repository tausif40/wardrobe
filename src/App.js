import { Toaster } from 'react-hot-toast';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePageLayout from './components/layout/HomePageLayout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/page/AboutUs';
import Wardrobes from './components/Wardrobe/Wardrobes';
import SlidingWardrobes from './components/page/SlidingWardrobes';
import BuiltInWardrobes from './components/page/BuiltInWardrobes';
import FittedKitchens from './components/page/FittedKitchens';
import Sale from './components/page/Sale';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import CookiePolicy from './components/CookiePolicy/CookiePolicy';

function App() {
  const [ isVisible, setIsVisible ] = useState(false);

  useEffect(() => {
    const hasAccepted = Cookies.get("cookiesAccepted");
    if (!hasAccepted) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <Header />
      {isVisible && <CookiePolicy />}
      <Routes>
        <Route path="/" element={<HomePageLayout />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/wardrobes" element={<Wardrobes />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sliding-wardrobes" element={<SlidingWardrobes />} />
        <Route path="/built-in-wardrobes" element={<BuiltInWardrobes />} />
        <Route path="/fitted-kitchens" element={<FittedKitchens />} />
        <Route path="/sale" element={<Sale />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
