
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Play, Mail, Heart, Menu, X } from 'lucide-react';
import heroLogo from '../assets/hero.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="glass-panel" style={{
      position: 'fixed', top: '1rem', left: '1rem', right: '1rem',
      zIndex: 50, padding: '1rem 5%', borderRadius: '1rem',
      maxHeight: 'calc(100vh - 2rem)', overflowY: 'auto'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src={heroLogo} alt="SKDev Logo" style={{ width: '36px', height: '36px', objectFit: 'cover', borderRadius: '50%', background: 'var(--bg-secondary)' }} />
          <span className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 800 }}>Skdev</span>
        </NavLink>

        <nav className="desktop-nav" style={{ gap: '1rem', alignItems: 'center' }}>
          <NavLink to="/apps" style={({ isActive }) => ({ color: isActive ? 'var(--accent-primary)' : 'inherit' })}>Apps</NavLink>
          <NavLink to="/news" style={({ isActive }) => ({ color: isActive ? 'var(--accent-primary)' : 'inherit' })}>News</NavLink>
          <NavLink to="/donate" style={({ isActive }) => ({ color: isActive ? '#ec4899' : 'inherit', display: 'flex', alignItems: 'center', gap: '0.25rem' })}>
            Support <Heart size={14} className={window.location.pathname === '/donate' ? 'fill-current' : ''} />
          </NavLink>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginLeft: '0.5rem', borderLeft: '1px solid var(--border-color)', paddingLeft: '0.5rem' }}>
            <a href="mailto:satyakiran296@gmail.com" className="btn-icon" title="Email Developer">
              <Mail size={20} />
            </a>
            <a href="https://play.google.com/store/apps/dev?id=9166037782169864125" target="_blank" rel="noreferrer" className="btn-icon" title="Play Store Profile">
              <Play size={20} />
            </a>
          </div>
        </nav>

        <button
          className="mobile-menu-btn btn-icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-dropdown animate-fade-in" style={{
          flexDirection: 'column', gap: '1.5rem',
          paddingTop: '1.5rem', marginTop: '1rem', borderTop: '1px solid var(--border-color)'
        }}>
          <NavLink to="/apps">Apps</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/donate" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ec4899' }}>
            Support <Heart size={16} />
          </NavLink>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', paddingTop: '1rem', borderTop: '1px dotted var(--border-color)' }}>
            <a href="mailto:satyakiran296@gmail.com" className="btn-icon">
              <Mail size={20} />
            </a>
            <a href="https://play.google.com/store/apps/dev?id=9166037782169864125" target="_blank" rel="noreferrer" className="btn-icon">
              <Play size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
