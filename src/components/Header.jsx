
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Play, Mail, Heart, Menu, X, Send } from 'lucide-react';
import heroLogo from '../assets/hero.webp';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);
  const location = useLocation();

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleLogoClick = (e) => {
    setIsMobileMenuOpen(false);
    const now = Date.now();
    if (now - lastClickTime > 1500) {
      setClickCount(1);
    } else {
      const nextCount = clickCount + 1;
      if (nextCount >= 5) {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('waku-waku-trigger'));
        setClickCount(0);
        return;
      }
      setClickCount(nextCount);
    }
    setLastClickTime(now);
  };

  return (
    <header className="glass-panel" style={{
      position: 'fixed', top: '1rem', left: 'clamp(0.5rem, 3vw, 1rem)', right: 'clamp(0.5rem, 3vw, 1rem)',
      zIndex: 50, padding: '0.875rem clamp(1rem, 4vw, 2rem)', borderRadius: '1rem',
      maxHeight: 'calc(100vh - 2rem)', overflowY: 'auto'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <NavLink to="/" onClick={handleLogoClick} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <img src={heroLogo} alt="SKDev Logo" style={{ width: '36px', height: '36px', objectFit: 'cover', borderRadius: '50%', background: 'var(--bg-secondary)' }} />
          <span className="text-gradient" style={{ fontSize: '1.4rem', fontWeight: 800 }}>Skdev</span>
        </NavLink>

        <nav className="desktop-nav" style={{ gap: '1rem', alignItems: 'center' }}>
          <NavLink to="/apps" style={({ isActive }) => ({ color: isActive ? 'var(--accent-primary)' : 'inherit' })}>Apps</NavLink>
          <NavLink to="/news" style={({ isActive }) => ({ color: isActive ? 'var(--accent-primary)' : 'inherit' })}>News</NavLink>
          <NavLink to="/faq" style={({ isActive }) => ({ color: isActive ? 'var(--accent-primary)' : 'inherit' })}>FAQ</NavLink>
          <NavLink to="/donate" style={({ isActive }) => ({ color: isActive ? '#ec4899' : 'inherit', display: 'flex', alignItems: 'center', gap: '0.25rem' })}>
            Support <Heart size={14} className={window.location.pathname === '/donate' ? 'fill-current' : ''} />
          </NavLink>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginLeft: '0.5rem', borderLeft: '1px solid var(--border-color)', paddingLeft: '0.75rem' }}>
            <a href="https://t.me/skdev29" target="_blank" rel="noreferrer" className="btn-icon" title="Telegram Channel">
              <Send size={18} />
            </a>
            <a href="https://play.google.com/store/apps/dev?id=9166037782169864125" target="_blank" rel="noreferrer" className="btn-icon" title="Play Store Profile">
              <Play size={18} />
            </a>
            <a href="https://www.instagram.com/skdev29/" target="_blank" rel="noreferrer" className="btn-icon" title="Instagram Profile">
              <InstagramIcon size={18} />
            </a>
            <a href="mailto:satyakiran296@gmail.com" className="btn-icon" title="Email Developer">
              <Mail size={18} />
            </a>
          </div>
        </nav>

        <button
          className="mobile-menu-btn btn-icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-dropdown animate-fade-in" style={{
          flexDirection: 'column', gap: '1.25rem',
          paddingTop: '1.25rem', marginTop: '1rem', borderTop: '1px solid var(--border-color)'
        }}>
          <NavLink to="/apps" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Apps</NavLink>
          <NavLink to="/news" style={{ fontSize: '1.1rem', fontWeight: 600 }}>News</NavLink>
          <NavLink to="/faq" style={{ fontSize: '1.1rem', fontWeight: 600 }}>FAQ</NavLink>
          <NavLink to="/donate" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ec4899', fontSize: '1.1rem', fontWeight: 600 }}>
            Support <Heart size={16} />
          </NavLink>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', paddingTop: '1rem', borderTop: '1px dotted var(--border-color)', flexWrap: 'wrap' }}>
            <a href="https://t.me/skdev29" target="_blank" rel="noreferrer" className="btn-icon" title="Telegram Channel">
              <Send size={20} />
            </a>
            <a href="https://play.google.com/store/apps/dev?id=9166037782169864125" target="_blank" rel="noreferrer" className="btn-icon" title="Play Store Profile">
              <Play size={20} />
            </a>
            <a href="https://www.instagram.com/skdev29/" target="_blank" rel="noreferrer" className="btn-icon" title="Instagram Profile">
              <InstagramIcon size={20} />
            </a>
            <a href="mailto:satyakiran296@gmail.com" className="btn-icon" title="Email Developer">
              <Mail size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
