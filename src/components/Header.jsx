import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Play, Mail, Heart, Menu, X, Send, Home as HomeIcon, Grid, Compass, HelpCircle, ChevronRight } from 'lucide-react';
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

  // Close menu automatically on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

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

  const navLinks = [
    { to: '/', label: 'Home', icon: <HomeIcon size={18} /> },
    { to: '/apps', label: 'Apps', icon: <Grid size={18} /> },
    { to: '/roadmap', label: 'Roadmap', icon: <Compass size={18} /> },
    { to: '/faq', label: 'FAQ', icon: <HelpCircle size={18} /> },
    { to: '/donate', label: 'Support', icon: <Heart size={18} color="#ec4899" />, special: true },
  ];

  return (
    <>
      <header
        className="glass-panel"
        style={{
          position: 'fixed',
          top: 'clamp(0.5rem, 2vw, 1rem)',
          left: 'clamp(0.5rem, 3vw, 1.25rem)',
          right: 'clamp(0.5rem, 3vw, 1.25rem)',
          zIndex: 90,
          padding: 'clamp(0.65rem, 2vw, 0.875rem) clamp(0.875rem, 3vw, 1.75rem)',
          borderRadius: 'clamp(1rem, 3vw, 1.25rem)',
          backgroundColor: 'rgba(15, 23, 42, 0.88)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo & Brand */}
          <NavLink
            to="/"
            onClick={handleLogoClick}
            style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0, textDecoration: 'none' }}
          >
            <img
              src={heroLogo}
              alt="SKDev Logo"
              style={{
                width: '34px',
                height: '34px',
                objectFit: 'cover',
                borderRadius: '50%',
                background: 'var(--bg-secondary)',
                border: '1.5px solid rgba(56, 189, 248, 0.4)',
              }}
            />
            <span className="text-gradient" style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
              Skdev
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{ gap: '1.25rem', alignItems: 'center' }}>
            <NavLink
              to="/apps"
              style={({ isActive }) => ({
                color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontWeight: isActive ? 600 : 500,
                fontSize: '0.95rem',
                transition: 'color 0.2s ease',
              })}
            >
              Apps
            </NavLink>
            <NavLink
              to="/roadmap"
              style={({ isActive }) => ({
                color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontWeight: isActive ? 600 : 500,
                fontSize: '0.95rem',
                transition: 'color 0.2s ease',
              })}
            >
              Roadmap
            </NavLink>
            <NavLink
              to="/faq"
              style={({ isActive }) => ({
                color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontWeight: isActive ? 600 : 500,
                fontSize: '0.95rem',
                transition: 'color 0.2s ease',
              })}
            >
              FAQ
            </NavLink>
            <NavLink
              to="/donate"
              style={({ isActive }) => ({
                color: isActive ? '#ec4899' : 'var(--text-secondary)',
                fontWeight: isActive ? 700 : 500,
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                transition: 'color 0.2s ease',
              })}
            >
              Support <Heart size={14} className={location.pathname === '/donate' ? 'fill-current' : ''} />
            </NavLink>

            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginLeft: '0.5rem', borderLeft: '1px solid var(--border-color)', paddingLeft: '0.75rem' }}>
              <a href="https://t.me/skdev29" target="_blank" rel="noreferrer" className="btn-icon" title="Telegram Channel">
                <Send size={17} />
              </a>
              <a href="https://play.google.com/store/apps/dev?id=9166037782169864125" target="_blank" rel="noreferrer" className="btn-icon" title="Play Store Profile">
                <Play size={17} />
              </a>
              <a href="https://www.instagram.com/skdev29/" target="_blank" rel="noreferrer" className="btn-icon" title="Instagram Profile">
                <InstagramIcon size={17} />
              </a>
              <a href="mailto:satyakiran296@gmail.com" className="btn-icon" title="Email Developer">
                <Mail size={17} />
              </a>
            </div>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-menu-btn btn-icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            style={{
              backgroundColor: isMobileMenuOpen ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              color: isMobileMenuOpen ? 'var(--accent-primary)' : 'var(--text-primary)',
            }}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Animated Dropdown Sheet */}
        {isMobileMenuOpen && (
          <div
            className="animate-fade-in"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              paddingTop: '1rem',
              marginTop: '0.875rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              animation: 'slideDown 0.25s ease-out',
            }}
          >
            {/* Route Navigation Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {navLinks.map((item) => {
                const isActive = item.to === '/' ? location.pathname === '/' : location.pathname.startsWith(item.to);
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.75rem',
                      fontSize: '1rem',
                      fontWeight: isActive ? 700 : 500,
                      backgroundColor: isActive ? 'rgba(56, 189, 248, 0.12)' : 'transparent',
                      color: item.special ? '#ec4899' : (isActive ? 'var(--accent-primary)' : 'var(--text-primary)'),
                      border: isActive ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid transparent',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight size={16} style={{ opacity: isActive ? 1 : 0.4 }} />
                  </NavLink>
                );
              })}
            </div>

            {/* Mobile Social Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '0.5rem',
                paddingTop: '1rem',
                marginTop: '0.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <a
                href="https://t.me/skdev29"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.6rem', minHeight: '40px', borderRadius: '0.75rem', fontSize: '0.8rem', gap: '0.3rem' }}
                title="Telegram"
              >
                <Send size={16} />
              </a>
              <a
                href="https://play.google.com/store/apps/dev?id=9166037782169864125"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.6rem', minHeight: '40px', borderRadius: '0.75rem', fontSize: '0.8rem', gap: '0.3rem' }}
                title="Play Store"
              >
                <Play size={16} />
              </a>
              <a
                href="https://www.instagram.com/skdev29/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.6rem', minHeight: '40px', borderRadius: '0.75rem', fontSize: '0.8rem', gap: '0.3rem' }}
                title="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="mailto:satyakiran296@gmail.com"
                className="btn btn-secondary"
                style={{ padding: '0.6rem', minHeight: '40px', borderRadius: '0.75rem', fontSize: '0.8rem', gap: '0.3rem' }}
                title="Email Developer"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Dimmed backdrop when mobile menu is open for easy dismissal */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(2, 6, 23, 0.7)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            zIndex: 80,
          }}
          aria-hidden="true"
        />
      )}
    </>
  );
}
