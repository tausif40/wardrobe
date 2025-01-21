import { Toaster } from 'react-hot-toast';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import PaymentConditions from './components/TermsAndConditions/PaymentConditions';
// admin
import AdminLogin from './components/Admin/Login/AdminLogin';
import AdminNav from './components/Header/AdminNav';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import AddCategory from './components/Admin/AddCatigory/AddCategory';
import UploadImages from './components/Admin/UploadImages/UploadImages';
import Gallery from './components/Gallery/Gallery';
import CategoryImages from './components/Gallery/CategoryImages';

function App() {
  const location = useLocation();
  const [ isVisible, setIsVisible ] = useState(false);

  useEffect(() => {
    const hasAccepted = Cookies.get("cookiesAccepted");
    if (!hasAccepted) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ location ]);

  // Check if the current path starts with "/admin"
  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      {!isAdminPath && isVisible && <CookiePolicy />}

      {/* Show Header and Footer only if not on admin paths */}
      {!isAdminPath && <Header />}
      <Routes>
        <Route path="/" element={<HomePageLayout />} />
        <Route path="/wardrobes" element={<Wardrobes />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sliding-wardrobes" element={<SlidingWardrobes />} />
        <Route path="/built-in-wardrobes" element={<BuiltInWardrobes />} />
        <Route path="/fitted-kitchens" element={<FittedKitchens />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/images/:id" element={<CategoryImages />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/payment-terms-and-conditions" element={<PaymentConditions />} />

        {/* admin */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/add-category" element={<AddCategory />} />
        <Route path="/admin/upload-images" element={<UploadImages />} />
      </Routes>
      {!isAdminPath && <Footer />}
    </>
  );
}

export default App;
