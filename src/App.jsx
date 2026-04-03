import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AppsSection from './pages/AppsSection';
import AppDetails from './pages/AppDetails';
import News from './pages/News';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQ from './pages/FAQ';
import Donate from './pages/Donate';
import UnderDevelopment from './pages/UnderDevelopment';

// Set this to true to hide the entire production site behind the Under Development landing page
const IS_UNDER_DEVELOPMENT = true;

function App() {
  if (IS_UNDER_DEVELOPMENT) {
    return <UnderDevelopment />;
  }

  return (
    <BrowserRouter>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<AppsSection />} />
          <Route path="/apps/:id" element={<AppDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
