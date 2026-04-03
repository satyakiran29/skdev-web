import React from 'react';
import { NavLink } from 'react-router-dom';
import { Play } from 'lucide-react';
import heroLogo from '../assets/hero.png';

export default function Header() {
  return (
    <header className="glass-panel" style={{ 
      position: 'fixed', top: '1rem', left: '1rem', right: '1rem', 
      zIndex: 50, padding: '1rem 2rem', borderRadius: '1rem' 
    }}>
      <div className="flex-between">
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src={heroLogo} alt="SKDev Logo" style={{ width: '36px', height: '36px', objectFit: 'cover', borderRadius: '50%', background: 'var(--bg-secondary)' }} />
          <span className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 800 }}>SKDev</span>
        </NavLink>
        
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <NavLink to="/apps" style={({ isActive }) => ({ color: isActive ? 'var(--accent-primary)' : 'inherit' })}>Apps</NavLink>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginLeft: '1rem', borderLeft: '1px solid var(--border-color)', paddingLeft: '1rem' }}>
            <a href="https://play.google.com/store/apps/dev?id=9166037782169864125" target="_blank" rel="noreferrer" className="btn-icon" title="Play Store Profile">
              <Play size={20} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
