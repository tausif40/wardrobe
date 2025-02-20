import { Toaster } from 'react-hot-toast';
import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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
import BackToTop from './components/BackToTop/backToTop'
// admin
import AdminLogin from './components/Admin/Login/AdminLogin';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import AddCategory from './components/Admin/AddCatigory/AddCategory';
import UploadImages from './components/Admin/UploadImages/UploadImages';
import Gallery from './components/Gallery/Gallery';
import CategoryImages from './components/Gallery/CategoryImages';
import PageNotFound from './components/page/PageNotFound';
import LandingPages from './components/LandingPages/LandingPages';
import UserHeader from './components/layout/UserHeader';
import AdminHeader from './components/layout/AdminHeader';
import BookConsultation from './components/BookConsultation/BookConsultation';
import HomePage from './components/page/HomePage';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const SESSION_TIMEOUT = 3 * 60 * 10000;
  useEffect(() => {
    const sessionStartTime = sessionStorage.getItem('sessionStartTime');
    const currentTime = Date.now();
    if (sessionStartTime && currentTime - sessionStartTime > SESSION_TIMEOUT) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('sessionStartTime');
      navigate('/admin');
    }
  }, [ navigate, SESSION_TIMEOUT ]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ location ]);

  // Check if the current path starts with "/admin"
  const isAdminPath = location.pathname.startsWith('/admin');
  // const isAdminPath = location.pathname === "/admin";

  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      {/* {!isAdminPath && isVisible && <CookiePolicy />} */}

      {/* Show Header and Footer only if not on admin paths */}
      {/* {!isAdminPath && <Header />} */}
      <Routes>
        <Route path="/" element={<UserHeader />}>
          <Route index element={<HomePageLayout />} />
          <Route path="home-page" element={<HomePage />} />
          <Route path="wardrobes" element={<Wardrobes />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="sliding-wardrobes" element={<SlidingWardrobes />} />
          <Route path="built-in-wardrobes" element={<BuiltInWardrobes />} />
          <Route path="fitted-kitchens" element={<FittedKitchens />} />
          <Route path="sale" element={<Sale />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="images/:id" element={<CategoryImages />} />
          <Route path="terms-conditions" element={<TermsAndConditions />} />
          <Route path="payment-terms-and-conditions" element={<PaymentConditions />} />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
        <Route path="/landing-pages" element={<LandingPages />} />

        {/* admin */}
        <Route path="/admin" element={<AdminHeader />}>
          <Route index element={<AdminLogin />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customer-inquiries" element={<BookConsultation />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="upload-images" element={<UploadImages />} />
        </Route>
      </Routes>
      <BackToTop />
      {/* {!isAdminPath && <Footer />} */}
    </>
  );
}

export default App;
