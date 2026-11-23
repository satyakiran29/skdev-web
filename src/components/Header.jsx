import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Play, Mail, Heart, Menu, X, Send, Grid, Compass, HelpCircle, ChevronRight, Briefcase } from 'lucide-react';
import heroLogo from '../assets/hero.webp';

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

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
    { to: '/apps', label: 'Apps', icon: <Grid size={16} /> },
    { to: '/roadmap', label: 'Roadmap', icon: <Compass size={16} /> },
    { to: '/freelance', label: 'Freelance', icon: <Briefcase size={16} /> },
    { to: '/faq', label: 'FAQ', icon: <HelpCircle size={16} /> },
    { to: '/donate', label: 'Support', icon: <Heart size={16} /> },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '56px',
          zIndex: 90,
          backgroundColor: 'var(--bg-deep)',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
          }}
        >
          {/* Logo & Brand */}
          <NavLink
            to="/"
            onClick={handleLogoClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              color: 'var(--text-primary)',
            }}
          >
            <img
              src={heroLogo}
              alt="SKDev logo"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '1px solid var(--border-subtle)',
              }}
            />
            <span
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                color: 'var(--text-primary)',
              }}
            >
              SKDev
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{ gap: '24px', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  fontWeight: isActive ? 500 : 400,
                  fontSize: '0.875rem',
                  transition: 'color 140ms cubic-bezier(0.22, 1, 0.36, 1)',
                })}
              >
                {link.label}
              </NavLink>
            ))}

            <div
              style={{
                display: 'flex',
                gap: '4px',
                alignItems: 'center',
                marginLeft: '8px',
                borderLeft: '1px solid var(--border-subtle)',
                paddingLeft: '16px',
              }}
            >
              <a
                href="https://play.google.com/store/apps/dev?id=9166037782169864125"
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                title="Google Play"
              >
                <Play size={15} />
              </a>
              <a
                href="https://t.me/skdev29"
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                title="Telegram updates"
              >
                <Send size={15} />
              </a>
              <a
                href="https://www.instagram.com/skdev29/"
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                title="Instagram"
              >
                <InstagramIcon size={15} />
              </a>
              <a
                href="mailto:satyakiran296@gmail.com"
                className="btn-icon"
                title="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-menu-btn btn-icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '56px',
              left: 0,
              right: 0,
              backgroundColor: 'var(--bg-deep)',
              borderBottom: '1px solid var(--border-subtle)',
              padding: '16px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              animation: 'slideDown 180ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <NavLink
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  color: location.pathname === '/' ? 'var(--text-primary)' : 'var(--text-secondary)',
                  backgroundColor: location.pathname === '/' ? 'var(--bg-raised)' : 'transparent',
                }}
              >
                Home
                <ChevronRight size={15} style={{ color: 'var(--text-muted)' }} />
              </NavLink>

              {navLinks.map((item) => {
                const isActive = location.pathname.startsWith(item.to);
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 12px',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      backgroundColor: isActive ? 'var(--bg-raised)' : 'transparent',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight size={15} style={{ color: 'var(--text-muted)' }} />
                  </NavLink>
                );
              })}
            </div>

            <div
              style={{
                display: 'flex',
                gap: '8px',
                paddingTop: '12px',
                marginTop: '4px',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <a
                href="https://play.google.com/store/apps/dev?id=9166037782169864125"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ flex: 1, height: '36px', fontSize: '0.8rem', padding: '0 8px' }}
              >
                <Play size={14} /> Play
              </a>
              <a
                href="https://t.me/skdev29"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ flex: 1, height: '36px', fontSize: '0.8rem', padding: '0 8px' }}
              >
                <Send size={14} /> Updates
              </a>
              <a
                href="mailto:satyakiran296@gmail.com"
                className="btn btn-secondary"
                style={{ flex: 1, height: '36px', fontSize: '0.8rem', padding: '0 8px' }}
              >
                <Mail size={14} /> Email
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Dimmed backdrop */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="animate-fade-in"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(7, 8, 13, 0.65)',
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
