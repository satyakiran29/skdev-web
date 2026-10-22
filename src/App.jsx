import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastProvider } from './context/ToastContext';

// Pages
import Home from './pages/Home';
import AppsSection from './pages/AppsSection';
import AppDetails from './pages/AppDetails';
import Roadmap from './pages/Roadmap';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQ from './pages/FAQ';
import Donate from './pages/Donate';
import Freelance from './pages/Freelance';
import UnderDevelopment from './pages/UnderDevelopment';
import NotFound from './pages/NotFound';

import AnyaEasterEgg from './components/AnyaEasterEgg';
import PageTransitions from './experience/PageTransitions';
import Pointer from './experience/Pointer';
import './experience/experience.css';
import './experience/playground.css';

// Set this to true to hide the entire production site behind the Under Development landing page
const IS_UNDER_DEVELOPMENT = false;

function App() {
  const [isEasterEggActive, setIsEasterEggActive] = React.useState(false);

  React.useEffect(() => {
    const handleTrigger = () => {
      setIsEasterEggActive(prev => !prev);
    };

    window.addEventListener('waku-waku-trigger', handleTrigger);
    return () => {
      window.removeEventListener('waku-waku-trigger', handleTrigger);
    };
  }, []);

  React.useEffect(() => {
    if (isEasterEggActive) {
      document.body.classList.add('retro-mode');
    } else {
      document.body.classList.remove('retro-mode');
    }
  }, [isEasterEggActive]);

  if (IS_UNDER_DEVELOPMENT) {
    return <UnderDevelopment />;
  }

  return (
    <BrowserRouter>
      <ToastProvider>
        <Header />
        <Pointer />
        <main className="main-content" id="main-content" tabIndex={-1}>
          <PageTransitions><Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<AppsSection />} />
            <Route path="/apps/:id" element={<AppDetails />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/freelance" element={<Freelance />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="*" element={<NotFound />} />
          </Routes></PageTransitions>
        </main>
        <Footer />
        {isEasterEggActive && <AnyaEasterEgg onClose={() => setIsEasterEggActive(false)} />}
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
