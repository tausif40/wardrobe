import { Toaster } from 'react-hot-toast';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePageLayout from './components/layout/HomePageLayout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import Wardrobe from './components/Wardrobe/Wardrobe';
import ContactUs from './components/ContactUs/ContactUs';


function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={true} />
      <Header />

      <Routes>
        <Route path="/" element={<HomePageLayout />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
